var gulp = require("gulp");
var $ = require('gulp-load-plugins')();
var ts = require("gulp-typescript");
var concat = require('gulp-concat');
var rimraf = require("rimraf");
var jasmine = require('gulp-jasmine');
var tsProject = ts.createProject('tsconfig.json');
var tsTestProject = ts.createProject('./test/tsconfig.json');
var htmlmin = require('gulp-htmlmin');
var wiredep = require('wiredep').stream;
var openURL = require('open');
var imagemin = require('gulp-imagemin');
var gulpSequence = require('gulp-sequence');
var runSequence = require('run-sequence');
var moment = require('moment');
var gulpTypescript=require('gulp-typescript')
var gulpJsmin=require('gulp-jsmin')

var  gulpLine=require('./gulp-demo/gulp/gulpLine');



var paths = {
    tpl:'src/tpl/*',
    scripts:{
        service:'dist/src/services/*.js',
        controller:'dist/src/controllers/**/*.js',
        allJS:'dist/src/*.js',
        serviceMin:'dist/src/services/service.min.js',
        directiveMin:'dist/src/directives/directive.min.js',
        mainMin:'dist/src/main.min.js',
        residue:[
                'dist/src/config.js',
                'dist/src/controllers/menuController.js',
                'dist/src/directives/datetimePicker/jquery.datetimepicker.js',
                'dist/src/directives/ui-nav.js',
                'dist/src/directives/ng-thumb.js'
            ]
    },
    test:[
        'spec/*.js'
    ],
    testRequire:[
        'dist/libs/angular/angular.js',
        'dist/libs/mustache.js/mustache.js'
    ],
    typescript:{
        service:'src/services/*.ts',
        controller:'src/controllers/**/*.ts',
        allTs: ['src/**/**/*.ts'],
        directives:"src/directives/**/*.ts",
        module:'src/*.ts'
    },
    css:"src/css/*.css",
    html:'src/**/*.html',
    index:'src/index.dev.html',
    dirname:'dist/src'
}

gulp.task('line',function(){
    return gulp.src('./src/services/*.ts')
            .pipe(gulpLine())
            .pipe(gulpTypescript())
            .pipe(gulpJsmin())
            .pipe(gulp.dest('./dist/src/services'))
})


gulp.task('testHtmlmin',["typescript"],function () {
    var options = {
        removeComments: true,  //清除HTML注释
        collapseWhitespace: false,  //压缩HTML
        collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true,  //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
        minifyJS: true,  //压缩页面JS
        minifyCSS: true  //压缩页面CSS
    };
    var vendorStream = gulp.src(['../dist/src/*.js'],{read: false});
   return gulp.src('src/index.dev.html')
        // .pipe(wiredep({
        //     ignorePath: /dist\//,
        // }))    
        // .pipe($.inject(vendorStream))
        // .pipe($.useref())
        .pipe(htmlmin(options))
        // .pipe($.if('*.js', $.uglify()))
        .pipe(gulp.dest('dist'))
        .pipe($.plumber())
        .pipe($.connect.reload());
});

gulp.task('useref',function(){
    return gulp.src('src/index.dev.html')
        .pipe($.useref())
        .pipe(gulp.dest('build'));
})


//清除dist/src下文件
gulp.task("clean",function(cb){
    rimraf('dist/src',cb);
});
gulp.task("clean:rev",function(cb){
    rimraf('dist/rev',cb);
});
gulp.task("clean:componentRev",function(cb){
    rimraf('dist/componentRev',cb);
});
gulp.task("clean:index",function(cb){
    rimraf('dist/*.html',cb);
});

gulp.task("clean:dist",function(cb){
    return gulp.src(['dist/*','!dist/libs'], { read: false }) // much faster 
    .pipe($.clean());
})


//typescript
gulp.task("typescript",['build:config'],function(){
    var tsResult = gulp.src(paths.typescript.allTs.concat(['typings/index.d.ts']))
        .pipe($.changed('../src',{extension:'.ts'}))
        .pipe($.typescript(tsProject))
        .pipe($.plumber())
        .pipe($.connect.reload());
        return tsResult.pipe(gulp.dest('dist/src'));
});



