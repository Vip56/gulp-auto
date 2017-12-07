var glob=require('glob');
var fs=require('fs');
var path=require('path');
var through=require('through2')

var stm=fs.createWriteStream('./a.txt')


// stm.write('heheheh','utf-8')


glob('./services/**.ts',(err,files)=>{
    // console.log(file);
    var index=0;
    files.forEach((file)=> {
        // console.log(path.join(__dirname,file))
        let dest=path.join(__dirname,file).replace('services','dest')
        fs.createReadStream(file).pipe(through.obj(function(chunk,enc,cb){
            var temp='hiehei'+index++;
            
            this.push(temp);
            
            cb()
        }))
        .pipe(fs.createWriteStream(dest))
    });
})
