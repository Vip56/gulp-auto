import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
*承运单列表返回数据
*/
interface carryOrderListResponse {
  /**
  *标识符
  */
  id: string;
  /**
  *序号
  */
  index: number;
  /**
  *订单列表
  */
  orderList: Array<orderList>;
  /**
  *承运车牌号
  */
  carryCarCode: string;
  /**
  *车辆id
  */
  carId: string;
  /**
  *合同编号
  */
  contractNum: string;
  /**
  *合同状态
  */
  contractStatus: string;
  /**
  *	油卡状态
  */
  oilCardStatus: string;
  /**
  *定位状态
  */
  locationStatus: string;
  /**
  *承运车长
  */
  carryCarLength: string;
  /**
  *应付单价
  */
  receivablePrice: string;
  /**
  *回单款(发货单不用显示,财务要用)
  */
  receiptPrice: number;
  /**
  *承运商名称
  */
  carrierName: string;
  /**
  *驾驶员姓名
  */
  driver: string;
  /**
  *驾驶员电话
  */
  driverPhone: string;
  /**
  *承运商电话
  */
  carrierPhone: string;
  /**
  *实际到货时间
  */
  realArrivalTime: string;
}
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
*获取订单子单返回数据
*/
interface orderChildListResponse extends BaseResponse {
  /**
  *标识符
  */
  id: string;
  /**
  *序号
  */
  index: number;
  /**
  *发货地址
  */
  shipGoodsAddress: string;
  /**
  *途径地址（中转地）
  */
  viaAddress: string;
  /**
  *发货时间
  */
  deliveryTime: string;
  /**
  *到货时间
  */
  arrivalTime: string;
  /**
  *送货地址
  */
  deliveryAddress: string;
  /**
  *吨位范围
  */
  tonnageRange: string;
  /**
  *结算方式
  */
  settlementType: string;
  /**
  *货物类别
  */
  goodsType: string;
  /**
  *货物名称
  */
  goodsName: string;
  /**
  *货物数量
  */
  goodsNum: string;
  /**
  *应收单价
  */
  receivablePrice: string;
  /**
  *应收总价
  */
  receivableTotal: string;
  /**
  *结算单位
  */
  settleName: string;
  /**
  *子单编号
  */
  orderChildId: string;
}

/**
*获取费用申请列表
*/
interface feeListResponse {
  /**
  *费用id
  */
  feeId: string;
  /**
  *费用编号
  */
  feeCode: string;
  /**
  *申请金额
  */
  applyAmount: number;
  /**
  *申请金额（字符串）
  */
  applyAmountStr: string;
  /**
  *费用类型（字符串）
  */
  feeTypeStr: string;
  /**
  *费用类型（枚举）
  */
  feeType: string;
  /**
  *申请人
  */
  applyPerson: string;
  /**
  *结算承运商
  */
  settleCarrier: string;
  /**
  *费用状态
  */
  feeStatusStr: string;
  /**
  *支付方式(字符串)
  */
  paymentMethodStr: string;
  /**
  *支付方式(枚举)
  */
  paymentMethod: string;
  /**
  *支付日期
  */
  payTime: string;
  /**
  *支出原因
  */
  payReason: string;
  /**
  *费用审核时间
  */
  auditedTime: string;
  /**
   * 持卡人
   */
  holder: string;
  /**
   * 银行卡号
   */
  bankCode: string;
  /**
   * 开户银行
   */
  openBank: string;
}

/**
*获取应收登记列表
*/
interface receivableListResponse {
  /**
  *订单id
  */
  orderId: string;
  /**
  *子单id
  */
  orderChildId: string;
  /**
  *应收编号
  */
  receivableId: string;
  /**
  *应收可识别编号
  */
  receivableCode: string;
  /**
  *发货地址
  */
  originAddress: string;
  /**
  *途径卸货地列表(列表)
  */
  viaList: string;
  /**
  *途径卸货地列表(详情)
  */
  viaAddressList: Array<address>;
  /**
  *目的地
  */
  destination: address;
  /**
  *起始地
  */
  origin: address;
  /**
  *送货地址
  */
  destinationAddress: string;
  /**
  *发货时间
  */
  deliveryTime: string;
  /**
  *到货时间
  */
  arrivalTime: string;
  /**
  *货物编号
  */
  goodsId: string;
  /**
  *货物名称
  */
  goodsName: string;
  /**
  *货物类型编号
  */
  goodsTypeId: string;
  /**
  *货物类型名称
  */
  goodsTypeName: string;
  /**
  *货物数量
  */
  goodsCount: number;
  /**
  *货物数量单位
  */
  goodsUnit: string;
  /**
  *货物数量2
  */
  goodsCountTwo: string;
  /**
  *货物数量单位2
  */
  goodsUnitTwo: string;
  /**
  *里程数
  */
  mileage: number;
  /**
  *申请应收
  */
  applyReceivable: number;
  /**
  *结算单位
  */
  settle: string;
  /**
  *结算单位Id
  */
  settleId: string;
  /**
  *费用类型(字符串)
  */
  feeTypeStr: string;
  /**
  *费用类型(枚举)
  */
  feeType: string;
  /**
  *结算方式(字符串)
  */
  settlementTypeStr: string;
  /**
  *结算方式(枚举)
  */
  settlementType: string;
  /**
  *应收说明
  */
  receivableRemark: string;
  /**
  *含税(字符串)
  */
  includeTaxStr: string;
  /**
  *含税(枚举)
  */
  includeTax: string;
  /**
  *结算状态
  */
  settleStatus: string;
  /**
  *吨位范围
  */
  tonnageRange: string;
  /**
  *申请应收(列表显示)
  */
  applyReceivableStr: string;
  /**
  *货物数量(列表显示)
  */
  goodsCountStr: string;
  /**
  *是否系统生成
  */
  isAutoCompleted: boolean;
  /**
   * 起始省str
   */
  originProvince: string;
  /**
   * 起始市str
   */
  originCity: string;
  /**
   * 起始区
   */
  originCounty: string;
  /**
   * 目的地省
   */
  destinationProvince: string;
  /**
   * 目的地市
   */
  destinationCity: string;
  /**
   * 目的地区
   */
  destinationCounty: string;
}

/**
*地址类型
*/
interface address {
  /**
  *省
  */
  province: string;
  /**
  *市
  */
  city: string;
  /**
  *区
  */
  county: string;
  /**
  *详细地址
  */
  details?: string;
}

/**
*获取订单详情返回参数
*/
interface detailResponse extends BaseResponse {
  /**
  *订单id
  */
  id: string;
  /**
  *计划专员
  */
  planOfficer: string;
  /**
  *	商务专员
  */
  businessOfficer: string;
  /**
  *客服专员
  */
  customerServiceOfficer: string;
  /**
  *调度专员
  */
  dispatchOfficer: string;
  /**
  *计划专员id
  */
  plannerId: number;
  /**
  *下单时间
  */
  placeOrderTime: string;
  /**
  *紧急程度
  */
  urgencyDegree: string;
  /**
  *客户名称
  */
  clientName: string;
  /**
  *发货计划人
  */
  consignorName: string;
  /**
  *发货计划人号码
  */
  consignorPhone: string;
  /**
  *中转地
  */
  viaAddressList: string;
  /**
  *订单状态
  */
  orderStatus: number;
  /**
  *货物数量
  */
  quantityOfGoods: string;
  /**
  *订单编号
  */
  orderId: string;
  /**
  *紧急程度
  */
  urgency: number;
  /**
  *紧急程度单位
  */
  urgencyUnit: string;
  /**
  *商务专员编号
  */
  businessOfficerId: string;
  /**
  *客服专员编号
  */
  customerServiceOfficerId: string;
  /**
  *调度专员编号
  */
  dispatchOfficerId: string;
  /**
  *客户编号
  */
  clientId: string;
  /**
  *客户单位短号
  */
  clientCornet: string;
  /**
  *发货计划人编号
  */
  consignorId: string;
  /**
  *发货内容
  */
  shipPriceContent: string;
  /**
  *所需车型
  */
  carType: string;
  /**
  *所需车长
  */
  carLength: string;
  /**
  *承运方式
  */
  carriageWay: string;
  /**
  *	装车效果
  */
  loadingResult: string;
  /**
  *附件列表(名称+路径)
  */
  attachment: Array<any>;
  /**
  *订单备注
  */
  remarks: string;
  /**
  *途经卸货地列表
  */
  viaList: Array<address>;
  /**
  *发货地省编号
  */
  shipProvince: string;
  /**
  *发货地市编号
  */
  shipCity: string;
  /**
  *发货地区编号
  */
  shipArea: string;
  /**
  *发货地详情
  */
  shipDetail: string;
  /**
  *发货地详细地址
  */
  shipAddress: string;
  /**
  *送货地省编号
  */
  deliverProvince: string;
  /**
  *送货地市编号
  */
  deliverCity: string;
  /**
  *送货地区编号
  */
  deliverArea: string;
  /**
  *送货地址详情
  */
  deliverDetail: string;
  /**
  *送货地详细地址
  */
  deliverAddress: string;
  /**
  *发货时间
  */
  shipTime: string;
  /**
  *到货时间
  */
  arriveTime: string;
  /**
  *里程数
  */
  mileage: number;
  /**
  *货品类型编号
  */
  goodsTypeId: string;
  /**
  *货品类别
  */
  goodsType: string;
  /**
  *货品编号
  */
  goodsId: string;
  /**
  *货品名称
  */
  goodsName: string;
  /**
  *货品数量
  */
  goodsNum: number;
  /**
  *货品数量单位
  */
  goodsNumUnit: string;
  /**
  *货物数量2
  */
  goodsNumTwo: string;
  /**
  *货物数量2单位
  */
  goodsNumUnitTwo: string;
  /**
  *吨位范围
  */
  tonRange: string;
  /**
  *调度专员名称
  */
  dispatcherName: string;
  /**
  *调度专员号码
  */
  dispatcherPhone: string;
  /**
  *商务专员名称
  */
  businessAffairsName: string;
  /**
  *客服专员名称
  */
  customerServiceName: string;
  /**
  *计划专员名称
  */
  plannerName: string;
}