gulp.task('start:server', function () {
    $.connect.server({
        root: ['dist',__dirname],
        port: 4000,
        livereload: true,
        fallback: 'dist/index.dev.html'
    });
});



//watch
gulp.task('watch',function(){
    $.watch(paths.typescript.allTs.concat(['typings/index.d.ts']),function(e){
        babelFile(e.path);
    })

    $.watch([paths.html,'!src/index.dev.html'])
    .pipe($.changed('../src',{extension:'.html'}))
    .pipe($.plumber())
    .pipe($.connect.reload());

    $.watch(paths.index,function(){
         gulp.start('testHtmlmin');
    })

    $.watch(paths.css)
    .pipe($.plumber())
    .pipe($.connect.reload());

});



gulp.task('test:core', function () {
    var testToFiles = paths.testRequire.concat(paths.scripts.allJS, paths.test);
    console.info(testToFiles);
    return gulp.src(testToFiles)
      .pipe($.karma({
          configFile: 'karma.conf.js',
          autoWatch: true,
          singleRun: false,
          action: 'watch'
      })).on('error', function (err) {
          // Make sure failed tests cause gulp to exit non-zero
          console.log("Failed with: ", err);
          process.exit(-1); //instead of erroring the stream, end it
      });
});

gulp.task('test', ['default','test:build','start:server:test', 'test:core'], function () {
    process.exit(0);
});

function babelFile(file){
  var fileurls = file.replace(/[^\\]*$/,"").replace(/src/,"dist/src").replace(/\//g,"\\");
   
  gulp.src([file].concat(['typings/index.d.ts']))
    .pipe($.typescript(tsProject))
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(fileurls))
    .pipe($.debug({title: "编译"}))
    .pipe($.plumber())
    .pipe($.connect.reload());
}


gulp.task('start:dev', ['watch','start:server'], function () {
    openURL('http://127.0.0.1:4000');
    // openURL('http://localhost:5001')
});

gulp.task('start',['clean:dist','typescript','testHtmlmin'],function(){
    gulp.start('line')
    gulp.start("start:dev");
})


/***************************
 * build
 ***************************/
//开启服务
gulp.task('start:buildService', function () {
    $.connect.server({
        root: ['dist',__dirname],
        port: 4000,
        livereload: true,
        fallback: 'dist/index.html'
    });
});



/**
 * 编译ts并压缩所有js
 */
gulp.task('build:config',function(){
   return gulp.src(paths.typescript.allTs.concat(['typings/index.d.ts']))   
        .pipe(ts({
            target: "es5",
            noImplicitAny: false,
            module: "none",
            removeComments: true,
            sourceMap: false
        }))
});

gulp.task('build:ts',['build:config'], function(){
        var tsResult = gulp.src(paths.typescript.allTs.concat(['typings/index.d.ts']))
        .pipe(ts({
            target: "es5",
            noImplicitAny: false,
            module: "none",
            removeComments: true,
            sourceMap: false
        }))
        .pipe($.uglify())
        .pipe($.plumber())
        return tsResult.pipe(gulp.dest('dist/src')); 
});



//生成index、压缩service、directive
gulp.task('build:index',function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true  
    };
    return gulp.src('src/index.html')
        // .pipe(wiredep({
        //     ignorePath: /dist\//,
        // }))
        // .pipe($.if('*.js', $.uglify()))  
        // .pipe($.if('*.css', $.minifyCss()))
        .pipe($.useref())
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe($.plumber())
});



gulp.task('replaceCtrl',function(){
    return gulp.src('dist/src/config.router.js')
        .pipe($.replace('.js',".js?v="+moment().format('YYMMDDHHmm')))
        .pipe($.replace('.html',".html?v="+moment().format('YYMMDDHHmm')))
        .pipe(gulp.dest('dist/src'));
})

