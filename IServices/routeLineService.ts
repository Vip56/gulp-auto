import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 路线列表返回数据实体
 */
interface RouteLineListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 起始地
     */
    beginAddress: string;
    /**
     * 目的地
     */
    endAddress: string;
    /**
     * 创建时间
     */
    createTime: string
}

//result
/**
 * 路线服务 
 */
interface routeLineService {
    /**
     * 获取路线列表
     * v1.0
     * @param carId 车辆编号
     * @param carrierId 承运商编号
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(carid:string,carrierid:string,skip: number, count: number): Promise<ListResponse<RouteLineListItemResponse>>;

    /**
     * 添加路线
     * v1.0
     * @param startProvince 起始地省
     * @param startCity 起始地市
     * @param endProvince 目的地省
     * @param endCity 目的地市
     * @param carrierId 承运商编号
     * @param carId 车辆编号
     */
    add(startProvince:string,startCity:string,endProvince:string,endCity:string,carrierId:string,carId:string): Promise<BaseResponse>;

    /**
     * 删除路线
     * v1.0
     * @param id 需要删除的线路编号
     * @param vehicleId 车辆ID
     * @param carrierId 承运商ID
     */
    delete(id: string,VehicleID:string,CarrierID:string): Promise<BaseResponse>;
}

export default routeLineService;
