import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms';
/**
*订单列表返回数据
*/
interface orderList {
    /**
    *订单Id
    */
    id: string;
    /**
    *序号
    */
    index: string;
    /**
    *回单状态
    */
    receiptStatus: string;
    /**
    *订单短号
    */
    orderId: string;
    /**
    *承运单编号
    */
    carrierOrderId: string;
    /**
    *客户单位名称
    */
    clientName: string;
    /**
    *途径地
    */
    viaAddress: string;
    /**
    *发货地
    */
    startAddress: string;
    /**
    *送货地
    */
    endAddress: string;
    /**
    *货品名称
    */
    goodsName: string;
    /**
    *货品数量
    */
    goodsNum: string;
    /**
    *所需车长
    */
    carLength: string;
    /**
    *发货时间
    */
    shipTime: string;
    /**
    *紧急程度
    */
    urgency: string;
    /**
    *订单状态
    */
    orderStatus: string;
    /**
    *下单时间
    */
    placeOrderTime: string;
    /**
    *调度专员
    */
    dispatcher: string;
    /**
    *客服专员
    */
    customerService: string;
    /**
    *是否确认应收
    */
    isCheckReceivable: boolean;
  }
/**
 * 费用列表返回数据实体
 */
interface FinanceFeeListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 订单列表
     */
    orderList: Array<orderList>;
    /**
     * 车牌号
     */
    carcode: string;
    /**
     * 结算方号码
     */
    carrierPhone: string;
    /**
     * 应付单价
     */
    payablePrice: string;
    /**
     * 应付单价、单位
     */
    payablePriceStr: string;
    /**
     * 应付单价单位    
     */
    payablePriceUnit: string;
    /**
     * 合同状态
     */
    contractStatus: string;
    /**
     * 审核人
     */
    auditedUser: string;
    /**
     * 费用审核人ID
     */
    auditedUserId: string;
    /**
     * 付款人
     */
    payUser: string;
    /**
     * 付款人Id
     */
    payUserId: number;
    /**
     * 结算人姓名
     */
    reckonerName: string;
    /**
     * 结算单审核人
     */
    auditedUserName: string;
    /**
     * 结算单审核时间
     */
    auditedTime: string;
    /**
     * 费用短号
     */
    feeCode: string;
    /**
     * 应付结算总单短号
     */
    feeSettleBillCode: string;
    /**
     * 承运商名称
     */
    carrier: string;
    /**
     * 合同短号
     */
    contractNumber: string;
    /**
     * 支出事由
     */
    expenditureReasons: string;
    /**
     * 申领金额
     */
    feeAmount: number;
    /**
     * 申领人
     */
    applicant: string;
    /**
     * 申领时间
     */
    creationTime: string;
    /**
     * 结算时间
     */
    settleTime: string;
    /**
     * 付款时间
     */
    payTime: string;
    /**
     * 费用类型
     */
    feeType: string;
    /**
     * 费用状态
     */
    feeStatus: string;
    /**
     * 付款方式
     */
    paymentMethod: string;
}

/**
 * 应付结算单列表返回数据实体
 */
interface FeeSettleBillListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 可识别结算总单编号
     */
    billCode: string;
    /**
     * 承运商名称
     */
    carrier: string;
    /**
     * 承运商编号
     */
    carrierId: string;
    /**
     * 费用数量
     */
    feeCount: number;
    /**
     * 付款方式
     */
    paymentMethod: string;
    /**
     * 总金额
     */
    totalMoney: number;
    /**
     * 费用状态
     */
    feeStatus: string;
    /**
     * 应付说明
     */
    description: string;
    /**
     * 结算人姓名
     */
    reckonerName: string;
    /**
     * 结算人编号
     */
    reckonerId: string;
    /**
     * 结算时间
     */
    settleTime: string;
    /**
     * 付款时间
     */
    payTime: string;
    /**
     * 结算审核人
     */
    auditedUser: string;
    /**
     * 结算审核人ID
     */
    auditedUserId: number;
    /**
     * 付款人
     */
    payUser: string;
    /**
     * 付款人Id
     */
    payUserId: number;
}

/**
 * 获取订单回单状态
 */
interface ReceiptStatusResponse extends BaseResponse {
    /**
     * 回单状态
     */
    receiptStatus: string;
    /**
     * 回单签收时间
     */
    receiptTime: string;
}

/**
 * 获取子单回单附件
 */