gulp.task('replaceIndex',function(){
    return gulp.src('dist/index.html')
        .pipe($.replace('dist/src/services', 'src/services'))
        .pipe($.replace('dist/src/directives', 'src/directives'))
        .pipe($.replace(/\.\.\/src\/.*?\.js/igm,function(str){
            return str + '?v=' + moment().format('YYMMDDHHmm')
        }))
        .pipe($.replace(/\.\.\/src\/.*?\.css/igm,function(str){
            return str + '?v=' + moment().format('YYMMDDHHmm')
        }))
        .pipe(gulp.dest('dist'));
})




//service-directive加后缀
gulp.task('build:component',function(){
    return gulp.src([paths.scripts.serviceMin,paths.scripts.directiveMin,paths.scripts.mainMin])
        .pipe($.rev())
        .pipe(gulp.dest('dist/src'))	
        .pipe($.rev.manifest())
        .pipe(gulp.dest('dist/componentRev'))
        .pipe($.plumber())
});

//替换component加入后缀
gulp.task('rev:component',function() {
	return gulp.src(['dist/componentRev/*.json','dist/index.html']) 
		.pipe($.revCollector({replaceReved: true}))								   
		.pipe(gulp.dest('dist'));
});
//替换路径
gulp.task('replaceDist', function(){
  return gulp.src("dist/index.html")
    .pipe($.replace('dist/src/services', 'src/services'))
    .pipe($.replace('dist/src/directives', 'src/directives'))
    .pipe(gulp.dest('dist'));
});

/**
 * controller 
 */
//加后缀
gulp.task("rev:ctrl",function(){
    return gulp.src(paths.scripts.controller)
        .pipe($.rev())
        .pipe(gulp.dest('dist/src/controllers'))	
        .pipe($.rev.manifest())
        .pipe(gulp.dest('dist/rev'))
        .pipe($.plumber())
});
//替换controller版本号
gulp.task('revCollector:route',function() {
	return gulp.src(['dist/rev/*.json', 'dist/src/config.router.js']) 
		.pipe($.revCollector({replaceReved: true}))								   
		.pipe(gulp.dest('dist/src'));					 
});



//压缩合并css
gulp.task('testCss', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('app.min.css')) 
        .pipe($.minifyCss())
        .pipe(gulp.dest('dist/src/css'));
});
//复制文件
gulp.task('copy:ico',function(){
    return gulp.src("src/*.ico")
    .pipe(gulp.dest("dist"));
});
gulp.task('copy:tpl',function(){
      return  gulp.src("src/tpl/*")
        .pipe(gulp.dest("dist/src/tpl"));
});
gulp.task('copy:content',function(){
     return   gulp.src("src/content.html")
        .pipe(gulp.dest("dist/src"));
});
gulp.task('copy:fonts',function(){
      return  gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/src/fonts"));
});
gulp.task('copy:img',function(){
     return   gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/src/img"));
});
gulp.task('copy:js',function(){
     return   gulp.src("src/directives/datetimePicker/jquery.datetimepicker.js")
        .pipe(gulp.dest("dist/src/directives/datetimePicker"));
});
gulp.task('copy:directiveTpl',function(){
    return gulp.src("src/directives/**/*.html")
        .pipe(gulp.dest("dist/src/directives"));
})
gulp.task('copy:vendor',function(){
  return  gulp.src("vendor/**/*")
        .pipe($.if('*.js', $.uglify()))  
        .pipe(gulp.dest("dist/vendor"));
});
gulp.task('build:residue',function(){
    return gulp.src(paths.scripts.residue)
            .pipe(concat('main.min.js'))
            .pipe($.uglify())
            .pipe(gulp.dest('dist/src'))  
})

gulp.task('copy',['copy:tpl','copy:ico','copy:content','copy:fonts','copy:img','copy:js','copy:directiveTpl','copy:vendor']);

gulp.task('build', function(callback) {
  runSequence(
    "clean:dist",['testCss','copy','build:ts'],
    ['replaceCtrl'],
    ['build:residue'],
    ['build:index'],
    ['replaceIndex'],
    callback)
});