/**
*获取子单详情返回参数
*/
interface orderChildResponse extends BaseResponse {
  /**
   * 编号
   */
  id: string;
  /**
  *订单编号
  */
  orderId: string;
  /**
  *发货地省编号
  */
  shipProvince: string;
  /**
  *发货地市编号
  */
  shipCity: string;
  /**
  *发货地区编号
  */
  shipArea: string;
  /**
  *发货地详细地址
  */
  shipAddress: string;
  /**
  *	途经卸货地列表
  */
  viaAddressList: Array<address>;
  /**
  *送货地省编号
  */
  deliverProvince: string;
  /**
  *送货地市编号
  */
  deliverCity: string;
  /**
  *送货地区编号
  */
  deliverArea: string;
  /**
  *送货地详细地址
  */
  deliverAddress: string;
  /**
  *发货时间
  */
  shipTime: string;
  /**
  *到货时间
  */
  arriveTime: string;
  /**
  *里程数
  */
  mileage: number;
  /**
  *货品类型编号
  */
  goodsTypeId: string;
  /**
  *货品类别
  */
  goodsType: string;
  /**
  *货品编号
  */
  goodsId: string;
  /**
  *货品名称
  */
  goodsName: string;
  /**
  *货品数量
  */
  goodsNum: number;
  /**
  *货品数量单位
  */
  goodsNumUnit: string;
  /**
  *货物数量2
  */
  goodsNumTwo: string;
  /**
  *货物数量2单位
  */
  goodsNumUnitTwo: string;
  /**
  *吨位范围
  */
  tonRange: string;
  /**
  *应收单价
  */
  receivablePrice: number;
  /**
  *应收单价单位
  */
  receivablePriceUnit: string;
  /**
  *应收总价
  */
  receivableTotal: number;
  /**
  *结算方式
  */
  settleType: string;
  /**
  *含税
  */
  includeTax: string;
  /**
  *应收说明
  */
  receivableRemarks: string;
  /**
  *结算单位编号
  */
  settleId: string;
  /**
  *结算单位
  */
  reckoner: string;
  /**
  *工程编号
  */
  projectId: string;
  /**
  *工程代号
  */
  projectCode: string;
  /**
  *工程名称
  */
  projectName: string;
  /**
  *发货单号
  */
  shipOrderId: string;
  /**
  *收货单位编号
  */
  takeGoodsCompanyId: string;
  /**
  *	收货单位
  */
  takeGoodsCompany: string;
  /**
  *	收货人
  */
  consignee: string;
  /**
  *收货人号码
  */
  consigneePhone: string;
  /**
  *工程总量
  */
  projectTotal: string;
  /**
  *工程总量单位
  */
  projectTotalUnit: string;
}

/**
*获取承运单详情返回参数
*/
interface carryOrderResponse extends BaseResponse {
  /**
  *合同信息
  */
  contract: contract;
  /**
  *合同状态
  */
  contractStatus: string;
  /**
  *临时客服专员
  */
  tempCustomerService: string;
  /**
  *临时客服专员编号
  */
  tempCustomerServiceId: number;
  /**
  *可识别订单编号列表
  */
  orderCodeList: Array<string>;
  /**
  *订单备注
  */
  orderRemarks: string;
  /**
  *订单Id列表
  */
  orderList: Array<string>;
  /**
  *承运商编号
  */
  carrierId: string;
  /**
  *承运商
  */
  carrierName: string;
  /**
  *承运商号码
  */
  carrierPhone: string;
  /**
  *承运商类型
  */
  carrierType: string;
  /**
  *车辆编号
  */
  carId: string;
  /**
  *车牌号
  */
  carCode: string;
  /**
  *驾驶员号码
  */
  driverPhone: string;
  /**
  *驾驶员名称
  */
  driverName: string;
  /**
  *承运车辆车长
  */
  carLength: string;
  /**
  *承运车辆车型
  */
  carType: string;
  /**
  *承运单应付单价
  */
  carrierReceivablePirce: number;
  /**
  *承运单应付单价单位
  */
  carrierReceivablePirceUnit: string;
  /**
  *承运单应付说明
  */
  carrierReceivableRemarks: string;
  /**
  *预付款
  */
  advancePaymentList: Array<advancePaymentList>;
  /**
  *回单款
  */
  receiptPrice: number;
  /**
  *回单款付款方式
  */
  receiptPriceType: string;
  /**
  *持卡人
  */
  holder: string;
  /**
  *账户编号
  */
  bankId: string;
  /**
  *银行卡号
  */
  bankCode: string;
  /**
  *开户银行
  */
  openBank: string;
  /**
  *回单款持卡人姓名
  */
  receiptPriceHolder: string;
  /**
  *回单款银行编号
  */
  receiptPriceBankId: string;
  /**
  *回单款银行卡号
  */
  receiptPriceBankCode: string;
  /**
  *回单款开户银行
  */
  receiptPriceOpenBank: string;
  /**
  *承运单备注
  */
  carryOrderRemarks: string;
  /**
  *附件列表(名称+路径)
  */
  attachment: Array<any>;
  /**
  *附件备注
  */
  attachmentDetails: string;
  /**
   * 定位状态
   */
  locationStatus: boolean;
  /**
   * 道路运输许可证号
   */
  permitNumber: string;
  /**
   * 所属辖区省（枚举）
   */
  countrySubdivisionProvinceCode: string;
  /**
 * 所属辖区市（枚举）
 */
  countrySubdivisionCityCode: string;
  /**
 * 所属辖区区（枚举）
 */
  countrySubdivisionCountryCode: string;
  /**
* 所属辖区省（str）
*/
  countrySubdivisionProvince: string;
  /**
 * 所属辖区市（str）
 */
  countrySubdivisionCity: string;
  /**
 * 所属辖区区（str）
 */
  countrySubdivisionCountry: string;
  /**
   * 道路运输证字号
   */
  roadTransportCertificateNumber: string;
}

/**
*承运单详情--合同信息
*/
interface contract {
  /**
  *承运单编号
  */
  carrierOrderId: string;
  /**
  *合同编号
  */
  contractId: string;
  /**
  *合同短号
  */
  contractNumber: string;
  /**
  *合同货物数量
  */
  contractGoodsNum: number;
  /**
  *合同货物数量单位
  */
  contractGoodsNumUnit: string;
  /**
  *合同日期
  */
  contractTime: string;
  /**
  *收货人
  */
  consignee: string;
  /**
  *收货人号码
  */
  consigneePhone: string;
  /**
  *油卡状态
  */
  oilCardStatus: string;
  /**
  *油卡卡号
  */
  oilCarNum: string;
  /**
  *辅助工具
  */
  auxiliaryTool: string;
  /**
  *发动机号
  */
  engineNumber: string;
  /**
  *车架号
  */
  frameNumber: string;
  /**
  *挂车号
  */
  trailerNumber: string;
  /**
  *	挂车车架号
  */
  trailerFrameNumber: string;
  /**
  *驾驶证
  */
  driverLicenseNumber: string;
  /**
  *备用电话
  */
  altermatePhone: string;
  /**
  *附件列表
  */
  attachmentList: Array<string>;
  /**
  *备注
  */
  remarks: string;
  /**
   * 回单状态集合（key为订单ID,value为回单状态的枚举）
   */
  receiptState: Array<any>;
  /**
   * 是否自动生成合同号
   */
  isAutoCreate: boolean;
  /**
   * 运费总价
   */
  totalPrice: number;
  /**
  * 送货单号
  */
  deliveryNumber: string;
}
/**
*预付款返回参数
*/
interface advancePaymentList {
  /**
  *预付款
  */
  advancePrice: number;
  /**
  *预付款付款方式
  */
  advancePriceType: string;
}

