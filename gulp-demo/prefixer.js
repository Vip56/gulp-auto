const through=require('through2');
var gutil=require('gulp-util');
var PluginError=gutil.PluginError;

const PLUGIN_NAME='gulp-prefixer';

function prefixStream(prefixText){
    var stream=through();
    stream.write(prefixText);
    return stream;
}

function gulpPrefixer(prefixText){
    if(!prefixText){
        throw new PluginError(PLUGIN_NAME,'Missing prefix text');
    }
    

    var stream=through.obj(function(file,enc,cb){
        if(file.isStream()){
            var streamer=prefixStream(prefixText);
            streamer.on('erroe',this.emit.bind(this,'error'));
            // console.log(file.contents)
           
           
            file.contents=file.contents.pipe(streamer)

        }
        if(file.isBuffer()){
            var bufferer=new Buffer(prefixText);
            file.contents=Buffer.concat([bufferer,file.contents]);
        }
        this.push(file);
        cb();
    })
    return stream
}

module.exports=gulpPrefixer;