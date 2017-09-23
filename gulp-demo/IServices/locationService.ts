import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 定位开通状态、开通
 */
interface LocationStateListItemResponse extends BaseResponse{
    /**
     * 状态码
     */
    statusCode:string;
    /**
     * 时间
     */
    dateTime:string;
    /**
     * 错误消息
     */
    messageInfo:string;
    /**
     * 手机号码
     */
    phoneNumber:string;
    /**
     * 是否注册
     */
    isRegister:boolean;
}


/**
 * 定位信息、历史定位
 */
interface LocationListItemResponse extends BaseResponse {
    /**序号 */
    index:any;
    /**
     *  车辆ID
     */
    vehicleId:string;
    /**
     * 客服ID
     */
    userId:string;
    /**
     * 定位时间
     */
    creationTime:string;
    /**
     * 区域
     */
    area:string;
    /**
     * 经度
     */
    longitude:string;
    /**
     * 纬度
     */
    latitude:string;
    /**
     * 定位类型
     */
    locationType:string;
    /**
     * 是否注册
     */
    isRegister:boolean;
}


/**
 * 北斗定位获取车辆最近定位
 */
interface BDNPLocationListItemResponse extends BaseResponse{
    /**
     * 车辆地理位置名称
     */
    adr:string;
    /**
     * 车辆定位时间
     */
    utc:string;
    /**
     * 	速度
     */
    spd:string;
    /**
     * 方向
     */
    drc:string;
    /**
     * 车辆定位纬度
     */
    lat:string;
    /**
     * 车辆定位经度
     */
    lon:string;
    /**
     * 位置基本信息状态位
     */
    bst:string;
    /**
     * 报警状态位
     */
    alc:string;
    /**
     * 扩展车辆信号状态位
     */
    est:string;
}


//result

/**
 *  定位服务 
 */
interface locationService {
    /**
     * 获取定位开通状态
     * @param vehicleId 车辆ID
     * @param isVehicleLocation 是否为车辆定位
     */
    getLocationState(vehicleId:string, isVehicleLocation:boolean):Promise<LocationStateListItemResponse>;
    /**
     * 开通
     * @param vehicleId 车辆ID
     * @param isVehicleLocation 是否为车辆定位
     */
    getDredge(vehicleId:string, isVehicleLocation:boolean):Promise<LocationStateListItemResponse>;
    /**
     * 获取定位信息
     * @param vehicleId 车辆ID
     * @param isVehicleLocation 是否为车辆定位
     */
   getLocation(vehicleId:string, isVehicleLocation:boolean):Promise<LocationListItemResponse>;
    /**
     * 获取历史定位信息
     * @param vehicleId 车辆ID
     * @param isVehicleLocation 是否为车辆定位
     */
   getHistoryLocation(vehicleId:string, isVehicleLocation:boolean):Promise<LocationListItemResponse>;
   /**
    * 获取北斗数据
    */
    getList(startTime:string, endTime:string, carCode:string, skip:number, count:number):Promise<ListResponse<LocationListItemResponse>>;

    /** 北斗定位获取车辆最近定位
     * @param CarNo 车辆号
    */
   getBDNPLocation(CarNo:string):Promise<BDNPLocationListItemResponse>;
}


export default locationService;