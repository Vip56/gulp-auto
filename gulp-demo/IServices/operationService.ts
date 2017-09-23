import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 预付款
 */
interface advanceList {
    /**
     * 预付款
     */
    advancePrice: number;
    /**
     * 预付款付款方式
     */
    advancePriceType: string;
}

/**
 * 电子合同列表返回值
 */
interface EContractListResponse {
    /**
     * 序号
     */
    index: number;
    /**
     * 承运单id 
     */
    carrierOrderId:string;
    /**
     * 合同号
     */
    contractNumber: string;
    /**
     * 客户单位
     */
    clientName: string;
    /**
     * 发货地址
     */
    origin: string;
    /**
     * 送货地址
     */
    destination: string;
    /**
     * 发货时间
     */
    deliveryTime: string;
    /**
     * 车牌号
     */
    carCode: string;
    /**
     * 客服专员
     */
    customerName: string;
    /**
     * 电子合同编号id
     */
    electronicContractNumber: string;
    /**
     * 合同状态
     */
    eContractStatus: string;
    /**
    * 补充协议编号id
    */
    agreementContractNumber: string;
    /**
     * 补充协议状态
     */
    agreementEContractStatus: string;
    /**
     * 合同订立日期
     */
    contractTime: string;
}

/**
 * 电子合同列表返回值
 */
interface EContractDownloadResponse {
    /**
     * 序号
     */
    index: number;
    /**
     * 合同号
     */
    contractNumber: string;
    /**
     * 合同类型
     */
    eContractType:string;
    /**
     * 客户单位
     */
    clientName: string;
    /**
     * 发货时间
     */
    deliveryTime: string;
    /**
     * 客服专员
     */
    customerServiceName: string;
    /**
     * 操作人
     */
    operatorName: string;
    /**
     * 下载时间
     */
    creationTime: string;
}
/**
*获取APP竞价列表返回参数
*/
interface quotationResponse {
    /**
     * 车辆id
     */
    driverUserId: string;
    /**
    *车牌号
    */
    carCode: string;
    /**
    *承运商类型枚举值
    */
    carrierTypeValue: number;
    /**
    *承运商类型
    */
    carrierType: string;
    /**
    *车型枚举值
    */
    carTypeValue: number;
    /**
    *车型
    */
    carType: string;
    /**
    *车长枚举值
    */
    carLengthValue: string;
    /**
    *车长
    */
    carLength: string;
    /**
    *报价说明
    */
    description: string;
    /**
    *订单主键
    */
    orderId: string;
    /**
    *电话
    */
    phoneNumber: string;
    /**
    *报价
    */
    price: string;
    /**
    *报价时间
    */
    time: string;
    /**
    *报价人
    */
    userRealName: string;
  }

//result
/**
 * 运维服务
 */
interface operationService {
    /**
     *添加电子合同下载记录
     * v1.0
     * @param id 承运单id
     * @param eContractType 电子合同类型
     
     */
    AddEContractDownloadRecord(id: string, eContractType: string,operatorName:string): Promise<BaseResponse>;


