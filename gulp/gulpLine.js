const through=require('through2');
const rs=require('replacestream');
const TMSInfo=require('./config/basicConfig').TMSInfo
const getTmsFnBody=require('./config/getTmsFnBody').getTmsFnBody;
const getClassDetail=require('./config/basicConfig').getClassDetail
function gulpLine(baseUrl='http://localhost:8080'){
   

    return through.obj(function(file,enc,cb){
       
        
        var str=file.contents.toString();
        var interfaceStr=str.substr(str.indexOf('result'))
        var lines=interfaceStr.match(/.+\n/g);
        
        let className=''//interface name
        let classStr=''
        let totalFnStr='';
        var tempUrl='';
        var tempMethod='get';
        var tempFn=''

        if(lines&&Array.isArray(lines)){
            lines.forEach((line)=> {
                if(!className&&line.indexOf('interface')>-1){
                    className=line.match(/\s.+?\n/g)[0].replace('{','').trim();
                    // console.log(className)
                }
    
                if(line.indexOf('url')>-1){   //这一行匹配到了url，
                    tempUrl=line.match(/url\s.+?\n/)[0].replace('url','').trim();
                    // console.log(tempUrl)
                }
                if(line.indexOf('method')>-1){
                    tempMethod=line.match(/\s\w+?\n/)[0].trim();
                    // console.log(tempMethod.trim())
                }
                if(line.indexOf('//')===-1&&line.match(/\(.*\).*\:/)){
                    tempFn=line.replace(';','').trim();
                   
                    let fnbody=getTmsFnBody(baseUrl+tempUrl,tempMethod);
                    
                    totalFnStr=totalFnStr+tempFn+'\n'+fnbody+'\n';
                    tempUrl='';
                    tempMethod='get';
                    tempFn=''
                }
                
                
                
            });
        }
        
        classStr=className.substr(0);

        var final=str.substr(0,str.indexOf('result'))+'\n' +getClassDetail(classStr,className,totalFnStr);

        file.contents=new Buffer(final)
        
        this.push(file);
        
        cb();
       
    })
    
}

module.exports=gulpLine