interface viaAddressList {
  province: string,
  city: string,
  county: string,
  index?: number
}
/**
*订单子单数据
*/
interface orderChildVM {
  /**
  *订单编号
  */
  orderId?: string;
  /**
  *发货地省编号
  */
  shipProvince: string;
  /**
  *发货地市编号
  */
  shipCity: string;
  /**
  *发货地区编号
  */
  shipArea: string;
  /**
  *发货地详细地址
  */
  shipAddress: string;
  /**
  *途经卸货地列表
  */
  viaAddressList: viaAddressList[];
  /**
  *送货地省编号
  */
  deliverProvince: string;
  /**
  *送货地市编号
  */
  deliverCity: string;
  /**
  *送货地区编号
  */
  deliverArea: string;
  /**
  *	送货地详细地址
  */
  deliverAddress: string;
  /**
  *发货时间
  */
  shipTime: string;
  /**
  *到货时间
  */
  arriveTime: string;
  /**
  *里程数
  */
  mileage: number;
  /**
  *货品类型编号
  */
  goodsTypeId: string;
  /**
  *货品类别
  */
  goodsType: string;
  /**
  *货品编号
  */
  goodsId: string;
  /**
  *货品名称
  */
  goodsName: string;
  /**
  *货品数量
  */
  goodsNum: number;
  /**
  *货品数量单位
  */
  goodsNumUnit: string;
  /**
  *货物数量2
  */
  goodsNumTwo: string;
  /**
  *货物数量2单位
  */
  goodsNumUnitTwo: string;
  /**
  *吨位范围
  */
  tonRange: string;
  /**
  *应收单价
  */
  receivablePrice: number;
  /**
  *应收单价单位
  */
  receivablePriceUnit: string;
  /**
  *应收总价
  */
  receivableTotal: number;
  /**
  *结算方式
  */
  settleType: string;
  /**
  *含税
  */
  includeTax: string;
  /**
  *应收说明
  */
  receivableRemarks: string;
  /**
  *结算单位编号
  */
  settleId: string;
  /**
  *结算单位
  */
  reckoner: string;
  /**
  *工程编号
  */
  projectId: string;
  /**
  *工程代号
  */
  projectCode: string;
  /**
  *工程名称
  */
  projectName: string;
  /**
  *发货单号
  */
  shipOrderId: string;
  /**
  *收货单位编号
  */
  takeGoodsCompanyId: string;
  /**
  *收货单位
  */
  takeGoodsCompany: string;
  /**
  *收货人
  */
  consignee: string;
  /**
  *收货人号码
  */
  consigneePhone: string;
  /**
  *工程总量
  */
  projectTotal: string;
  /**
  *工程总量单位
  */
  projectTotalUnit: string;
}


