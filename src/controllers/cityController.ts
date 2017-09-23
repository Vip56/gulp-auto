
interface AreaScope extends ng.IScope{
    getCity():void;
    addCity():void;
    newCity:string;
    delCity():void;

    cityList:any
}

class cityController {


   
    constructor(private  scope:AreaScope,private areaService:areaService){
        // super($scope);
        this.init();
    }

    init():void{
        this.scope.cityList=[]
        this.scope.newCity='';
     
        
        this.scope.getCity=()=>{
            this.areaService.getCityList().then(res=>{
                console.log(res.data)
                // alert(res);
                this.scope.cityList=res.data;
                
            })
        }
        this.scope.addCity=()=>{
            if(!this.scope.newCity){
                return;
            }
            this.areaService.addCity({name:this.scope.newCity}).then(res=>{
                console.log(res.data)
                this.scope.getCity()
                this.scope.newCity='';
                if(res.data!='success'){
                    alert(res.data)
                }
                this.scope.getCity()
            })
        }
        this.scope.delCity=()=>{
            this.areaService.delCity(this.scope.newCity).then(res=>{
                this.scope.newCity='';
                alert(res.data);
                this.scope.getCity()
            })
        }
          
    }
    
   
}

angular.module("tms").controller('cityController',["$scope","areaService",cityController]);