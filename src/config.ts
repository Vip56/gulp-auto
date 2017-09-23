angular.module("tms")
 ////跨域
.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}])
//ajax拦截登录
.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
    
}])
.factory('httpInterceptor', ['$q', '$injector', function ($q, $injector) {
    var $loading = $injector.get('$loading');
    var rootScope = $injector.get('$rootScope');
    var $timeout = $injector.get('$timeout');

    var httpInterceptor = {
         'request': function (request) {
           
             if (request.method == "POST") {
                 $loading.start('appLoading');//post请求开启loading
             }
              var token=JSON.parse(window.sessionStorage.getItem("loginData"))?JSON.parse(window.sessionStorage.getItem("loginData")).token:""
            if(!!token){
               request.headers.Authorization='Bearer '+token;
            }
             return request;
         },
         'response': function (response) {
            var $ngBootbox = $injector.get('$ngBootbox');
            var state = $injector.get('$rootScope').$state.current.name;
          
            rootScope.stateBeforLogin = state;
            
            if (!response.data.success) {
                 if (response.data.errorCode == "10001") {
                     //用户未登录
                     rootScope.$state.go("login.in");
                     $ngBootbox.hideAll();
                     localStorage.clear();
                 }else if(response.data.errorCode == "10004"){
                    //没有权限
                     rootScope.$state.go("app.noauthority");
                     $ngBootbox.hideAll();
                 }
             }


             $loading.finish('appLoading');//关闭loading
            //处理返回数据
            var responseReturn = response;
            if(typeof(response.data)==="object"){
                if(response.data.success || response.data.success === undefined){
                    if(response.data){
                        responseReturn = {
                            error:response.data.errorMessage,
                            data:response.data.data,
                            success:response.data.success
                        }
                    }
                }else{
                    if(response.data.errorCode){
                       $ngBootbox.alert(response.data.errorMessage);
                    }
                   responseReturn =  $q.reject(response.data);
                }
            }
             return responseReturn;
         }
     }
     return httpInterceptor;
 }
 ])
//路由监听事件 
.run(['$rootScope', '$state',function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //$location.path();//获取路由地址 
        // $location.path('/validation').replace(); 
        // event.preventDefault()可以阻止模板解析 
    });
    // stateChangeSuccess 当模板解析完成后触发 
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $('.modal').map(function () { $(this).modal('hide'); });
        $('.modal-backdrop').remove();
        $('.modal-open').removeClass('modal-open')
    });

}])