/**
*承运单报表列表
*/
interface reportCarrierOrderListResponse {
  /**
  *序号
  */
  index: number;
  /**
  *合同编号
  */
  contractNumber: string;
  /**
   * 承运商
   */
  carrier: string;
  /**
   * 驾驶员姓名
   */
  driver: string;
  /**
  *应付单价
  */
  payablePrice: string;
  /**
   * 应付单价(值)
   */
  payablePriceStr: string;
  /**
   * 应付单价单位
   */
  payablePriceUnit: string;
  /**
  *预付款
  */
  advancePayment: number;
  /**
  *易耗品（预付）
  */
  consumablePrePay: number;
  /**
  *易耗品（月结）
  */
  consumableMonthly: number;
  /**
  *吊费（预付）
  */
  liftingChargePrePay: number;
  /**
  *吊费（月结）
  */
  liftingChargeMonthly: number;
  /**
  *卸车费（预付）
  */
  unloadingChargePrePay: number;
  /**
  *卸车费（月结）
  */
  unloadingChargeMonthly: number;
  /**
  *保险费（预付）
  */
  premiumPrePay: number;
  /**
  *保险费（月结）
  */
  premiumMonthly: number;
  /**
  *额外费用
  */
  extraCharge: number;
  /**
  *货到打卡
  */
  deliveryToBank: number;
  /**
  *货到收款
  */
  deilveryToCash: number;
  /**
  *回单款
  */
  payReceipt: number;
  /**
  *短驳费
  */
  shortBargeCost: number;
  /**
  *进仓费
  */
  intoWarehouseCost: number;
  /**
  *其他
  */
  other: number;
  /**
  *费用合计
  */
  feeSum: number;
  /**
  *应收合计
  */
  receivableSum: number;
  /**
  *利润
  */
  profit: number;
  /**
  *利润率
  */
  profitMargin: string;
  /**
  *预付油卡
  */
  advancePaymentOil: string;
  /**
  *油卡总额
  */
  oilCardSum: number;
  /**
  *油卡比例
  */
  oilMargin: string;
  /**
  *订单列表
  */
  orderList: Array<reportCarrierOrderListOrderListResponse>;
}
/**
*承运单报表列表-订单列表
*/
interface reportCarrierOrderListOrderListResponse {
  /**
  *订单主键
  */
  id: string,
  /**
  *承运单编号
  */
  carrierOrderId: string,
  /**
  *客户单位
  */
  clientName: string,
  /**
  *发货地
  */
  originAddress: string,
  /**
  *目的地
  */
  destinationAddress: string,
  /**
  *货物名称
  */
  goodsName: string,
  /**
  *货物类型名称
  */
  goodsTypeName: string,
  /**
  *货物数量
  */
  quantityOfGoods: string,
  /**
  *货物数量单位
  */
  goodsUnit: string,
  /**
  *发货时间
  */
  deliveryTime: string,
  /**
  *调度专员
  */
  dispatcher: string,
  /**
  *应收总价
  */
  receivableSum: string
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
 * 订单管理详情返回参数
 */
interface orderManagementResponse {
  /**
   * 订单编号
   */
  id: string;
  /**
   * 可识别的订单编号
   */
  orderId: string;
  /**
   * 下单时间
   */
  creationTime: string;
  /**
   * 订单附件
   */
  orderAttachments: Array<AddCarAttachmentDetail>;
  /**
   * 订单子单列表 
   */
  childList: Array<invoiceManagementOrderChild>;
  /**
   * 所需车长
   */
  carLength: string;
  /**
   * 承运方式
   */
  carriageWay: string;
  /**
   * 车型
   */
  vehicleType: string;
  /**
   * 装车效果
   */
  loadingEffect: string;
  /**
   * 客户单位编号
   */
  clientId: string;
  /**
   * 客户单位名称
   */
  clientName: string;
  /**
   * 发货内容
   */
  content: string;
  /**
   * 客服专员编号
   */
  customerServiceId: number;
  /**
   * 客服专员名称
   */
  customerServiceName: string;
  /**
   * 调度专员编号
   */
  dispatcherId: number;
  /**
   * 调度专员名称
   */
  dispatcherName: string;
  /**
   * 调度专员号码
   */
  dispatcherPhoneNumber: string;
  /**
   * 计划专员名称
   */
  plannerName: string;
  /**
   * 商务专员名称
   */
  businessAffairsName: string;
  /**
   * 发货计划人
   */
  consignorName: string;
  /**
   * 发货计划人号码
   */
  consignorPhone: string;
  /**
   * 订单备注
   */
  remarks: string;
  /**
   * 规定回复时间（分钟）
   */
  responseTime: string;
  /**
   * 应收信息列表
   */
  receiveList: Array<invoiceManagementReceivable>;
  /**
   * 订单状态
   */
  status: string;
  /**
   * 发货时间
   */
  deliveryTime: string;
  /**
   * 到货时间
   */
  arrivalTime: string;
  /**
   * 实际发货时间
   */
  realDeliveryTime: string;
  /**
   * 实际到货时间
   */
  realArrivalTime: string;
  /**
   * 货物编号
   */
  goodsId: string;
  /**
   * 货物名称
   */
  goodsName: string;
  /**
   * 货物类型编号
   */
  goodsTypeId: string;
  /**
   * 货物类型名称
   */
  goodsTypeName: string;
  /**
   * 实际货物数量
   */
  realQuantityOfGoods: number;
  /**
   * 货物数量单位
   */
  goodsUnit: string;
  /**
   * 货物数量单位枚举
   */
  goodsUnitEnum: string;
  /**
   * 货物数量2
   */
  quantityOfGoodsTwo: number;
  /**
   * 货物数量2单位
   */
  goodsUnitTwo: string;
  /**
   * 货物数量2单位枚举
   */
  goodsUnitTwoEnum: string;
  /**
   * 里程数
   */
  mileage: number;
  /**
   * 目的地省
   */
  destinationProvinceStr: string;
  /**
   * 目的地省编号
   */
  destinationProvince: string;
  /**
   * 目的地市
   */
  destinationCityStr: string;
  /**
   * 目的地市编号
   */
  destinationCity: string;
  /**
   * 目的地区
   */
  destinationCountyStr: string;
  /**
   * 目的地编号
   */
  destinationCounty: string;
  /**
   * 目的地详情
   */
  destinationDetails: string;
  /**
   * 起始地省
   */
  originProvinceStr: string;
  /**
   * 起始地省编号
   */
  originProvince: string;
  /**
   * 起始地市
   */
  originCityStr: string;
  /**
   * 起始地市编号
   */
  originCity: string;
  /**
   * 起始地区
   */
  originCountyStr: string;
  /**
   * 起始地区编号
   */
  originCounty: string;
  /**
   * 起始地详情
   */
  originDetails: string;
  /**
   * 目的地经度
   */
  destinationLongitude: number;
  /**
   * 起始地经度
   */
  originLongitude: number;
  /**
   * 目的地纬度
   */
  destinationLatitude: number;
  /**
   * 起始地纬度
   */
  originLatitude: number;
  /**
   * 途经卸货地列表(列表查询)
   */
  ViaList: string;
  /**
   * 途经卸货地列表(前端显示)
   */
  viaAddressList: Array<string>;
  /**
   * 附件备注说明
   */
  attachmentRemarks: string;
  /**
   * 吨位范围
   */
  tonnageRange: string;
  /**
   * 审核通过时间
   */
  auditedTime: string;
  /**
   * 回单状态
   */
  receiptStatus: string;
  /**
   * 回单状态枚举
   */
  receiptStatusEnum: string;
  /**
   * 回单签收时间
   */
  receiptTime: string;
  /**
 * 道路运输许可证号
 */
  permitNumber: string;
  /**
   * 所属辖区省（枚举）
   */
  countrySubdivisionProvinceCode: string;
  /**
 * 所属辖区市（枚举）
 */
  countrySubdivisionCityCode: string;
  /**
 * 所属辖区区（枚举）
 */
  countrySubdivisionCountryCode: string;
  /**
* 所属辖区省（str）
*/
  countrySubdivisionProvince: string;
  /**
 * 所属辖区市（str）
 */
  countrySubdivisionCity: string;
  /**
 * 所属辖区区（str）
 */
  countrySubdivisionCountry: string;
  /**
   * 道路运输证字号
   */
  roadTransportCertificateNumber: string;

}

/**
 * 订单子单列表——发货单管理子单
 */
interface invoiceManagementOrderChild {
  /**
   * 编号
   */
  id: string;
  /**
   * 回单附件
   */
  receiptAttachments: Array<AddCarAttachmentDetail>;
  /**
   * 应收信息列表
   */
  receivableList: Array<invoiceManagementReceivable>;
  /**
   * 途经卸货地列表(列表查询)
   */
  viaList: string;
  /**
   * 发货地省
   */
  shipProvinceStr: string;
  /**
   * 发货地省编号
   */
  shipProvince: string;
  /**
   * 发货地市
   */
  shipCityStr: string;
  /**
   * 发货地市编号
   */
  shipCity: string;
  /**
   * 发货地区
   */
  shipAreaStr: string;
  /**
   * 发货地区编号
   */
  shipArea: string;
  /**
   * 发货地详细地址
   */
  shipAddress: string;
  /**
   * 途经卸货地列表
   */
  viaAddressList: Array<string>;
  /**
   * 送货地省
   */
  deliverProvinceStr: string;
  /**
   * 送货地省编号
   */
  deliverProvince: string;
  /**
   * 送货地市
   */
  deliverCityStr: string;
  /**
   * 送货地市编号
   */
  deliveryCity: string;
  /**
   * 送货地区
   */
  deliverAreaStr: string;
  /**
   * 送货地区编号
   */
  deliverArea: string;
  /**
   * 送货地详细地址
   */
  deliverAddress: string;
  /**
   * 发货时间
   */
  shipTime: string;
  /**
   * 到货时间
   */
  arriveTime: string;
  /**
   * 里程数
   */
  mileage: number;
  /**
   * 货物类型编号
   */
  goodsTypeId: string;
  /**
   * 货品类别
   */
  goodsType: string;
  /**
   * 货物编号
   */
  goodsId: string;
  /**
   * 货物名称
   */
  goodsName: string;
  /**
   * 货物数量
   */
  goodsNum: number;
  /**
   * 货物数量单位
   */
  goodsNumUnit: string;
  /**
   * 货品数量单位枚举
   */
  goodsNumUnitEnum: string;
  /**
   * 货物数量2
   */
  goodsNumTwo: string;
  /**
   * 货物数量2单位
   */
  goodsNumUnitTwo: string;
  /**
   * 货物数量2单位枚举
   */
  goodsNumUnitTwoEnum: string;
  /**
   * 	吨位范围
   */
  tonRange: string;
  /**
   * 应收单价
   */
  receivablePrice: number;
  /**
   * 应收单价单位
   */
  receivablePriceUnit: string;
  /**
   * 应收总价
   */
  receivableTotal: number;
  /**
   * 结算单位编号
   */
  settleId: string;
  /**
   * 结算方式
   */
  settleType: string;
  /**
   * 结算方式枚举
   */
  settleTypeEnum: string;
  /**
   * 含税
   */
  includeTax: string;
  /**
   * 含税枚举
   */
  includeTaxEnum: string;
  /**
   * 应收说明
   */
  receivableRemarks: string;
  /**
   * 结算单位
   */
  reckoner: string;
  /**
   * 工程编号
   */
  projectId: string;
  /**
   * 工程代号
   */
  projectCode: string;
  /**
   * 工程名称
   */
  projectName: string;
  /**
   * 发货单号
   */
  shipOrderId: string;
  /**
   * 收货单位
   */
  takeGoodsCompany: string;
  /**
   * 收货人
   */
  consignee: string;
  /**
   * 收货人号码
   */
  consigneePhone: string;
  /**
   * 工程总量
   */
  projectTotal: string;
  /**
   * 工程总量单位
   */
  projectTotalUnit: string
}


/**
 * 应收信息列表
 */
interface invoiceManagementReceivable {
  /**
   * 编号
   */
  id: string;
  /**
   * 可识别应收编号
   */
  receivableCode: string;
  /**
   * 途径卸货地列表(详情)
   */
  viaAddressList: Array<string>;
  /**
   * 途经卸货地列表(列表查询)
   */
  viaList: string;
  /**
   * 目的地省
   */
  destinationProvince: string;
  /**
   * 目的地市
   */
  destinationCity: string;
  /**
   * 目的地区
   */
  destinationCounty: string;
  /**
   * 	目的地详情
   */
  destinationDetails: string;
  /**
   * 起始地省
   */
  originProvince: string;
  /**
   * 起始地市
   */
  originCity: string;
  /**
   * 起始地区
   */
  originCounty: string;
  /**
   * 起始地详情
   */
  originDetails: string;
  /**
   * 发货时间
   */
  deliveryTime: string;
  /**
   * 到货时间
   */
  arrivalTime: string;
  /**
   * 货物名称
   */
  goodsName: string;
  /**
   * 货物类型名称
   */
  goodsTypeName: string;
  /**
   * 货物数量
   */
  quantityOfGoods: string;
  /**
   * 货物数量单位
   */
  goodsUnit: string;
  /**
   * 货物数量单位枚举
   */
  goodsUnitEnum: string;
  /**
   * 货物数量2
   */
  quantityOfGoodsTwo: number;
  /**
   * 货物数量单位2
   */
  goodsUnitTwo: string;
  /**
   * 货物数量单位2枚举
   */
  GoodsUnitTwoEnum: string;
  /**
   * 里程数
   */
  mileage: number;
  /**
   * 申请应收
   */
  applyReceivable: number;
  /**
   * 结算单位
   */
  settle: string;
  /**
   * 费用类型(字符串)
   */
  feeTypeStr: string;
  /**
   * 结算方式(字符串)
   */
  settlementTypeStr: string;
  /**
   * 应收说明
   */
  receivableRemark: string;
  /**
   * 含税(字符串)
   */
  includeTaxStr: string;
  /**
   * 结算状态
   */
  settleStatus: string;
  /**
   * 吨位范围
   */
  tonnageRange: string;
  /**
   * 申请应收(列表显示)
   */
  applyReceivableStr: string
}


/**
 * 发货单管理详情
 */
interface invoiceManagement {
  /**
   * 编号
   */
  id: string;
  /**
   * 预付款
   */
  advancePaymentList: Array<advancePaymentVM>;
  /**
   * 银行卡编号
   */
  bankId: string;
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
   * 车牌号
   */
  carCode: string;
  /**
   * 车辆编号
   */
  carId: string;
  /**
   * 车长
   */
  carLength: string;
  /**
   * 车长枚举值
   */
  carLengthEnum: string;
  /**
   * 承运商编号
   */
  carrierId: string;
  /**
   * 承运商名称
   */
  carrier: string;
  /**
   * 承运商号码
   */
  carrierPhone: string;
  /**
   * 承运商类型
   */
  carrierType: string;
  /**
   * 承运商类型枚举值
   */
  carrierTypeEnum: string;
  /**
   * 车型
   */
  vehicleType: string;
  /**
   * 车型枚举值
   */
  vehicleTypeEnum: string;
  /**
   * 合同信息
   */
  contract: invoiceManagementContract;
  /**
   * 驾驶员姓名
   */
  driver: string;
  /**
   * 驾驶员号码
   */
  driverPhone: string;
  /**
   * 费用列表
   */
  feeList: Array<invoiceManagementFee>;
  /**
   * 订单总单列表
   */
  orderList: Array<invoiceManagementOrder>;
  /**
   * 应付单价
   */
  payablePrice: number;
  /**
   * 应付单价单位
   */
  payablePriceUnit: string;
  /**
   * 应付单价单位枚举
   */
  payablePriceUnitEnum: string;
  /**
   * 应付单价说明
   */
  payableSummary: string;
  // /**
  //  * 回单款账户编号
  //  */
  // receiptBankId:string;
  // /**
  //  * 回单款开户银行
  //  */
  // receiptBankName:string;
  // /**
  //  * 回单款银行卡号
  //  */
  // receiptBankCode:string;
  // /**
  //  * 回单款持卡人
  //  */
  // receiptHolder:string;
  /**
   * 回单款
   */
  receiptPrice: number;
  /**
   * 回单款付款方式
   */
  receiptPriceUnit: string;
  /**
   * 回单款付款方式枚举
   */
  receiptPriceUnitEnum: string;
  /**
   * 承运单备注
   */
  remarks: string;
  /**
   * 承运单附件
   */
  carrierOrderAttachments: Array<AddCarAttachmentDetail>
  /** 
   * 所属辖区Code
  */
  countrySubdivisionCode: string;
  /** 
   * 所属辖区
  */
  countrySubdivisionProvince: string;
  /** 
   * 所属辖区
  */
  countrySubdivisionCity: string;
  /** 
   * 所属辖区
  */
  countrySubdivisionCountry: string;
  /** 
     * 道路运输许可证号
    */
  permitNumber: string;
  /** 
   * 所属辖区(省)
  */
  countrySubdivisionProvinceCode: string;
  /** 
   * 所属辖区(市)
  */
  countrySubdivisionCityCode: string;
  /** 
   * 所属辖区(区)
  */
  countrySubdivisionCountryCode: string;
  /** 
   * 道路运输证字号
  */
  roadTransportCertificateNumber: string;
}

/**
 * 预付款
 */
interface advancePaymentVM {
  /**
   * 预付款
   */
  advancePrice: string;
  /**
   * 预付款付款方式
   */
  advancePriceType: string;
  /**
   * 预付款付款方式（真实名称）
   */
  advancePriceTypeStr: string
}

/**
 * 发货单管理合同
 */
interface invoiceManagementContract {
  /**
   * 编号
   */
  id: string;
  /**
   * 收货人
   */
  consignee: string;
  /**
   * 收货人号码
   */
  consigneePhone: string;
  /**
   * 备用号码
   */
  altermatePhone: string;
  /**
   * 辅助工具
   */
  auxiliaryTool: string;
  /**
   * 合同编号
   */
  contractNumber: string;
  /**
   * 合同状态
   */
  contractStatus: string;
  /**
   * 驾驶证号
   */
  driverLicenseNumber: string;
  /**
   * 发动机号
   */
  engineNumber: string;
  /**
   * 车架号
   */
  frameNumber: string;
  /**
   * 合同货物数量单位
   */
  goodsUnit: string;
  /**
   * 合同货物数量单位枚举
   */
  goodsUnitEnum: string;
  /**
   * 油卡卡号
   */
  oilCardNumber: string;
  /**
   * 油卡状态
   */
  oilCardStatus: string;
  /**
   * 油卡状态枚举
   */
  oilCardStatusEnum: string;
  /**
   * 合同货物数量
   */
  quantityOfGoods: number;
  /**
   * 挂车车架号
   */
  trailerFrameNumber: string;
  /**
   * 挂车号
   */
  trailerNumber: string;
  /**
   * 合同日期
   */
  contractTime: string;
  /**
   * 运费总价
   */
  totalPrice:number;
  /**
   * 电子合同编号
   */
  electronicContractNumber: string;
  /**
   * 电子合同状态
   */
  electronicContractStatus: string;
  /**
   * 补充协议合同编号
   */
  agreementContractNumber: string;
  /**
   * 补充协议合同状态
   */
  agreementContractStatus: string;
  /**
   * 送货单号
   */
  deliveryNumber:string;
}

/**
 * 发货单管理应付
 */
interface invoiceManagementFee {
  /**
   * 编号
   */
  id: string;
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
  /**
   * 可识别费用编号
   */
  feeCode: string;
  /**
   * 应付结算总单可识别编号
   */
  feeSettleBillCode: string;
  /**
   * 费用审核人姓名
   */
  auditedUserName: string;
  /**
   * 费用审核时间
   */
  auditedTime: string;
  /**
   * 支付时间
   */
  payTime: string;
  /**
   * 持卡人
   */
  holder: string;
  /**
   * 银行卡号
   */
  bankCode: string;
  /**
   * 开户银行
   */
  openBank: string
}
/**
 * 附件
 */
interface attachmentList{
  attachmentId:string;
  attachmentName:string;
  attachmentPath:string;
  attachmentTag:string;
}

/**
 * 发货单管理订单
 */
interface invoiceManagementOrder {
  /**
   * 订单编号
   */
  id: string;
  /**
   * 可识别的订单编号
   */
  orderId: string;
  /**
   * 下单时间
   */
  creationTime: string;
  /**
   * 订单附件
   */
  orderAttachments: Array<AddCarAttachmentDetail>;
  /**
   * 订单子单列表
   */
  childList: Array<invoiceManagementOrderChild>;
  /**
   * 所需车长
   */
  carLength: string;
  /**
   * 承运方式
   */
  carriageWay: string;
  /**
   * 车型
   */
  vehicleType: string;
  /**
   * 装车效果
   */
  loadingEffect: string;
  /**
   * 客户单位编号
   */
  clientId: string;
  /**
   * 客户单位名称
   */
  clientName: string;
  /**
   * 发货内容
   */
  content: string;
  /**
   * 客服专员编号
   */
  customerServiceId: number;
  /**
   * 客服专员名称
   */
  customerServiceName: string;
  /**
   * 调度专员编号
   */
  dispatcherId: number;
  /**
   * 调度专员名称
   */
  dispatcherName: string;
  /**
   * 调度专员号码
   */
  dispatcherPhoneNumber: string;
  /**
   * 计划专员名称
   */
  plannerName: string;
  /**
   * 商务专员名称
   */
  businessAffairsName: string;
  /**
   * 发货计划人
   */
  consignorName: string;
  /**
   * 发货计划人号码
   */
  consignorPhone: string;
  /**
   * 订单备注
   */
  remarks: string;
  /**
   * 规定回复时间（分钟）
   */
  responseTime: string;
  /**
   * 应收信息列表
   */
  receivableList: Array<invoiceManagementReceivable>;
  /**
   * 订单状态
   */
  status: string;
  /**
   * 发货时间
   */
  deliveryTime: string;
  /**
   * 到货时间
   */
  arrivalTime: string;
  /**
   * 实际发货时间
   */
  realDeliveryTime: string;
  /**
   * 实际到货时间
   */
  realArrivalTime: string;
  /**
   * 货物编号
   */
  goodsId: string;
  /**
   * 货物名称
   */
  goodsName: string;
  /**
   * 货物类型编号
   */
  goodsTypeId: string;
  /**
   * 货物类型名称
   */
  goodsTypeName: string;
  /**
   * 实际货物数量
   */
  realQuantityOfGoods: number;
  /**
   *货品数量单位
   */
  goodsUnit: string;
  /**
   * 货物数量单位枚举
   */
  goodsUnitEnum: string;
  /**
  *货物数量2
  */
  quantityOfGoodsTwo: number;
  /**
  *货物数量2单位
  */
  goodsUnitTwo: string;
  /**
   * 货物数量2单位枚举
   */
  goodsUnitTwoEnum: string;
  /**
   * 里程数
   */
  mileage: number;
  /**
   * 目的地省
   */
  destinationProvinceStr: string;
  /**
   * 目的地省编号
   */
  destinationProvince: string;
  /**
   * 	目的地市
   */
  destinationCityStr: string;
  /**
   * 目的地市编号
   */
  destinationCity: string;
  /**
   * 目的地区
   */
  destinationCountyStr: string;
  /**
   * 目的地编号
   */
  destinationCounty: string;
  /**
   * 目的地详情
   */
  destinationDetails: string;
  /**
   * 起始地省
   */
  originProvinceStr: string;
  /**
   * 起始地省编号
   */
  originProvince: string;
  /**
   * 起始地市
   */
  originCityStr: string;
  /**
   * 起始地市编号
   */
  originCity: string;
  /**
   * 起始地区
   */
  originCountyStr: string;
  /**
   * 起始地区编号
   */
  originCounty: string;
  /**
   * 起始地详情
   */
  originDetails: string;
  /**
   * 目的地经度
   */
  destinationLongitude: number;
  /**
   * 起始地经度
   */
  originLongitude: number;
  /**
   * 目的地纬度
   */
  destinationLatitude: number;
  /**
   * 起始地纬度
   */
  originLatitude: number;
  /**
   * 	途经卸货地列表(列表查询)
   */
  viaList: string;
  /**
   * 途经卸货地列表(前端显示)
   */
  viaAddressList: Array<string>;
  /**
   * 附件备注说明
   */
  attachmentRemarks: string;
  /**
   * 吨位范围
   */
  tonnageRange: string;
  /**
   * 审核通过时间
   */
  auditedTime: string;
  /**
   * 回单状态
   */
  receiptStatus: string;
  /**
   * 回单状态枚举
   */
  receiptStatusEnum: string;
  /**
   * 回单签收时间
   */
  receiptTime: string
}
/**
 * 发货单管理车辆附件
 */
interface invoiceManagementAttachmentList {
  carrierOrderAttachments: attachmentList[];
}
/**
 * 同步车厂返回参数
 */
interface carAttachment {
  /**
   * 承运单编号
   */
  id: string;
  /**
   * 车辆编号
   */
  carid: string;
  /**
   * 附件列表
   */
  attachmentList: Array<AddCarAttachmentDetail>;
}
/**
 * 电子合同返回参数
 */
interface EContractDetailVM {
  /**
   * 合同图片集合
   */
  imgList: Array<any>;
}
/**
 * 电子合同--状态返回参数
 */
interface EContractsVM{
  /**
   * 合同Id
   */
  contractId:string;
  /**
   * 电子合同编号
   */
  electronicContractNumber:string;
  /**
   * 电子合同状态
   */
  electronicContractStatus:string;
  /**
   * 补充协议合同编号
   */
  agreementContractNumber:string;
  /**
   * 补充协议合同状态
   */
  agreementContractStatus:string;

}

//result
/**
*订单服务
*/
interface orderService {
  /**
  *获取承运单列表
  * v1.0
  * @param orderby 排序字段 枚举
  * @param asc 是否升序
  * @param orderId 订单编号（单个）
  * @param clientName 客户单位
  * @param route 线路地址
  * @param shipStartTime 发货开始时间
  * @param shipEndTime 发货结束时间
  * @param status 订单状态
  * @param placeOrderStartTime 下单开始时间
  * @param placeOrderEndTime 下单结束时间
  * @param shipAddress 发货地址
  * @param deliverAddress 送货地址
  * @param carCode 承运车牌号
  * @param contractNum 合同号
  * @param contractStatus 合同状态
  * @param receiptPriceStatus 回单状态
  * @param oilCardStatus 油卡状态
  * @param customerServiceOfficerId 客服专员
  * @param tempCustomerServiceOfficerId 临时客服专员
  * @param dispatchOfficerId 调度专员
  * @param carLength 车长
  * @param carrierName 承运商名称
  * @param driver 驾驶员名称
  * @param skip 跳过项数
  * @param count 获取项数
  */
  carryOrderList(orderby: string, asc: boolean, orderId: string, clientName: string, route: string, shipStartTime: string, shipEndTime: string,
    status: string, placeOrderStartTime: string, placeOrderEndTime: string, shipAddress: string, deliverAddress: string, carCode: string, contractNum: string,
    contractStatus: string, receiptPriceStatus: string, oilCardStatus: string, customerServiceOfficerId: string, tempCustomerServiceOfficerId: string, dispatchOfficerId: string,
    carLength: string, carrierName: string, driver: string, oilCardNumber: string, driverPhone: string, skip: number, count: number): Promise<ListResponse<carryOrderListResponse>>;