interface ChildOrderAttachmentResponse extends BaseResponse {
    /**
     * 编号
     */
    id: string;
    /**
     * 文件名
     */
    name: string;
    /**
     * 路径
     */
    path: string;
    /**
     * 标签
     */
    tag: string;
}

/**
 * 获取回单附件
 */
interface ReceiptAttachment {
    /**
     * 子单编号
     */
    orderChildId: string;
    /**
     * 附件名
     */
    name: string;
    /**
     * 附件路径 
     */
    path: string;

    creationTime?:string;
}

/**
*获取费用详情
*/
interface FeeDetailResponse extends BaseResponse {
    /**
     * 承运单编号
     */
    carrierOrderId: string;
    /**
     * 费用短号
     */
    feeCode: string;
    /**
     * 应付结算总单短号
     */
    feeSettleBillCode: string;
    /**
     * 承运商名称
     */
    carrier: string;
    /**
     * 合同短号
     */
    contractNumber: string;
    /**
     * 支出事由
     */
    expenditureReasons: string;
    /**
     * 申领金额
     */
    feeAmount: number;
    /**
     * 申领人
     */
    applicant: string;
    /**
     * 申领时间
     */
    creationTime: string;
    /**
     * 结算时间
     */
    settleTime: string;
    /**
     * 付款时间
     */
    payTime: string;
    /**
     * 费用类型
     */
    feeType: string;
    /**
     * 费用状态
     */
    feeStatus: string;
    /**
     * 付款方式
     */
    paymentMethod: string;
}

/**
*获取应付结算总单详情
*/
interface FeeSettleBillDetailResponse extends BaseResponse {
    /**
     * 结算总单主键
     */
    id: string;
    /**
     * 可识别结算总单编号
     */
    billCode: string;
    /**
     * 物流公司编号
     */
    logisticsId: string;
    /**
     * 承运商名称
     */
    carrier: string;
    /**
     * 承运商编号
     */
    carrierId: string;
    /**
     * 承运商号码
     */
    carrierPhone: string;
    /**
     * 总金额
     */
    totalMoney: number;
    /**
     * 开户银行
     */
    bankName: string;
    /**
     * 银行卡号
     */
    bankCode: string;
    /**
     * 持卡人
     */
    holder: string;
    /**
     * 应付说明
     */
    description: string;
    /**
     * 备注信息
     */
    remark: string;
    /**
     * 结算时间
     */
    settleTime: string;
    /**
     * 付款时间
     */
    payTime: string;
    /**
     * 结算人姓名
     */
    reckonerName: string;
    /**
     * 结算人编号
     */
    reckonerId: number;
    /**
     * 结算单审核人姓名
     */
    auditedUserName: string;
    /**
     * 结算单审核人编号
     */
    auditedUserId: string;
    /**
     * 费用状态
     */
    feeStatus: string;
    /**
     * 是否单次结算
     */
    isFeeSingle: string;
    /**
     * 是否修改银行卡
     */
    isChangeBank: boolean;
}

/**
 * 获取生成应付结算总单信息
 */
interface CreateFeeSettleBillResponse extends BaseResponse {
    /**
     * 承运商名称
     */
    carrier: string;
    /**
     * 承运商编号
     */
    carrierId: string;
    /**
     * 承运商电话
     */
    carrierPhone: string;
    /**
     * 总金额
     */
    totalMoney: number;
    /**
     * 开户银行
     */
    bankName: string;
    /**
     * 银行卡号
     */
    bankCode: string;
    /**
     * 持卡人
     */
    holder: string;
    /**
     * 费用列表
     */
    feeList: string;
}

/**
*获取合同详情
*/
interface ContractDetailResponse extends BaseResponse {
    /**
    *承运单编号
    */
    carrierOrderId: string;
    /**
    *备用电话
    */
    altermatePhone: string;
    /**
    *辅助工具
    */
    auxiliaryTool: string;
    /**
    *合同编号
    */
    contractNumber: string;
    /**
    *合同状态
    */
    contractStatus: string;
    /**
    *驾驶证号
    */
    driverLicenseNumber: string;
    /**
    *发动机号
    */
    engineNumber: string;
    /**
    *车架号
    */
    frameNumber: string;
    /**
    *合同货物数量单位
    */
    goodsUnit: string;
    /**
    *油卡卡号
    */
    oilCardNumber: string;
    /**
    *油卡状态
    */
    oilCardStatus: string;
    /**
    *合同货物数量
    */
    quantityOfGoods: number;
    /**
    *挂车车架号
    */
    trailerFrameNumber: string;
    /**
    *挂车号
    */
    trailerNumber: string;
    /**
    *合同日期
    */
    contractTime: string;

}