    /**
      *获取APP竞价列表
      * v1.0
      *@param id 订单编号
      */
    quotation(id: string): Promise<ListResponse<quotationResponse>>;
    /**
     * 获取订单列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param OrderId 订单编号集合(以逗号分隔)
     * @param ClientName 客户单位
     * @param Route 路线地址
     * @param ShipStartTime 发货起始时间
     * @param ShipEndTime 发货结束时间
     * @param Status 订单状态集合（逗号分割）
     * @param PlaceOrderStartTime 下单开始时间
     * @param PlaceOrderEndTime 下单结束时间
     * @param DispatchOfficerId 调度专员编号
     * @param ShipAddress 发货地址
     * @param DeliverAddress 送货地址
     * @param CustomerServiceId 客服专员编号
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getOrderList(orderby: string, asc: boolean, OrderId: string, ClientName: string, Route: string, ShipStartTime: string, ShipEndTime: string, Status: string, PlaceOrderStartTime: string,
        PlaceOrderEndTime: string, DispatchOfficerId: string, ShipAddress: string, DeliverAddress: string, CustomerServiceId: string, skip: number, count: number): Promise<ListResponse<orderList>>;
    /**
     * 获取承运单
     * v1.0
     * @param orderby 排序字段 枚举
     * @param asc 是否升序
     * @param OrderId 订单编号（单个）
     * @param ClientName 客户单位
     * @param Route 线路地址
     * @param ShipStartTime 发货开始时间
     * @param ShipEndTime 发货结束时间
     * @param Status 订单状态
     * @param PlaceOrderStartTime 下单开始时间
     * @param PlaceOrderEndTime 下单结束时间
     * @param ShipAddress 发货地址
     * @param DeliverAddress 送货地址
     * @param CarCode 承运车牌号
     * @param ContractNum 合同号
     * @param ContractStatus 合同状态
     * @param ReceiptPriceStatus 回单状态
     * @param OilCardStatus 油卡状态
     * @param CustomerServiceOfficerId 客服专员
     * @param TempCustomerServiceOfficerId 临时客服专员
     * @param DispatchOfficerId 调度专员
     * @param CarLength 车长
     * @param CarrierName 承运商名称
     * @param Driver 驾驶员名称
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getCarryOrderList(orderby: string, asc: boolean, OrderId: string, ClientName: string, Route: string, ShipStartTime: string, ShipEndTime: string,
        Status: string, PlaceOrderStartTime: string, PlaceOrderEndTime: string, ShipAddress: string, DeliverAddress: string, CarCode: string, ContractNum: string,
        ContractStatus: string, ReceiptPriceStatus: string, OilCardStatus: string, CustomerServiceOfficerId: string, TempCustomerServiceOfficerId: string, DispatchOfficerId: string,
        CarLength: string, CarrierName: string, Driver: string, skip: number, count: number): Promise<ListResponse<carryOrderListResponse>>;


    /**
     * 获取承运单数量
    * v1.0
    */
    carrierOrderCount(orderby: string, asc: boolean, OrderId: string, ClientName: string, Route: string, ShipStartTime: string, ShipEndTime: string,
        Status: string, PlaceOrderStartTime: string, PlaceOrderEndTime: string, ShipAddress: string, DeliverAddress: string, CarCode: string, ContractNum: string,
        ContractStatus: string, ReceiptPriceStatus: string, OilCardStatus: string, CustomerServiceOfficerId: string, TempCustomerServiceOfficerId: string, DispatchOfficerId: string,
        CarLength: string, CarrierName: string, Driver: string): Promise<ListResponse<carryOrderListResponse>>;