  /**
  *获取订单子单列表
  * v1.0
  *@param id 订单编号
  */
  orderChildList(id: string): Promise<ListResponse<orderChildListResponse>>;

  /**
  *获取费用列表
  * v1.0
  *@param id 承运单编号
  */
  feeList(id: string): Promise<ListResponse<feeListResponse>>;

  /**
  *获取应收登记列表
  * v1.0
  *@param id 订单编号
  */
  receivableList(id: string): Promise<ListResponse<receivableListResponse>>;

  /**
  *获取订单详情
  * v1.0
  *@param id 订单编号
  */
  detail(id: string): Promise<detailResponse>;

  /**
  *获取订单子单详情
  * v1.0
  *@param id 子单编号
  */
  orderChild(id: string): Promise<orderChildResponse>;

  /**
  *获取承运单详情
  * v1.0
  *@param id 承运单编号
  */
  carryOrder(id: string): Promise<carryOrderResponse>;

  /**
   * 发货单管理详情
   */
  invoiceManagementDetail(id: string): Promise<invoiceManagement>;

  /**
   * 订单管理详情
   */
  orderManagentDetail(id: string): Promise<orderManagementResponse>;

  /**
  * 电子合同详情
  */
  EContractDetail(id: string): Promise<EContractDetailVM>;