/**
*获取费用凭证
*/
interface FeeVoucherResponse extends BaseResponse {
    /**
    *审核时间
    */
    auditedTime: string;
    /**
    *银行卡号
    */
    bankCode: string;
    /**
    *持卡人
    */
    holder: string;
    /**
   *付款方式
   */
    paymentMethod: string;
    /**
   *总金额
   */
    feeAmount: number;
    /**
    *总金额(大写)
    */
    feeAmountStr: string;
    /**
   *事由
   */
    description: string;
    /**
    *油卡卡号
    */
    oilCardNumber: string;
    /**
   *费用类型
   */
    feeType: string;
}


/**
 *获取结算凭证
 */
interface feeSettleBillVoucherResponse extends BaseResponse {
    /**
     *结算时间
     */
    settleTime: string;
    /**
     *银行卡号
     */
    bankCode: string;
    /**
     *持卡人
     */
    holder: string;
    /**
     *付款方式
     */
    paymentMethod: string;
    /**
     *总金额
     */
    totalMoney: number;
    /**
     *总金额（大写）
     */
    totalMoneyStr: string;
    /**
     *事由
     */
    description: string;
}

/**
 * 发起网银支付返回参数
 */
interface feePaymentResPonse extends BaseResponse{
    /**
     * 结算单编号
     */
    feeSettleBillId:string;
    /**
     * 结算单可识别编号
     */
    feeSettleBillCode: string;
    /**
     * 支付状态（值）
     */
    status: number;
    /**
     * 支付状态
     */
    statusStr: string;
    /**
     * 错误信息
     */
    errorInfo: string;
    /**
     * 受理时间
     */
    acceptanceTime: string;
    /**
     * 打款成功时间
     */
    paySuccessTime:string;
}
/*
 * 获取付款记录返回数据实体
 */
interface paymentLogListItemResponse{
    /**
     * 标识符
     */
    id:string;
    /**
     * 序号
     */
    index:number;
    /**
     * 流水号
     */
    logCode:string;
    /**
     * 应付账单可识别编号
     */
    feeSettleBillCode:string;
    /**
     * 应付账单编号
     */
    feeSettleBillId:string;
    /**
     * 支付状态（值）
     */
    status:number;
    /**
     * 支付状态
     */
    statusStr:string;
    /**
     * 付款人
     */
    payer:string;
    /**
     * 付款人编号
     */
    payerId:string;
    /**
     * 总金额
     */
    amount:number;
    /**
     * 持卡人
     */
    holder:string;
    /**
     * 银行卡号
     */
    bankCode:string;
    /**
     * 错误信息
     */
    errorInfo:string;
    /**
     * 打款时间
     */
    creationTime:string;
    /**
     * 受理时间
     */
    acceptanceTime:string;
    /**
     * 打款成功时间
     */
    paySuccessTime:string;
}




//result
interface feeService {
    /**
     * 获取订单回单状态
     * v1.0
     * @param id 订单编号
     */
    receiptStatus(id: string): Promise<ReceiptStatusResponse>;

    /**
     * 获取付款记录
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param feeSettleBillId 结算单Id
     * @param feeSettleBillCode 结算单可识别编号
     * @param logCode 流水号
     * @param feeStatus 付款状态
     * @param skip 跳过项数
     * @param count 获取项数
     */
    paymentLogList(orderby:string, asc:boolean, feeSettleBillId:string, feeSettleBillCode:string, logCode:string, feeStatus:string, skip:number, count:number):Promise<ListResponse<paymentLogListItemResponse>>;

    /**
     * 编辑回单
     * v1.0
     * @param isEditReceiptStatus 是否只修改回单状态
     * @param id 订单编号
     * @papam ReceiptStatus 回单状态
     * @papam ReceiptTime 回单签收日期
     * @papam ReceiptAttachmentList 回单附件
     */
    receipts(isEditReceiptStatus:boolean, id: string, receiptStatus: string, receiptTime: string, ReceiptAttachmentList: Array<ReceiptAttachment>): Promise<BaseResponse>;

    /**
     * 获取合同详情
     * v1.0
     * @param id 合同编号
     */
    contractDetail(id: string): Promise<ContractDetailResponse>;

    /**
     * 改变合同状态
     * v1.0
     * @param ContractId 合同编号     
     * @param OilCardStatus 油卡状态      
     * @param ContractStatus 合同状态      
     */
    changeContractStatus(contractId: string, oilCardStatus: string, contractStatus: string): Promise<BaseResponse>;

