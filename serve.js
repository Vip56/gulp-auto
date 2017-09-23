var express=require('express');
var fs=require('fs');
var bodyParser = require('body-parser');



var app=express();
app.use(bodyParser.json());

// app.use(cors({
//     origin:['http://localhost:5000','127.0.0.1:5000'],
//     methods:['GET','POST'],
    
// }))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/citylist',function(req,res,next){
    var data=fs.readFileSync('./serve.json','utf-8');
    data=JSON.parse(data)
    console.log(data.city)
    res.send(data.city)
})
app.post('/addcity',(req,res,next)=>{
    var newCity=req.body.name;
    var data=fs.readFileSync('./serve.json','utf-8');
    data=JSON.parse(data);

    if(data.city.indexOf(newCity)===-1){
        data.city.push(newCity);
        fs.writeFile('./serve.json',JSON.stringify(data),()=>{
            res.send('success');
        })
    }else{
        res.send('城市名已存在')
    }
})

app.delete('/deleteCity',(req,res,next)=>{
    var name=req.query.name;
    // console.log(name);
    var data=fs.readFileSync('./serve.json','utf-8');
    data=JSON.parse(data);
    var idx=data.city.indexOf(name)
    if(idx===-1){
        res.send('未找到该城市')
    }else{  
        data.city.splice(idx,1);
        fs.writeFile('./serve.json',JSON.stringify(data),()=>{
            res.send(`删除城市${name}成功`)
        })
    }


    
})







app.listen(8080,function(){
    console.log('listening 8080')
})