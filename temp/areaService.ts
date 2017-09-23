


interface IAreaService{
    /**
     * method get
     * url /citylist
     */
    getCityList():ng.IHttpPromise<any>
       
    /**
     * method POST
     * url /addcity
     */
    addCity(name):ng.IHttpPromise<any>
    
    /**
     * method DELETE
     * url /deleteCity?name=${name}
     */
    delCity(name):ng.IHttpPromise<any>
}

class AreaService implements IAreaService{
    private baseUrl='http://localhost:8080'
    constructor(private http:ng.IHttpService){}
    getCityList(){
        return this.http({
            method:'GET',
            url:`${this.baseUrl}/citylist`
        })
    }
    
    addCity(name){
        return this.http({
            method:'POST',
            url:`${this.baseUrl}/addcity`,
            data:{
                name:name
            }
        })
    }
    delCity(name){
        return this.http({
            method:'delete',
            url:`${this.baseUrl}/deleteCity?name=${name}`
        })
    }
}

angular.module('areaService',[]).service('areaService',['$http',AreaService])