    /**
     * 获取子单回单附件
     * v1.0
     * @param id 子单编号    
     */
    childOrderAttachment(id: string): Promise<ChildOrderAttachmentResponse>;

    /**
     * 获取费用详情
     * v1.0
     * @param id 费用编号
     */
    feeDetail(id: string): Promise<FeeDetailResponse>;

    /**
     * 应付审核通过
     * v1.0
     * @param id 应付费用编号（逗号分隔）
     */
    auditedFee(id: string): Promise<BaseResponse>;

    /**
     * 应付费用退回办理
     * v1.0
     * @param id 应付费用编号    
     */
    returnManage(id: string): Promise<BaseResponse>;

    /**
     * 添加费用至结算总单
     * v1.0
     * @param FeeId 费用编号 
     * @param FeeSettleBillId  应付总单编号
     */
    addFeeToParent(feeId: string, feeSettleBillId: string): Promise<BaseResponse>;

    /**
     * 获取应付结算总单详情
     * v1.0
     * @param id  应付结算总单编号  
     */
    getFeeSettleBillDetail(id: string): Promise<FeeSettleBillDetailResponse>;

    /**
     * 导出应付账单列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param FeeSettleBillCode 结算总单短号
     * @param CarrierId 承运商编号
     * @param CarrierName 承运商名称
     * @param PaymentMethod 付款方式
     * @param StartTime 结算开始时间
     * @param EndTime 结算结束时间
     * @param TotalMoney 总金额
     * @param ReckonerId 结算人编号
     * @param ContractNumber 合同号
     * @param FeeStatusList 费用状态
     * @param Origin 发货地址
     * @param Destination 目的地址    
     */
    feesettlebillexport(orderby: number, asc: boolean, feeSettleBillCode: string, carrierId: string, carrierName: string, paymentMethod: string, startTime: string, endTime: string, totalMoney: string, reckonerId: string, contractNumber: string, feeStatusList: string, origin: string, destination: string): any

     /**
     * 导出应付管理列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param FeeSettleBillCode 结算总单短号
     * @param FeeCode 费用短号
     * @param ClientName 客户单位名称
     * @param ClientId 客户单位
     * @param Applicant 申领人
     * @param ContractNumber 合同短号
     * @param StartDeliveryTime 发货开始时间
     * @param EndDeliveryTime 发货结束时间
     * @param StartTime 申领开始时间
     * @param EndTime 申领结束时间
     * @param SettleStartTime 结算开始时间
     * @param SettleEndTime 结算结束时间    
     * @param PayStartTime 付款开始时间    
     * @param PayEndTime 付款结束时间    
     * @param ContractStatus 合同状态    
     * @param ReceiptStatus 回单状态    
     * @param OilCardStatus 油卡状态    
     * @param CarrierId 承运商编号    
     * @param CarrierName 承运商名称 
     * @param CarrierPhone 承运商电话    
     * @param CarCode 车牌号    
     * @param FeeType 费用类型 
     * @param FeeStatusList 费用状态 
     * @param Origin 发货地址 
     * @param Destination 目的地址 
     * @param PaymentMethod 付款方式    
     * @param PayUser 付款人 
     */
    exportFinanceFeeList(orderby: number, asc: boolean, feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string, payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatusList: string, origin: string, destination: string, paymentMethod: string, payUser: string): any

    /**
     * 结算单审核通过
     * v1.0
     * @param id 应付结算总单编号    
     */
    audited(id: string): Promise<BaseResponse>;

    /**
     * 结算单退回结算
     * v1.0
     * @param id 应付结算总单编号        
     */
    returnSettle(id: string): Promise<BaseResponse>;

    /**
     * 已付款
     * v1.0
     * @param id 应付结算总单编号(以逗号隔开)   
     */
    paid(id: string): Promise<BaseResponse>;

    /**
     * 获取生成应付结算总单信息
     * v1.0
     * @param id 费用列表    
     */
    createBill(id: string): Promise<CreateFeeSettleBillResponse>;

    /**
     * 获取费用凭证
     * v1.0
     * @param id 费用id    
     */
    feeVoucher(id: string): Promise<FeeVoucherResponse>;

