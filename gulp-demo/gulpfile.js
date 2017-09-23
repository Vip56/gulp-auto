var gulp=require('gulp');
var gulpPrefixer=require('./prefixer');

var fs=require('fs')

var gulpTypescript=require('gulp-typescript')
var gulpJsmin=require('gulp-jsmin')
var gulpLine=require('./gulp/gulpLine')

gulp.task('prefix',function(){
    return gulp.src('./services/areaService.ts',{buffer:false})
            .pipe(gulpPrefixer('//this is prefix text of\n'))
            .pipe(gulp.dest('./dest'))
})
var temp=[]
var i=0;

gulp.task('service',function(){
    return gulp.src('./IServices/*.ts')
        .pipe(gulpService())
        .pipe(gulpTypescript())
        .pipe(gulpJsmin())
        .pipe(gulp.dest('./dest'))
})

gulp.task('line',function(){
    return gulp.src('./IServices/*.ts')
            .pipe(gulpLine())
            // .pipe(gulpTypescript())
            // .pipe(gulpJsmin())
            .pipe(gulp.dest('./dist'))
})