  /**
  *获取电子合同--状态列表
  * v1.0
  *@param id 承运单id
  */
  getEContract(id: string): Promise<EContractsVM>;

  /**
   * 创建电子合同
   * @param id 承运单id
   */
  AddEContract(id: string): Promise<BaseResponse>;

  /**
     * 创建添加补充协议电子合同
     * @param id 承运单id
     */
  AddAgreementEContract(id: string): Promise<BaseResponse>;

  /**
  *添加评价
  * v1.0
  * @param carrierOrderId 承运单id
  * @param contractNumber 合同号
  * @param carCode 车牌号
  * @param driver 驾驶员
  * @param driverPhone 驾驶员号码
  * @param credibility 诚信度
  * @param timeliness 时效性
  * @param attitude 服务态度
  * @param freight 运输价格
  * @param average 总分
  * @param content 评价内容
  * @param isPraise 是否好评
  * @param appraiserId 评价人编号
  * @param appraiser 评论人
  */
  addEvaluate(carrierOrderId: string, contractNumber: string, carCode: string, driver: string, driverPhone: string, credibility: string, timeliness: number, attitude: number, freight: number, average: number, content: string, isPraise: boolean, appraiserId: string, appraiser: string): Promise<BaseResponse>;

  /**
  *添加承运单
  * v1.0
  * @param orderList 订单Id列表
  * @param carrierId 承运商编号
  * @param carrierName 承运商
  * @param carrierPhone 承运商号码
  * @param carrierType 承运商类型
  * @param carId 车辆编号
  * @param carCode 车牌号
  * @param driverPhone 驾驶员号码
  * @param driverName 驾驶员名称
  * @param carLength 承运车辆车长
  * @param carType 承运车辆车型
  * @param carrierReceivablePirce 承运单应付单价
  * @param carrierReceivablePirceUnit 承运单应付单价单位
  * @param carrierReceivableRemarks 承运单应付说明
  * @param advancePaymentList 预付款
  * @param receiptPrice 回单款
  * @param receiptPriceType 回单款付款方式
  * @param holder 持卡人
  * @param bankId 账户编号
  * @param bankCode 银行卡号
  * @param openBank 开户银行
  * @param receiptPriceHolder 回单款持卡人姓名
  * @param receiptPriceBankId 回单款银行编号
  * @param receiptPriceBankCode 回单款银行卡号
  * @param receiptPriceOpenBank 回单款开户银行
  * @param carryOrderRemarks 承运单备注
  * @param attachment 附件列表(名称+路径)
  * @param attachmentDetails 附件备注
  * @param locationStatus 定位状态
  */
  addCarryOrder(orderList: Array<string>, carrierId: string, carrierName: string, carrierPhone: string, carrierType: string, carId: string, carCode: string, driverPhone: string, driverName: string, carLength: string, carType: string, carrierReceivablePirce: number, carrierReceivablePirceUnit: string,
    carrierReceivableRemarks: string, advancePaymentList: Array<advancePaymentList>, receiptPrice: number, receiptPriceType: string, holder: string, bankId: string, bankCode: string, openBank: string,
    carryOrderRemarks: string, attachment: Array<any>, attachmentDetails: string, locationStatus: boolean, permitNumber: string, countrySubdivisionProvinceCode: string, countrySubdivisionCityCode: string, countrySubdivisionCountryCode: string, roadTransportCertificateNumber: string): Promise<BaseResponse>;

  /**
  *添加合同
  * v1.0
  * @param carrierOrderId 承运单编号
  * @param contractId 合同编号
  * @param contractNumber 合同短号
  * @param contractGoodsNum 合同货物数量
  * @param contractGoodsNumUnit 合同货物数量单位
  * @param contractTime 合同日期
  * @param consignee 收货人
  * @param consigneePhone 收货人号码
  * @param oilCardStatus 油卡状态
  * @param oilCarNum 油卡卡号
  * @param auxiliaryTool 辅助工具
  * @param engineNumber 发动机号
  * @param frameNumber 车架号
  * @param trailerNumber 挂车号
  * @param trailerFrameNumber 挂车车架号
  * @param driverLicenseNumber 驾驶证
  * @param altermatePhone 备用电话
  * @param attachmentList 附件列表
  * @param remarks 备注
  * @param receiptState 回单状态集合
  * @param isAutoCreate 是否自动生成合同号
  * @param deliveryNumber 送货单号
  * @param totalPrice 运费总价
  */
  addContract(carrierOrderId: string, contractId: string, contractNumber: string, contractGoodsNum: number, contractGoodsNumUnit: string, contractTime: string, consignee: string, consigneePhone: string, oilCardStatus: string, oilCarNum: string, auxiliaryTool: string, engineNumber: string,
    frameNumber: string, trailerNumber: string, trailerFrameNumber: string, driverLicenseNumber: string, altermatePhone: string, attachmentList: Array<any>, remarks: string, receiptState: Array<any>, isAutoCreate: boolean, deliveryNumber: string, totalPrice: number
  ): Promise<BaseResponse>;

  /**
  *添加应收登记
  * v1.0
  * @param orderChildId 子单编号
  * @param orderId 订单编号
  * @param goodsId 货物编号
  * @param goodsName 货物名称
  * @param goodsTypeId 货物类型编号
  * @param goodsTypeName 货物类型名称
  * @param quantityOfGoods 货物数量
  * @param goodsUnit 货物数量单位
  * @param quantityOfGoodsTwo 货物数量2
  * @param goodsUnitTwo 货物数量2单位
  * @param tonnageRange 吨位范围
  * @param receivableSummary 应收说明
  * @param includeTax 含税
  * @param settleId 结算单位编号
  * @param settle 结算单位
  * @param settlementType 结算方式
  * @param feeType 费用类型
  * @param applyReceivable 申请应收
  */
  addReceivable(orderChildId: string, orderId: string, goodsId: string, goodsName: string, goodsTypeId: string, goodsTypeName: string, quantityOfGoods: number, goodsUnit: string, quantityOfGoodsTwo: number, goodsUnitTwo: string,
    tonnageRange: string, receivableSummary: string, includeTax: string, settleId: string, settle: string, settlementType: string, feeType: string, applyReceivable: number): Promise<BaseResponse>;