    /**
     * 获取结算单凭证
     * v1.0
     * @param id 应付结算单Id   
     */
    feeSettleBillVoucher(id: string): Promise<feeSettleBillVoucherResponse>;
    /**
     * 修改承运单备注
     * v1.0
     * @param carrierOrderId 承运单编号 
     * @param carrierOrderRemarks 承运单备注       
     */
    carrierOrderRemarks(carrierOrderId: string, carrierOrderRemarks: string): Promise<BaseResponse>;
    /**
     * 付款人退回
     * v1.0
     * @param id 应付结算总单编号    
     */
    payerReturn(id: string): Promise<BaseResponse>;

    /**
     * 添加应付结算总单
     * v1.0
     * @param carrier 承运商名称
	 * @param carrierId	承运商编号
	 * @param carrierPhone 承运商号码
	 * @param totalMoney 总金额
	 * @param bankName 开户银行
	 * @param bankCode 银行卡号
	 * @param holder 持卡人
	 * @param description 应付说明
	 * @param remarks 备注信息
	 * @param feeList 费用列表 
     */
    addFeeSettleBill(carrier: string, carrierId: string, carrierPhone: string, totalMoney: number, bankName: string, bankCode: string, holder: string, description: string, remarks: string, feeList: string[]): Promise<BaseResponse>;

    /**
     * 获取应付结算总单列表
     * v1.0
	 * @param orderby 排序字段枚举
	 * @param asc 是否升序
	 * @param FeeSettleBillCode 结算总单短号
	 * @param CarrierId 承运商编号
	 * @param CarrierName 承运商名称
	 * @param PaymentMethod 付款方式
	 * @param StartTime 结算开始时间
	 * @param EndTime 结算结束时间
	 * @param TotalMoney 总金额
	 * @param ReckonerId 结算人编号
	 * @param ContractNumber 合同号
	 * @param FeeStatusList 费用状态
	 * @param Origin 发货地址
	 * @param Destination 目的地址
     * @param isCheckCanPay 是否检查可支付
	 * @param skip 跳过项数
	 * @param count 获取项数
	 **/
    getFeeSettleBillList(orderby: string, asc: boolean, feeSettleBillCode: string, carrierId: string, carrierName: string, paymentMethod: string, startTime: string, endTime: string, totalMoney: string, reckonerId: string, contractNumber: string, feeStatusList: string, origin: string, destination: string, isCheckCanPay:boolean,skip: number, count: number): Promise<ListResponse<FeeSettleBillListItemResponse>>;

    /**
     * 获取费用列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param feeSettleBillCode 结算总单短号
     * @param feeCode 费用短号
     * @param clientName 客户单位名称
     * @param clientId 客户单位
     * @param applicant 申领人
     * @param contractNumber 合同短号
     * @param startDeliveryTime 发货开始时间
     * @param endDeliveryTime 发货结束时间
     * @param startTime 申领开始时间
     * @param endTime 申领结束时间
     * @param settleStartTime 结算开始时间
     * @param settleEndTime 结算结束时间
     * @param payStartTime 付款开始时间
     * @param payEndTime 付款结束时间
     * @param contractStatus 合同状态
     * @param receiptStatus 回单状态
     * @param oilCardStatus 油卡状态
     * @param carrierId 承运商编号
     * @param carrierName 承运商名称
     * @param carrierPhone 承运商电话
     * @param carCode 车牌号
     * @param feeType 费用类型
     * @param feeStatuslist 费用状态
     * @param origin 发货地址
     * @param destination 目的地址
     * @param paymentMethod 付款方式
     * @param payUser 付款人员
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getFinanceFeeList(orderby: string, asc: boolean, feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string, payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatuslist: string, origin: string, destination: string, paymentMethod: string,payUser:string, skip: number, count: number): Promise<ListResponse<FinanceFeeListItemResponse>>;

    /**
     * 获取费用列表总数
     * v1.0
     * @param feeSettleBillCode 结算总单短号
     * @param feeCode 费用短号
     * @param clientName 客户单位名称
     * @param clientId 客户单位
     * @param applicant 申领人
     * @param contractNumber 合同短号
     * @param startDeliveryTime 发货开始时间
     * @param endDeliveryTime 发货结束时间
     * @param startTime 申领开始时间
     * @param endTime 申领结束时间
     * @param settleStartTime 结算开始时间
     * @param settleEndTime 结算结束时间
     * @param payStartTime 付款开始时间
     * @param payEndTime 付款结束时间
     * @param contractStatus 合同状态
     * @param receiptStatus 回单状态
     * @param oilCardStatus 油卡状态
     * @param carrierId 承运商编号
     * @param carrierName 承运商名称
     * @param carrierPhone 承运商电话
     * @param carCode 车牌号
     * @param feeType 费用类型
     * @param feeStatuslist 费用状态
     * @param origin 发货地址
     * @param destination 目的地址
     * @param paymentMethod 付款方式
     * @param payUser 付款人员
     */
    getFinanceFeeCount(feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string,payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatuslist: string, origin: string, destination: string, paymentMethod: string,payUser:string): Promise<ListResponse<any>>;