    /**
     * 获取电子合同列表
     * v1.0
     * @param clientName 客户单位
     * @param contractNumber 合同编号
     * @param carCode 承运车牌号
     * @param customerServiceId 客服专员
     * @param origin 起始地
     * @param destination 目的地
     * @param deliveryBegin 发货开始时间
     * @param deliveryEnd 发货结束时间    
     * @param econtractStatus 合同状态
     * @param agreementEContractStatus 补充协议状态
     * @param contractStartTime 合同订立起始时间
     * @param contractEndTime 合同订立结束时间
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getEContractList(clientName: string, contractNumber: string, carCode: string, customerServiceId: string, origin: string, destination: string, deliveryBegin: string, deliveryEnd: string, econtractStatus: string, agreementEContractStatus: string, contractStartTime: string, contractEndTime: string, skip: number, count: number): Promise<ListResponse<EContractListResponse>>;

    /**
     * 获取电子合同下载记录列表
     * v1.0
     * @param clientName 客户单位
     * @param contractNumber 合同编号
     * @param econtractType 电子合同类型
     * @param customerServiceId 客服专员
     * @param downloadStartTime 下载起始时间
     * @param downloadEndTime 下载结束时间
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getDownloadRecordList(clientName: string, contractNumber: string, econtractType: string, customerServiceId: string, downloadStartTime: string, downloadEndTime: string, skip: number, count: number): Promise<ListResponse<EContractDownloadResponse>>;
    
    /**
     * 获取子单列表
     * v1.0
     * @param id 订单编号
     */
    getOrderChildList(id: string): Promise<ListResponse<orderChildListResponse>>;
    /**
     * 获取费用申请列表
     * v1.0
     * @param id 承运单编号
     */
    getFeeList(id: string): Promise<ListResponse<feeListResponse>>;
    /**
     * 获取应收登记列表
     * v1.0
     * @param id 订单编号
     */
    getReceivableList(id: string): Promise<ListResponse<receivableListResponse>>;
    /**
     * 获取订单详情
     * v1.0
     * @param id 订单编号
     */
    getOrderDetail(id: string): Promise<detailResponse>;
    /**
     * 获取子单详情
     * v1.0
     * @param id 子单编号
     */
    getOrderChildDetail(id: string): Promise<orderChildResponse>;
    /**
     * 获取承运单详情
     * v1.0
     * @param id 承运单编号
     */
    getCarryOrder(id: string): Promise<carryOrderResponse>;
    /**
    * 获取承运单报表列表
    * v1.0
    * @param orderby 排序枚举
    * @param asc 是否升序
    * @param ContractNum 合同号
    * @param ClientName 客户名称
    * @param ShipAddress 发货地址
    * @param DeliverAddress 送货地址
    * @param ShipStartTime 发货开始时间
    * @param ShipEndTime 发货结束时间
    * @param CarrierName 承运商名称
    * @param Driver 驾驶员
    * @param skip 跳过项
    * @param count 总项
    */
    getReportCarrierOrderList(orderby: string, asc: boolean, ContractNum: string, ClientName: string, ShipAddress: string, DeliverAddress: string, ShipStartTime: string, ShipEndTime: string, CarrierName: string, Driver: string, skip: number, count: number): Promise<ListResponse<reportCarrierOrderListResponse>>;
    /**
     * 获取银行列表
     * v1.0
     * @param carId 车辆编号
     * @param carrierId 承运商编号
     * @param BankCode 银行卡号
     * @param IsVehicle 是否是车场查询
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getBankList(carid: string, carrierid: string, BankCode: string, IsVehicle: boolean, skip: number, count: number): Promise<ListResponse<BankListItemResponse>>;
    /**
     * 获取帐户详情
     * v1.0
     * @param id 账户id
     */
    getBankDetail(id: string): Promise<BankDetailResponse>;
    /**
     * 获取银行卡信息
     * @param id 银行卡号
     */
    BankInfo(id: string): Promise<any>;
    /**
     * 获取车辆列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param carcode 车牌号
     * @param cartype 车型
     * @param carlength 车长
     * @param inputperson 录入人
     * @param driver 驾驶员
     * @param driverphone 驾驶员号码
     * @param carriercategory 承运类别
     * @param mainroute 主营线路
     * @param isenabled 是否启用
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getCarList(orderby: string, asc: boolean, carcode: string, cartype: string, carlength: string, inputperson: string, driver: string, driverphone: string, carriercategory: string, mainroute: string,
        isenabled: boolean, skip: number, count: number): Promise<ListResponse<CarListItemResponse>>;
    /**
     * 获取交易记录列表
     * v1.0
     * @param carcode 车牌号
     * @param goodsname 货物名称
     * @param goodsnum 货物数量
     * @param route 线路地址
     * @param shipaddress 发货地址
     * @param deliveraddress 送货地址
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getTradingRecordList(carcode: string, goodsname: string, goodsnum: string, route: string, shipaddress: string, deliveraddress: string, skip: number, count: number): Promise<ListResponse<TradingRecordListItemResponse>>;
    /**
     * 获取诚信记录
     * v1.0
     * @param carCode 车牌号
     * @param appraiserId 评价人编号
     */
    getEvaluateList(carcode: string, appraiserid: string, skip: number, count: number): Promise<ListResponse<EvaluateListItemResponse>>;
    /**
     * 获取车辆详情
     * v1.0
     * @param id 车辆编号
     */
    getCarDetail(id: string): Promise<CarDetailResponse>;
    /**
     * 获取承运商列表
     * v1.0
     * @param orderby 排序字段 枚举
     * @param asc 是否升序
     * @param name 承运商名称
     * @param phone 承运商号码
     * @param type 承运商类型
     * @param inputperson 录入人
     * @param level 承运商等级
     * @param mainroute 主营路线
     * @param isenabled 是否启用
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getCarrierList(orderby: string, asc: boolean, name: string, phone: string, type: string, inputperson: string, level: string, mainroute: string,
        isenabled: boolean, skip: number, count: number): Promise<ListResponse<CarrierListItemResponse>>;
    /**
     * 承运商所属车辆列表
     * v1.0
     * @param id 承运商编号
     */
    getBelongCarrierCarList(id: string, skip: number, count: number): Promise<ListResponse<BelongCarrierCarListResponse>>;
    /**
     * 获取承运商详细
     * v1.0
     * @param id 承运商编号
     */
    getCarrierDetail(id: string): Promise<CarrierDetailResponse>;
    /**
     * 获取路线列表
     * v1.0
     * @param carId 车辆编号
     * @param carrierId 承运商编号
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getRouteLineList(carid: string, carrierid: string, skip: number, count: number): Promise<ListResponse<RouteLineListItemResponse>>;
    /**
     * 修改承运单承运商信息
     * v1.0
     * @param carrier 乘运商名称
     * @param carrierId 承运商编号
     * @param carrierPhone 结算方号码
     * @param carrierType 承运商类型
     */
    updateCarrier(id: string, carrier: string, carrierId: string, carrierPhone: string, carrierType: string): Promise<BaseResponse>;
    /**
     * 修改驾驶员和车辆相关信息
     * v1.0
     * @param driverUserId  来货拉用户编号
     * @param carCode 车牌号
     * @param driver 驾驶员姓名
     * @param driverPhone 驾驶员号码
     * @param carlength 车长
     * @param vehicleType 车型
     * @param permitNumber 道路运输许可证号
     * @param countrySubdivisionProvinceCode 所属辖区(省)
     * @param countrySubdivisionCityCode 所属辖区(市)
     * @param countrySubdivisionCountryCode 所属辖区(区)
     * @param roadTransportCertificateNumber 道路运输证字号
     */
    updateCar(id: string, driverUserId: string, carCode: string, driver: string, driverPhone: string, carLength: string, vehicleType: string, permitNumber: string, countrySubdivisionProvinceCode: string, countrySubdivisionCityCode: string, countrySubdivisionCountryCode: string, roadTransportCertificateNumber: string): Promise<BaseResponse>;
    /**
     * 修改应付相关信息
     * v1.0
     * @param id 
     */
    updatePayable(id: string, payablePrice: number, payableSummary: string, receiptPrice: number, bankCode: string, bankName: string, holder: string, payablePriceUnit: string, receiptPriceUnit: string, advancePaymentList: Array<advanceList>): Promise<BaseResponse>;
    /**
     * 修改合同
     * v1.0
     * @param carrierOrderId 承运单编号
     * @param contractId 合同编号
     * @param contractNumber 合同短号
     * @param contractGoodsNum 合同货物数量
     * @param contractGoodsNumUnit 合同货物数量单位
     * @param oilCarNum 油卡卡号
     * @param OilCardStatus 油卡状态
     * @param auxiliaryTool 辅助工具
     * @param engineNumber 发动机号
     * @param frameNumber 车架号
     * @param trailerNumber 挂车号
     * @param trailerFrameNumber 挂车车架号
     * @param driverLicenseNumber 驾驶证
     * @param altermatePhone 备用电话
     * @param TotalPrice 运费总价
     */
    updateContract(carrierOrderId: string, contractId: string, contractNumber: string, contractGoodsNum: number, contractGoodsNumUnit: string, oilCarNum: string, OilCardStatus: string, auxiliaryTool: string,
        engineNumber: string, frameNumber: string, trailerNumber: string, trailerFrameNumber: string, driverLicenseNumber: string, altermatePhone: string,totalPrice:number): Promise<BaseResponse>;
    /**
     * 修改附件
     * v1.0
     * @param carrierOrderId 承运单ID
     * @param attachmentList 附件列表
     */
    updateAttachment(carrierOrderId: string, attachmentList: Array<string>): Promise<BaseResponse>;
}

export default operationService;