  /**
  *添加费用申领
  * v1.0
  * @param carrierOrderId 承运单编号
  * @param feeType 费用类型
  * @param applyFee 申请金额
  * @param confirmApplyFee 确认申请金额
  * @param payReson 支出原因
  * @param carrier 承运商
  * @param carrierId 承运商编号
  * @param contractId 合同编号
  * @param contractNumber 合同短号
  * @param paymentMethod 费用支付方式
  * @param applicant 申领人
  * @param applyToken 申领token
  * @param holder 持卡人
  * @param bankCode 银行卡号
  * @param openBank 开户银行
  */
  addFee(carrierOrderId: string, feeType: string, applyFee: number, confirmApplyFee: string, payReson: string, carrier: string, carrierId: string, contractId: string, contractNumber: string, paymentMethod: string, applicant: string, applyToken: string, holder: string, bankCode: string, openBank: string): Promise<BaseResponse>;

  /**
  *订单编辑重下
  * v1.0
  * @param id 订单编号
  * @param orderId 订单编号
  * @param urgency 紧急程度
  * @param urgencyUnit 紧急程度单位
  * @param businessOfficerId 商务专员编号
  * @param customerServiceOfficerId 客服专员编号
  * @param dispatchOfficerId 调度专员编号
  * @param clientId 客户编号
  * @param clientCornet 客户单位短号
  * @param consignorId 发货计划人编号
  * @param shipPriceContent 发货内容
  * @param carType 所需车型
  * @param carLength 所需车长
  * @param carriageWay 承运方式
  * @param loadingResult 装车效果
  * @param attachment 附件列表(名称+路径)
  * @param remarks 订单备注
  * @param orderChildList 订单子单
  * @param viaList 途经卸货地列表
  * @param shipProvince 发货地省编号
  * @param shipCity 发货地市编号
  * @param shipArea 发货地区编号
  * @param shipDetail 发货地详情
  * @param shipAddress 发货地详细地址
  * @param deliverProvince 送货地省编号
  * @param deliverCity 送货地市编号
  * @param deliverArea 送货地区编号
  * @param deliverDetail 送货地址详情
  * @param deliverAddress 送货地详细地址
  * @param shipTime 发货时间
  * @param arriveTime 到货时间
  * @param mileage 里程数
  * @param goodsTypeId 货品类型编号
  * @param goodsType 货品类别
  * @param goodsId 货品编号
  * @param goodsName 货品名称
  * @param goodsNum 货品数量
  * @param goodsNumUnit 货品数量单位
  * @param goodsNumTwo 货物数量2
  * @param goodsNumUnitTwo 货物数量2单位
  * @param tonRange 吨位范围
  * @param dispatcherName 调度专员名称
  * @param dispatcherPhone 调度专员号码
  * @param businessAffairsName 商务专员名称
  * @param customerServiceName 客服专员名称
  * @param plannerName 计划专员名称
  * @param clientName 客户经理名称
  */
  edit(id: string, orderId: string, urgency: number, urgencyUnit: string, businessOfficerId: string, customerServiceOfficerId: string, dispatchOfficerId: string, clientId: string, consignorId: string, shipPriceContent: string,
    carType: string, carLength: string, carriageWay: string, loadingResult: string, attachment: Array<any>, remarks: string, orderChildList: Array<orderChildVM>, viaList: Array<address>, shipProvince: string, shipCity: string, shipArea: string, shipDetail: string,
    deliverProvince: string, deliverCity: string, deliverArea: string, deliverDetail: string, shipTime: string, arriveTime: string, mileage: number, goodsTypeId: string, goodsType: string, goodsId: string,
    goodsName: string, goodsNum: number, goodsNumUnit: string, goodsNumTwo: string, goodsNumUnitTwo: string, tonRange: string, dispatcherName: string, dispatcherPhone: string, businessAffairsName: string, customerServiceName: string, plannerName: string,
    clientName: string): Promise<BaseResponse>;


  /**
  *承运单编辑
  * v1.0
  *@param id 承运单编号
  *@param orderList 订单Id列表
  *@param carrierId 承运商编号
  *@param carrierName 承运商
  *@param carrierPhone 承运商号码
  *@param carrierType 承运商类型
  *@param carId 车辆编号
  *@param carCode 车牌号
  *@param driverPhone 驾驶员号码
  *@param driverName 驾驶员名称
  *@param carLength 承运车辆车长
  *@param carType 承运车辆车型
  *@param carrierReceivablePirce 承运单应付单价
  *@param carrierReceivablePirceUnit 承运单应付单价单位
  *@param carrierReceivableRemarks 承运单应付说明
  *@param advancePaymentList 预付款
  *@param receiptPrice 回单款
  *@param receiptPriceType 回单款付款方式
  *@param holder 持卡人
  *@param bankId 账户编号
  *@param bankCode 银行卡号
  *@param openBank 开户银行
  *@param carryOrderRemarks 承运单备注
  *@param attachment 附件列表(名称+路径)
  *@param attachmentDetails 附件备注
  *@param locationStatus  定位状态
  */
  editCarrierOrder(id: string, orderList: Array<string>, carrierId: string, carrierName: string, carrierPhone: string, carrierType: string, carId: string, carCode: string, driverPhone: string, driverName: string, carLength: string, carType: string,
    carrierReceivablePirce: number, carrierReceivablePirceUnit: string, carrierReceivableRemarks: string, advancePaymentList: Array<advancePaymentList>, receiptPrice: number, receiptPriceType: string, holder: string, bankId: string, bankCode: string, openBank: string,
    carryOrderRemarks: string, attachment: Array<any>, attachmentDetails: string, locationStatus: boolean, permitNumber: string, countrySubdivisionProvinceCode: string, countrySubdivisionCityCode: string, countrySubdivisionCountryCode: string, roadTransportCertificateNumber: string
  ): Promise<BaseResponse>;

  /**
  *编辑订单状态
  * v1.0
  *@param id 订单编号
  *@param remarks 订单备注
  *@param status 订单状态
  *@param deliveryTime 发货时间
  *@param arrivalTime 实际到货时间
  */
  editOrderStatus(id: string, remarks: string, status: string, deliveryTime: string, arrivalTime: string): Promise<BaseResponse>;

  /**
   * 修改电子合同状态
   * @param id 合同id(不是电子合同)
   * @param eContractType 	电子合同类型(承运合同1,补充协议2)
   * @param eContractStatus 电子合同状态(撤回6,发送2,司机签字4,客服签章5,司机退回3)
   */
  UpdateEContractStatus(id: string, eContractType: string, eContractStatus: string,carId:string): Promise<BaseResponse>;

  /**
  *编辑承运单状态
  *@param id 承运单编号
  *@param remarks 订单备注
  *@param status 订单状态
  *@param deliveryTime 发货时间
  *@param arrivalTime 实际到货时间
  */
  editOrderStatusByCarrierOrderId(id: string, remarks: string, status: string, deliveryTime: string, arrivalTime: string): Promise<BaseResponse>;

  /**
  *编辑费用
  * v1.0
  * @param id 费用编号
  * @param carrierOrderId 承运单编号
  * @param feeType 费用类型
  * @param applyFee 申请金额
  * @param confirmApplyFee 确认申请金额
  * @param payReson 支出原因
  * @param carrier 承运商
  * @param carrierId 承运商编号
  * @param contractId 合同编号
  * @param contractNumber 合同短号
  * @param paymentMethod 费用支付方式
  * @param applicant 申领人
  * @param applyToken 申领token
  * @param holder 持卡人
  * @param bankCode 银行卡号
  * @param openBank 开户银行
  */
  editFee(id: string, carrierOrderId: string, feeType: string, applyFee: number, confirmApplyFee: number, payReson: string, carrier: string, carrierId: string, contractId: string, contractNumber: string, paymentMethod: string, applicant: string, applyToken: string, holder: string, bankCode: string, openBank: string): Promise<BaseResponse>;

  /**
  *编辑合同
  * v1.0
  *@param id 合同编号
  *@param carrierOrderId 承运单编号
  *@param contractId  合同编号
  *@param contractNumber 合同短号
  *@param contractGoodsNum 合同货物数量
  *@param contractGoodsNumUnit 合同货物数量单位
  *@param contractTime 合同日期
  *@param consignee 收货人
  *@param consigneePhone 收货人号码
  *@param oilCardStatus 油卡状态
  *@param oilCarNum 油卡卡号
  *@param auxiliaryTool 辅助工具
  *@param engineNumber 发动机号
  *@param frameNumber 车架号
  *@param trailerNumber 挂车号
  *@param trailerFrameNumber 挂车车架号
  *@param driverLicenseNumber 驾驶证
  *@param altermatePhone 备用电话
  *@param attachmentList 附件列表
  *@param remarks 备注
  *@param receiptState 回单状态集合（key为订单ID,value为回单状态的枚举）
  *@param isAutoCreate 是否自动生成合同号
  *@param totalPrice 运费总价
  *@param deliveryNumber 送货单号
  */
  editContract(id: string, carrierOrderId: string, contractId: string, contractNumber: string, contractGoodsNum: number, contractGoodsNumUnit: string, contractTime: string, consignee: string, consigneePhone: string,
    oilCardStatus: string, oilCarNum: string, auxiliaryTool: string, engineNumber: string, frameNumber: string, trailerNumber: string, trailerFrameNumber: string, driverLicenseNumber: string, altermatePhone: string,
    attachmentList: Array<any>, remarks: string, receiptState: Array<any>, isAutoCreate: boolean, deliveryNumber: string, totalPrice: number): Promise<BaseResponse>;