    /**
     * 获取应付结算总单列表数量
     * @param feeSettleBillCode 结算总单短号
     * @param carrierId 承运商编号
     * @param carrierName 承运商名称
     * @param paymentMethod 付款方式
     * @param startTime 申领开始时间
     * @param endTime 申领结束时间
     * @param totalMoney 总金额
     * @param reckonerId 结算人编号
     * @param contractNumber 合同号
     * @param feeStatusList 费用状态
     * @param origin 发货地址
     * @param destination 目的地址
     */
    getFeesettlebillcount(feeSettleBillCode: string,carrierId:string,carrierName: string,paymentMethod: string,startTime: string, endTime: string, totalMoney: string, reckonerId: string,contractNumber: string,feeStatusList: string, origin: string, destination: string): Promise<ListResponse<any>>;


    /**
     * 获取费用列表总额
     * v1.0
     * @param feeSettleBillCode 结算总单短号
     * @param feeCode 费用短号
     * @param clientName 客户单位名称
     * @param clientId 客户单位
     * @param applicant 申领人
     * @param contractNumber 合同短号
     * @param startDeliveryTime 发货开始时间
     * @param endDeliveryTime 发货结束时间
     * @param startTime 申领开始时间
     * @param endTime 申领结束时间
     * @param settleStartTime 结算开始时间
     * @param settleEndTime 结算结束时间
     * @param payStartTime 付款开始时间
     * @param payEndTime 付款结束时间
     * @param contractStatus 合同状态
     * @param receiptStatus 回单状态
     * @param oilCardStatus 油卡状态
     * @param carrierId 承运商编号
     * @param carrierName 承运商名称
     * @param carrierPhone 承运商电话
     * @param carCode 车牌号
     * @param feeType 费用类型
     * @param feeStatuslist 费用状态
     * @param origin 发货地址
     * @param destination 目的地址
     * @param paymentMethod 付款方式
     * @param payUser 付款人员
     */
    getFinanceFeeTotal(feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string, payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatuslist: string, origin: string, destination: string, paymentMethod: string,payUser:string): Promise<ListResponse<any>>

    /**
     * 导出应付费用列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param FeeSettleBillCode 结算总单短号
     * @param FeeCode 费用短号
     * @param ClientName 客户单位名称
     * @param ClientId 客户单位
     * @param Applicant 申领人
     * @param ContractNumber 合同短号
     * @param StartDeliveryTime 发货开始时间
     * @param EndDeliveryTime 发货结束时间
     * @param StartTime 申领开始时间
     * @param EndTime 申领结束时间
     * @param SettleStartTime 结算开始时间
     * @param SettleEndTime 结算结束时间
     * @param PayStartTime 付款开始时间
     * @param PayEndTime 付款结束时间
     * @param ContractStatus 合同状态
     * @param ReceiptStatus 回单状态
     * @param OilCardStatus 油卡状态
     * @param CarrierId 承运商编号
     * @param CarrierName 承运商名称
     * @param CarrierPhone 承运商电话
     * @param CarCode 车牌号
     * @param FeeType 费用类型
     * @param FeeStatus 费用状态
     * @param Origin 发货地址
     * @param Destination 目的地址
     * @param PaymentMethod 付款方式
     */
    export(orderby: number, asc: boolean, feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string, payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatus: string, origin: string, destination: string, paymentMethod: string): Promise<ListResponse<FinanceFeeListItemResponse>>;

    /**
     * 发起网银支付
     * v1.0
     * @param id 结算单Id
     */
    payment(id:string):Promise<feePaymentResPonse>;

    /**
     * 查询支付状态
     * v1.0
     * @param id 结算单Id
     */
    queryPayment(id:string):Promise<feePaymentResPonse>;

    /**
     * 发起重试
     * v1.0
     * @param feeSettleBillId 应付账单编号
     * @param holder 持卡人
     * @param bankCode 银行卡号
     * @param bankName 银行名称
     */
    paymentRetry(feeSettleBillId:string,holder:string,bankCode:string,bankName:string):Promise<feePaymentResPonse>;

}

export default feeService;

