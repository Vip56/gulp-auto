/**
 * 路由配置
 */

angular.module("tms")
// .run(
//     ['$rootScope', '$state', '$stateParams', 
//         function ($rootScope, $state, $stateParams) {
//             $rootScope.$state = $state;
//             $rootScope.$stateParams = $stateParams;
//         }
//     ]
// )
.config(["$stateProvider","$urlRouterProvider",($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise("/app");
    $stateProvider
    
    .state("app", {
        // abstract: true,
        url:"/app",
        templateUrl:"../src/tpl/blank.html",
        
    })
    .state('city',{
        url:"/city",
        templateUrl:"../src/tpl/city.html",
        controller:'cityController'
    })
   


   
}]);
