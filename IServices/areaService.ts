import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
interface AreaItem {
    value:string,
    text:string
}


//result areaService
 /** 
  * 
  */
interface areaService {
    
    /**
     * description 获取市
     * @param provinceCode 省编号
     * url   /area/city/{{provinceCode}} 
    
     */
    getCity(provinceCode:string): Promise<ListResponse<AreaItem>>;
  
    
    /**
     * 获取区
     * @param cityCode 市编号
     * url :  http://192.168.57:5005/tms/area/city/{{cityCode}}
     
     */
    getCounty(cityCode:string): Promise<ListResponse<AreaItem>>;
   
    /**
     * 获取省
     * url :  http://192.168.57:5005/tms/area
     */
    getArea(): Promise<ListResponse<AreaItem>>;
    
}



export default areaService