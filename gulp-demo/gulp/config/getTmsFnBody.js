

var tmsFnBody='{return this.http<ListResponse<AreaItem>>({method: "GET",url: `http://192.168.57:5005/tms/area/city/${provinceCode}`, cache: true});}';

function getTmsFnBody( url='basicurl',methods='get',interface='any'){
    
    switch(methods.toLowerCase()){
        case 'get':return fnGet(url,interface);
        case 'put':return fnPut(url,interface);
        case 'delete':return fnDelete(url,interface);
        case 'post':return fnPost(url,interface);
    }
}

function fnGet(url,interface){
    return '{return this.http<'+interface+'>({method: "GET",url:`'+url+'`, cache: true});}'
}
function fnPost(url,interface){
    return '{return this.http<'+interface+'>({method: "POST",url:`'+url+'`,data: body});}'
}

function fnDelete(url,interface){
    return '{return this.http<'+interface+'>({method: "DELETE",url:`'+url+'`, cache: true});}'
}
function fnPut(url,interface){
    return '{return this.http<'+interface+'>({method: "PUT",url:`'+url+'`,data: body});}'
}

// function fnPut(url,interface){
//     return 
// }

module.exports.getTmsFnBody=getTmsFnBody;