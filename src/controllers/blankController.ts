
class blankController {
    
     constructor(private  $scope:ng.IScope){
         // super($scope);
         this.init();
     }
 
     init():void{
         // super.init();
         console.log('this is blank page')
         
 
       
     }
    
 }
 
 angular.module("tms").controller('blankController',[blankController]);