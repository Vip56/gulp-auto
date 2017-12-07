import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 交易记录列表项
 */
interface TradingRecordListItemResponse {
    /**
     * 应付单价
     */
    payablePrice: number;
    /**
     * 应付单价单位
     */
    payablePriceUnit: string;
    /**
     * 合同号
     */
    contractNumber: string;
    /**
     * 货物列表
     */
    orderList: Array<TradingRecordGoodsListResponse>;
}

/**
 * 附件信息
 */
interface AddCarAttachmentDetail {
    /**
     * 附件编号
     */
    attachmentId: string;
    /**
     * 附件名称
     */
    attachmentName: string;
    /**
     * 附件路径
     */
    attachmentPath: string;
    /**
     * 附件标签
     */
    attachmentTag: string;
    /**
     * 创建时间
     */
    attachmentCreationTime?:string;
}

/**
 * 货物列表
 */
interface TradingRecordGoodsListResponse {
    /**
     * 发货地
     */
    originAddress: string;
    /**
     * 目的地
     */
    destinationAddress: string;
    /**
     * 货物名称
     */
    goodsName: string;
    /**
     * 货物数量
     */
    quantityOfGoods: number;
    /**
     * 货物数量单位
     */
    goodsUnit: string;
    /**
     * 实际发货日期
     */
    realDeliveryTime: string;
}

/**
 * 评价列表
 */
interface EvaluateListItemResponse {
    index: number;
    /**
     * 评价人
     */
    appraiser: string;
    /**
     * 诚信度
     */
    credibility: number;
    /**
     * 时效性
     */
    timeliness: number;
    /**
     * 服务态度
     */
    attitude: number;
    /**
     * 运输价格
     */
    freight: number;
    /**
     * 总分
     */
    average: number;
    /**
     * 评价时间
     */
    creationTime: string;
    /**
     * 评价内容
     */
    content: string;
    /**
     * 是否好评
     */
    isPraise: boolean;
    /**
     * 车牌号
     */
    carCode: string;
    /**
     * 驾驶员
     */
    driver: string;
    /**
     * 驾驶员号码
     */
    driverPhone: string;
    /**
     * 合同号
     */
    contractNumber: string;
}

/**
 * 车辆列表数据项
 */
interface CarListItemResponse {
    id: string;
    index: number;
    /**
     * 车牌号
     */
    carCode: string;
    /**
     * 车型
     */
    carType: string;
    /**
     * 车长
     */
    carLength: string;
    /**
     * 录入人
     */
    inputPerson: string;
    /**
     * 驾驶员
     */
    driver: string;
    /**
     * 手机号
     */
    driverPhone: string;
    /**
     * 承运类别
     */
    carrierCategory: string;
    /**
     * 主营路线
     */
    mainRoute: string;
    /**
     * 当前位置
     */
    location: string;
    /**
     * 定位日期
     */
    locationDateTime: string;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 录入开始时间  
     */
    startTime: string;
    /**
     * 录入结束时间
     */
    endTime: string;
}

/**
 * 车辆详细
 */
interface CarDetailResponse extends BaseResponse {
    /**
     * 车牌号
     */
    carCode: string;
    /**
     * 车型
     */
    carType: string;
    /**
     * 车型枚举
     */
    carTypeInt: number;
    /**
     * 车长
     */
    carLength: string;
    /**
     * 车长枚举
     */
    carLengthInt: number;
    /**
     * 驾驶员
     */
    driver: string;
    /**
     * 驾驶员号码
     */
    driverPhone: string;
    /**
     * 承运类型
     */
    carriageType: string;
    /**
     * 核定载重
     */
    bearing: string;
    /**
     * 车辆来源
     */
    carSource: string;
    /**
     * 地址
     */
    address: string;
    /**
     * 定位状态
     */
    locationStatus: boolean;
    /**
     * 总分
     */
    average: number;
    /**
     * 好评数量
     */
    praiseCount: number;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 挂车证图片地址
     */
    trailerLicenseKey: string;
    /**
     * 行驶证图片地址
     */
    vehicleLicenseKey: string;
    /**
     * 车辆照片
     */
    vehiclePhotoKey: string;
    /**
     * 驾驶证照片
     */
    drivingLicenseImageKey: string;
    /**
     * 身份证照片
     */
    identityCardImageKey: string;
    /**
     * 主营线路
     */
    routeList: Array<RouteListItemVM>;
    /**
     * 银行卡
     */
    bankList: Array<BankListItemVM>;
    /**
     * 驾驶员头像
     */
    certificateImageKey: string;
    /**
    * 道路运输许可证号
    */
    permitNumber: string;
    /**
    * 道路运输证字号
    */
    roadTransportCertificateNumber: string;
    /**
     * 所属辖区code
     */
    countrySubdivisionCode: string;
    /**
     * 身份证号
     */
    identity: string;

}

