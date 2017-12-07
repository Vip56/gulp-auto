

var TMSInfo="import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'";


function getClassDetail(className,serviceName,fnStr){
    // return `class ${className} implements ${serviceName} {
    return `class ${className}  {
        constructor(private http: ng.IHttpService) {
        }
        ${fnStr}
    }
    angular.module('${className}',[]).service("${className}",['$http',${className}]);`
}






module.exports.TMSInfo=TMSInfo;
module.exports.getClassDetail=getClassDetail;


