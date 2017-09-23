import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * fixed by zhaojian
 */
/**
 * 承运商所属车辆列表
 */
interface BelongCarrierCarListResponse {
    /**
     * id 承运商编号
     */
    id: string;
    /**
     * index 序号
     */
    index: number;
    /**
     * carCode 车牌号
     */
    carCode: string;
    /**
     * carType 车型
     */
    carType: string;
    /**
     * carLength 车长
     */
    carLength: string;
    /**
     * driver 驾驶员
     */
    driver: string;
    /**
     * driverPhone　驾驶员号码
     */
    driverPhone: string;
    /**
     * carrier　承运商名称
     */
    carrierName: string
}

/**
 * 添加车辆和承运商关系
 */
interface AddCarrierVehicleRelation {
    /**
     * 车牌号
     */
    carCode: string;
    /**
     * 承运商编号
     */
    carrierId: string
}
/**
 * 删除车辆和承运商关系
 */
interface DeleteCarrierVehicleRelation {
    /**
     * 承运商编号
     */
    id: string;
    /**
     * 车辆编号
     */
    vehicleId: string
}

/**
 * 添加附件
 */
interface AddCarrierAttachmentDetail {
    /**
     * attachmentId　附件编号
     */
    attachmentId: string;
    /**
     * attachmentName　名称
     */
    attachmentName: string;
    /**
     * attachmentPath 路径
     */
    attachmentPath: string;
    /**
     * attachmentTag 标签
     */
    attachmentTag: string
}

/**
 * 承运商列表
 */
interface CarrierListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 承运商名称
     */
    name: string;
    /**
     * 承运商类型
     */
    type: string;
    /**
     * 承运商号码
     */
    phone: string;
    /**
     * 录入人
     */
    inputperson: string;
    /**
     * 承运商等级
     */
    level: string;
    /**
     * 主营路线
     */
    mainroute:string;
    /**
     * 是否启用
     */
    isEnabled:boolean;
    /**
     * 备注
     */
    remarks: string
}

/**
 * 承运商列表详情
 */
interface CarrierDetailResponse extends BaseResponse {
    /**
     * 承运商名称
     */
    name: string;
    /**
     * 承运商类型
     */
    type: string;
    /**
     * 承运商号码
     */
    phone: string;
    /**
     * 承运商等级
     */
    level: string;
    /**
     * 承运商地址
     */
    address: string;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 备注
     */
    remarks: string;
    /**
     * 附件列表
     */
    attachmentList: Array<AddCarrierAttachmentDetail>;
}
/**
 * 承运商服务
 */
//result carrierService
interface carrierService {
    /**
     * 获取承运商列表
     * v1.0
     * @param orderBy 排序字段 枚举
     * @param asc 是否升序
     * @param name 承运商名称
     * @param phone 承运商号码
     * @param type 承运商类型
     * @param inputPerson 录入人
     * @param level 承运商等级
     * @param mainRoute 主营路线
     * @param isEnabled 是否启用
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(orderby: string, asc: boolean, name: string, phone: string, type: string, inputperson: string,
        level: string, mainroute: string, isenabled: boolean, skip: number, count: number): Promise<ListResponse<CarrierListItemResponse>>;

    /**
     * 获取承运商详细
     * v1.0
     * @param id 承运商编号
     */
    getDetail(id: string): Promise<CarrierDetailResponse>;

    /**
     * 编辑承运商
     * v1.0
     * @param id 需要编辑的承运商编号
     * @param name 承运商名称
     * @param phone 承运商号码
     * @param type 承运商类型
     * @param level 承运商等级
     * @param address 承运商地址
     * @param remarks 备注
     */
    edit(id: string, name: string, phone: string, type: string, level: string, address: string, remarks: string): Promise<BaseResponse>;

    /**
     * 删除承运商
     * v1.0
     * @param id 需要编辑的承运商编号
     */
    delete(id: string): Promise<BaseResponse>;

    /**
     * 添加承运商
     * v1.0
     * @param name 承运商名称
     * @param type 承运商类型
     * @param phone 承运商号码
     * @param level 承运商等级
     * @param address 承运商地址
     * @param remarks 备注
     */
    add(name: string, type: string, phone: string, level: string, address: string, remarks?: string): Promise<BaseResponse>;

    /**
     * 添加车辆和承运商关系
     * v1.0
     * @param carCode 车牌号
     * @param CarrierId 承运商编号
     */

    addCarrierVehicleRelation(carCode: string, carrierId: string): Promise<BaseResponse>;

    /**
     * 删除车辆和承运商关系
     * v1.0
     * @param id 承运商编号
     * @param vehicleId 车辆编号
     */
    deleteCarrierVehicleRelation(id: string, vehicleId: string): Promise<BaseResponse>;

    /**
     * 添加附件
     * v1.0
     * @param id 数据编号
     * @param attachmentList 附件列表
     */
    addAttachment(id: string, AttachmentArr: Array<AddCarrierAttachmentDetail>): Promise<BaseResponse>;

    /**
     * 修正启用状态
     * v1.0
     * @param id 承运商编号(逗号隔开)
     * @param isEnabled 是否启用
     */
    enabled(isEnabled: boolean, id: string): Promise<BaseResponse>;

    /**
     * 承运商所属车辆列表
     * v1.0
     * @param id 承运商编号
     */
    getBelongCarrierCarList(id: string, skip: number, count: number): Promise<ListResponse<BelongCarrierCarListResponse>>;
   
}


export default carrierService