


// result areaService

interface areaService {
    /**
     * method GET
     * url  /citylist
     */
    getCityList():ng.IHttpPromise<any>
       
    /**
     * method POST
     * url /addcity
     */
    addCity(body):ng.IHttpPromise<any>
    
    /**
     * method DELETE
     * url /deleteCity?name=${name}
     */
    delCity(name):ng.IHttpPromise<any>
}

