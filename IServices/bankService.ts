import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 银行卡列表
 */
interface BankListItemResponse {
    /**
     * 标识符
     */
    id:string,
    /**
     * 序号
     */
    index:number,
    /**
     * 开户银行
     */
    bank:string,
    /**
     * 银行卡号
     */
    cardNumber:string,
    /**
     * 持卡人姓名
     */
    holder:string
}

/**
 *   帐户详情
 */
interface BankDetailResponse extends BaseResponse {
    /**
    * 标识符
    */
    id:string,
    /**
    * 序列号
    */
    index:number,
    /**
    * 开户银行
    */
    bank:string,
    /**
    * 银行卡号
    */
    cardNumber:string,
    /**
    * 持卡人姓名
    */
    holder:string
}


// result bankService
/**
 * 银行服务
 */
interface bankService {
    /**
     * 获取银行卡信息
     * v1.0
     * @param id 银行卡号
     * url getbank/${id}
     */
    getBankName(id: string): Promise<string>;
    /**
     * 获取银行列表
     * v1.0
     * @param carId 车辆编号
     * @param carrierId 承运商编号
     * @param bankCode 银行卡号
     * @param isVehicle 是否是车场查询
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(carid:string, carrierid:string,BankCode:string,IsVehicle:boolean,skip:number,count:number): Promise<ListResponse<BankListItemResponse>>;
    /**
     * 获取帐户详情
     * v1.0
     * @param id 银行卡号
     */
    getDetail(id: string): Promise<BankDetailResponse>;
    /**
     * 添加银行卡
     * v1.0
     * @param bank 开户银行
     * @param cardNumber 银行卡号
     * @param holder 持卡人姓名
     * @param carrierId 承运商编号
     * @param carId 车辆编号
     */
    add(bank:string,cardNumber:string,holder:string,carrierId:string,carId:string): Promise<BaseResponse>;
    /**
     * 删除银行卡
     * v1.0
     * @param id 银行卡号
     * @param vehicleId 车辆编号
     * @param carrierId 承运商编号
     */
    delete(id: string,VehicleID:string,CarrierID:string): Promise<BaseResponse>;
}

export default bankService