/**
 * 主营线路
 */
interface RouteListItemVM {
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

/**
 * 银行卡列表
 */
interface BankListItemVM {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 开户银行
     */
    bank: string;
    /**
     * 银行卡号
     */
    cardNumber: string;
    /**
     * 持卡人姓名
     */
    holder: string;
}



//result
/**
 * 车辆服务
 */
interface carService {
    /**
     * 获取查询车辆列表
     * v1.0
     * @param keyword 关键字
     */
    keywordlist(keyword: string, skip: number, count: number): Promise<ListResponse<CarListItemResponse>>;
    /**
     * 获取交易记录列表
     * v1.0
     * @param driveruserid 车辆id
     * @param carCode 车牌号
     * @param goodsName 货物名称
     * @param goodsNum 货物数量
     * @param route 线路地址
     * @param shipAddress 发货地址
     * @param deliverAddress 送货地址
     */
    getTradingRecordList(driveruserid: string, carcode: string, goodsname: string, goodsnum: string, route: string, shipaddress: string, deliveraddress: string, skip: number, count: number): Promise<ListResponse<TradingRecordListItemResponse>>;


    /**
     * 获取交易记录count
     * v1.0
     * @param driveruserid 车辆id
     * @param carCode 车牌号
     * @param goodsName 货物名称
     * @param goodsNum 货物数量
     * @param route 线路地址
     * @param shipAddress 发货地址
     * @param deliverAddress 送货地址
     */
    getTradingRecordCount(driveruserid: string, carcode: string, goodsname: string, goodsnum: string, route: string, shipaddress: string, deliveraddress: string): Promise<ListResponse<TradingRecordListItemResponse>>;
    
    /**
     * 获取诚信记录
     * v1.0
     * @param carCode 车牌号
     * @param appraiserId 评价人编号
     */
    getEvaluateList(driveruserid: string, carcode: string, appraiserid: string, skip: number, count: number): Promise<ListResponse<EvaluateListItemResponse>>;

    /**
     * 修正启用状态
     * v1.0
     */
    enabled(id: string, isEnabled: boolean): Promise<BaseResponse>;

    /**
     * 获取车辆列表
     * v1.0
     * @param orderBy 排序字段枚举
     * @param asc 是否升序
     * @param carCode 车牌号
     * @param carType 车型
     * @param carLength 车长
     * @param inputPerson 录入人
     * @param driver 驾驶员
     * @param driverPhone 驾驶员号码
     * @param carrierCategory 承运类别
     * @param mainroute 主营线路
     * @param isEnabled 是否启用
     */
    getList(orderBy: number, asc: boolean, carcode: string, cartype: string, carlength: string, inputperson: string, driver: string, driverphone: string, carriercategory: string, mainRoute: string,
        isenabled: boolean, startTime: string, endTime: string, skip: number, count: number): Promise<ListResponse<CarListItemResponse>>;

    /**
     * 获取车辆详情
     * v1.0
     */
    getDetail(id: string): Promise<CarDetailResponse>;

    /**
     * 添加车辆
     * v1.0
     * @param carCode 车牌号
     * @param carType 车型
     * @param carLength 车长
     * @param driver 驾驶员
     * @param driverPhone 驾驶员号码
     * @param carrierCategory 承运类别
     * @param bearing 核定载量
     * @param carSource 车辆来源
     * @param permitNumber 道路运输许可证号
     * @param countrySubdivisionCode 所属辖区
     * @param roadTransportCertificateNumber 道路运输证字号
     * @param address 地址
     * @param identity 身份证号码
     */
    add(carCode: string, carType: string, carLength: string, driver: string, driverphone: string, carrierCategory: string, bearing: number, carSource: string, permitNumber: string, countrySubdivisionCode: string, roadTransportCertificateNumber: string, address: string, identity: string): Promise<BaseResponse>;

    /**
     * 编辑车辆
     * v1.0
     * @param id 车辆编号
     * @param carCode 车牌号
     * @param carType 车型
     * @param carLength 车长
     * @param driver 驾驶员
     * @param driverPhone 驾驶员号码
     * @param carrierCategory 承运类别
     * @param bearing 核定载重
     * @param carSource 车辆来源
     * @param permitNumber 道路运输许可证号
     * @param countrySubdivisionCode 所属辖区
     * @param roadTransportCertificateNumber 道路运输证字号
     * @param address 地址
     * @param identity 身份证号码 
     */
    edit(id: string, carCode: string, carType: string, carLength: string, driver: string, driverPhone: string, carrierCategory: string, bearing: number, carSource: string, permitNumber: string, countrySubdivisionCode: string, roadTransportCertificateNumber: string, address: string, identity: string): Promise<BaseResponse>;

    /**
     * 删除车辆
     * v1.0
     */
    delete(id: string): Promise<BaseResponse>;

}

export default carService;