  /**
  *编辑应收登记
  * v1.0
  *@param id 应收编号
  *@param orderChildId 子单编号
  *@param orderId 订单编号
  *@param goodsId 货物编号
  *@param goodsName 货物名称
  *@param goodsTypeId 货物类型编号
  *@param goodsTypeName 货物类型名称
  *@param quantityOfGoods 货物数量
  *@param goodsUnit 货物数量单位
  *@param quantityOfGoodsTwo 货物数量2
  *@param goodsUnitTwo 货物数量2单位
  *@param tonnageRange 吨位范围
  *@param receivableSummary 应收说明
  *@param includeTax 含税
  *@param settleId 结算单位编号
  *@param settle 结算单位
  *@param settlementType 结算方式
  *@param feeType 费用类型
  *@param applyReceivable 申请应收
  */
  editReceivable(id: string, orderChildId: string, orderId: string, goodsId: string, goodsName: string, goodsTypeId: string, goodsTypeName: string, quantityOfGoods: number, goodsUnit: string, quantityOfGoodsTwo: number,
    goodsUnitTwo: string, tonnageRange: string, receivableSummary: string, includeTax: string, settleId: string, settle: string, settlementType: string, feeType: string, applyReceivable: number): Promise<BaseResponse>;

  /**
  *变换客服/调度专员
  * v1.0
  *@param id 订单编号
  *@param dispatchOfficerId 调度专员编号
  *@param dispatchOfficerName 调度专员名称
  *@param dispatchOfficerPhone 调度专员号码
  *@param customerServiceOfficerId 客服专员编号
  *@param customerServiceOfficer 客服专员
  */
  editOfficer(id: string, dispatchOfficerId: string, dispatchOfficerName: string, dispatchOfficerPhone: string, customerServiceOfficerId: string, customerServiceOfficer: string): Promise<BaseResponse>;

  /**
  *删除订单
  * v1.0
  *@param id 订单编号
  */
  delete(id: string): Promise<BaseResponse>;

  /**
  *删除费用申领
  * v1.0
  *@param id 费用id
  *@param carrierOrderId 承运单id
  */
  deleteFee(id: string, carrierOrderId: string): Promise<BaseResponse>;

  /**
  *删除承运单
  * v1.0
  *@param id 承运单id
  */
  deleteCarrierOrder(id: string): Promise<BaseResponse>;

  /**
  *通过订单删除应收登记
  * v1.0
  *@param id 订单编号
  *@param receivableId 应收编号
  */
  delReceivableByOrderId(id: string, receivableId: string): Promise<BaseResponse>;

  /**
  *通过子单删除应收
  * v1.0
  *@param id 订单编号
  *@param receivableId 应收编号
  *@param childId 子单
  */
  delReceivableByChildId(id: string, receivableId: string, childId: string): Promise<BaseResponse>;

  /**
  *修改是否确认应收
  * v1.0
  *@param id 订单编号（可用逗号隔开）
  *@param isCheckReceivable 是否确认应收
  */
  changeIsCheckReceivable(id: string, isCheckReceivable: boolean): Promise<BaseResponse>;

  /**
  *获取承运单报表列表
  * v1.0
  *@param orderby 排序枚举
  *@param asc 是否升序
  *@param contractNum 合同号
  *@param clientName 客户名称
  *@param shipAddress 发货地址
  *@param deliverAddress 送货地址
  *@param shipStartTime 发货开始时间
  *@param shipEndTime 发货结束时间
  *@param carrierName 承运商名称
  *@param driver 驾驶员
  *@param skip 跳过项
  *@param count 总项
  */
  reportCarrierOrderList(orderby: string, asc: boolean, contractNum: string, clientName: string, shipAddress: string, deliverAddress: string, shipStartTime: string, shipEndTime: string, carrierName: string, driver: string, skip: number, count: number): Promise<ListResponse<reportCarrierOrderListResponse>>;

  /**
  *客户经理退回派车
  * v1.0
  *@param id 承运单id
  */
  managerReturnDispatch(id: string): Promise<BaseResponse>;


  /**
  *获取订单列表
  * v1.0
  *@param orderby 排序枚举字段
  *@param asc 是否升序
  *@param orderId 订单编号集合（可逗号隔开）
  *@param clientName 客户单位
  *@param route 线路地址
  *@param shipStartTime 发货起始时间
  *@param shipEndTime 发货结束时间
  *@param status 订单状态集合（逗号分隔）
  *@param placeOrderStartTime 下单开始时间
  *@param placeOrderEndTime 下单结束时间
  *@param dispatchOfficerId 调度专员编号
  *@param shipAddress 发货地址
  *@param deliverAddress 送货地址
  *@param customerServiceId 客服专员编号
  *@param skip 跳过项数
  *@param count 获取项数
  */
  list(orderby: string, asc: boolean, orderId: string, clientName: string, route: string, shipStartTime: string, shipEndTime: string, status: string, placeOrderStartTime: string, placeOrderEndTime: string, dispatchOfficerId: string, shipAddress: string,
    deliverAddress: string, customerServiceId: string, skip: number, count: number): Promise<ListResponse<orderList>>;

  /**
  *添加订单
  * v1.0
  * @param orderId 订单编号
  * @param urgency 紧急程度
  * @param urgencyUnit 紧急程度单位
  * @param businessOfficerId 商务专员编号
  * @param customerServiceOfficerId 客服专员编号
  * @param dispatchOfficerId 调度专员编号
  * @param clientId 客户编号
  * @param clientCornet 客户单位短号
  * @param consignorId 发货计划人编号
  * @param shipPriceContent 发货内容
  * @param carType 所需车型
  * @param carLength 所需车长
  * @param carriageWay 承运方式
  * @param loadingResult 装车效果
  * @param attachment 附件列表(名称+路径)
  * @param remarks 订单备注
  * @param orderChildList 订单子单
  * @param viaList 途经卸货地列表
  * @param shipProvince 发货地省编号
  * @param shipCity 发货地市编号
  * @param shipArea 发货地区编号
  * @param shipDetail 发货地详情
  * @param shipAddress 发货地详细地址
  * @param deliverProvince 送货地省编号
  * @param deliverCity 送货地市编号
  * @param deliverArea 送货地区编号
  * @param deliverDetail 送货地址详情
  * @param deliverAddress 送货地详细地址
  * @param shipTime 发货时间
  * @param arriveTime 到货时间
  * @param mileage 里程数
  * @param goodsTypeId 货品类型编号
  * @param goodsType 货品类别
  * @param goodsId 货品编号
  * @param goodsName 货品名称
  * @param goodsNum 货品数量
  * @param goodsNumUnit 货品数量单位
  * @param goodsNumTwo 货物数量2
  * @param goodsNumUnitTwo 货物数量2单位
  * @param tonRange 吨位范围
  * @param dispatcherName 调度专员名称
  * @param dispatcherPhone 调度专员号码
  * @param businessAffairsName 商务专员名称
  * @param customerServiceName 客服专员名称
  * @param plannerName 计划专员名称
  * @param clientName 客户经理名称
  * @param contractNumber 客户单位合同编号
  * @param cspOrderId csp订单编号
  */
  add(orderId: string, urgency: number, urgencyUnit: string, businessOfficerId: string, customerServiceOfficerId: string, dispatchOfficerId: string, clientId: string, clientCornet: string, consignorId: string, shipPriceContent: string,
    carType: string, carLength: string, carriageWay: string, loadingResult: string, attachment: Array<attachmentList>, remarks: string, orderChildList: Array<orderChildVM>, viaList: Array<address>, shipProvince: string, shipCity: string, shipArea: string, shipDetail: string,
    deliverProvince: string, deliverCity: string, deliverArea: string, deliverDetail: string, shipTime: string, arriveTime: string, mileage: number, goodsTypeId: string, goodsType: string, goodsId: string,
    goodsName: string, goodsNum: number, goodsNumUnit: string, goodsNumTwo: string, goodsNumUnitTwo: string, tonRange: string, dispatcherName: string, dispatcherPhone: string, businessAffairsName: string, customerServiceName: string, plannerName: string,
    clientName: string, cspOrderId?: string, contractNumber?: string): Promise<BaseResponse>;

  /**
  *获取APP竞价列表
  * v1.0
  *@param 订单编号
  */
  quotation(id: string): Promise<ListResponse<quotationResponse>>;


  /**
   * 发货单管理详情
   */
  invoiceManagementDetail(id: string): Promise<invoiceManagement>;
  /**
   * 车辆附件
   * v1.0
   * @param id 车辆id
   */
  InvoiceManagementAttachment(id): Promise<invoiceManagementAttachmentList>;

  /**
   * 同步附件
   * v1.0
   * @param id 承运单编号
   * @param carid 车辆编号
   * @param AttachmentList 附件列表
   */
  synCarAttachment(id: string, carid: string, attachmentList: Array<AddCarAttachmentDetail>): Promise<ListResponse<carAttachment>>


  /**
  * 获取承运单数量
  * v1.0
  */
  carrierOrderCount(orderId: string, clientName: string, route: string, shipStartTime: string, shipEndTime: string,
    status: string, placeOrderStartTime: string, placeOrderEndTime: string, shipAddress: string, deliverAddress: string, carCode: string, contractNum: string,
    contractStatus: string, receiptPriceStatus: string, oilCardStatus: string, customerServiceOfficerId: string, tempCustomerServiceOfficerId: string, dispatchOfficerId: string,
    carLength: string, carrierName: string, driver: string, oilCardNumber: string, driverPhone: string): Promise<ListResponse<carryOrderListResponse>>;



}

export default orderService;



