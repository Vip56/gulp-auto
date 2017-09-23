import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 应收列表项
 */
interface FinanceReceivableListItemResponse {
  /**
    *标识符
    */
  id: string;

  /**
    *序号
    */
  index: number;

  /**
    *承运单主键
    */
  carrierOrderId: string;

  /**
    *订单主键
    */
  orderId: string;

  /**
    *订单子单主键
    */
  orderChildId: string;

  /**
    *货物类型编号
    */
  goodsTypeId: string;

  /**
    *货物类型名称
    */
  goodsTypeName: string;

  /**
    *货物名称
    */
  goodsName: string;

  /**
    *货物数量
    */
  quantityOfGoods: string;

  /**
    *货物数量
    */
  quantityOfGoodsStr: string;

  /**
    *货物数量单位
    */
  quantityOfGoodsUnit: string;

  /**
    *货物数量单位(枚举)
    */
  quantityOfGoodsUnitStr: string;

  /**
    *货物数量2
    */
  quantityOfGoodsTwo: string;

  /**
    *货物数量2
    */
  quantityOfGoodsTwoStr: string;

  /**
    *货物数量2单位
    */
  goodsUnitTwo: string;

  /**
    *吨位范围
    */
  tonnageRange: string;

  /**
    *应收单价
    */
  receivablePrice: string;

  /**
    *应收单价（价格）
    */
  receivablePriceStr: string;

  /**
    *应收单价单位
    */
  receivablePriceUnit: string;

  /**
    *应收单价单位()
    */
  receivablePriceUnitStr: string;

  /**
    *应收说明
    */
  receivableSummary: string;

  /**
    *应收总价
    */
  receivableTotalPrice: number;

  /**
    *申请应收
    */
  applyReceivable: number;

  /**
    *含税
    */
  includeTax: string;

  /**
    *结算方式
    */
  settlementType: string;

  /**
    *结算状态
    */
  settleStatus: string;

  /**
    *费用类型
    */
  feeType: string;

  /**
    *应收总单可识别应收编号
    */
  receivableSettleBillCode: string;

  /**
    *应收子单可识别应收编号
    */
  receivableCode: string;

  /**
    *合同编号
    */
  contractNumber: string;

  /**
    *回单状态
    */
  receiptStatus: string;

  /**
    *车牌号
    */
  carCode: string;

  /**
    *车长
    */
  carLength: string;

  /**
    *客户单位
    */
  client: string;

  /**
    *结算单位
    */
  settle: string;
  /**
   * 结算单位编号
   */
  settleId:string;
  /**
    *发货时间（订单预设发货时间）
    */
  realDeliveryTime: string;

  /**
    *起始地名称(发货地址)
    */
  originAddress: string;

  /**
    *目的地名称(送货地址)
    */
  destinationAddress: string;

  /**
    *中转地
    */
  viaAddressList: string;

  /**
    *是否独立添加
    */
  isIndependent: boolean;

  /**
    *开票状态
    */
  invoiceStatus: string;

  /**
    *订单状态
    */
  orderStatus: string;
}

/**
 * 应收结算总单详情
 */
interface ReceivableSettleBillDetailResponse extends BaseResponse {
  /**
  *可识别结算总单编号
  */
  billCode: string;
  /**
  *总金额
  */
  totalMoney: number;
  /**
  *应收说明
  */
  description: string;
  /**
  *开票状态
  */
  invoiceStatus: string;
  /**
  *开票时间
  */
  invoiceTime: string;
  /**
  *结算单位
  */
  settle: string;
  /**
  *结算人
  */
  reckoner: string;
  /**
  *结算时间
  */
  creationTime: string;
}

/**
 * 应收结算单列表
 */
interface ReceivableSettleBillListItemResponse {
  /**
  *标识符
  */
  id: string;
  /**
  *序号
  */
  index: number;
  /**
  *可识别结算总单编号
  */
  billCode: string;
  /**
  *总金额
  */
  totalMoney: number;
  /**
  *开票状态
  */
  invoiceStatus: string;
  /**
  *结算单位编号
  */
  settleId: string;
  /**
  *结算单位
  */
  settle: string;
  /**
  *结算时间
  */
  creationTime: string;
  /**
  *开票日期
  */
  invoiceTime: string;
  /**
  *结算人
  */
  reckoner: string;
}

/**
 * 收入列表项
 */
interface IncomeListItemResponse {
  /**
  *标识符
  */
  id: string;
  /**
  *序号
  */
  index: number;
  /**
  *可识别编号
  */
  incomeCode: string;
  /**
  *金额
  */
  amount: number;
  /**
  *说明
  */
  description: string;
  /**
  *结算单位
  */
  settle: string;
  /**
  *收款日期
  */
  receiptTime: string;
}

/**
 * 应收统计详情
 */
interface ReceivableStatisticsResponse extends BaseResponse {
  /**
  *已开票金额
  */
  alreadyInvoiceAmount: number;
  /**
  *不含税金额
  */
  excludingTaxAmount: number;
  /**
  *收入金额
  */
  incomeAmount: number;
  /**
  *未收金额
  */
  uncollectedAmount: number;
  /**
  *未结账金额
  */
  accountEnRouteAmount: number;
  /**
  *总余额
  */
  allBalance: number;
  /**
  *结算单位
  */
  settle: string;
}


/**
 * 获取应收总额
 */
interface SumreceivableResponse extends BaseResponse {
  /**
   *应收总额
   */
  totalReceivable: number
}

/**
 * 获取应收总额
 */
interface TotalReceivableResponse extends BaseResponse {
  /**
   *应收总额
   */
  totalReceivable: number
}


//result
interface receivableService {
  /**
    *获取应收总额
    * @param client  客户单位
    * @param settle  结算单位
    * @param settleid  结算单位编号
    * @param businessaffairsid  商务专员编号
    * @param starttime  发货起始时间
    * @param endtime  发货结束时间
    * @param carcode  车牌号
    * @param contractnumber  合同短号
    * @param receiptstatus  回单状态
    * @param settlestatuslist  结算状态集合
    * @param origin  发货地址
    * @param destination  目的地址
    * @param parentid  应收总单编号
    * @param isaccountenroute  是否为未结账应收
    * @param receivablecodes  应收编号集合（逗号分隔）
    * @param feeType  应收费用类型
    * @param isArrived  是否送达
    * @param receivableSettleBillCode  应收结算总单可识别编号(code)
    * @param orderStatus 订单状态
    * @param goodsName  货物名称
    */
  getTotalReceivable(client: string, settle: string, settleid: string, businessaffairsid: string, starttime: string, endtime: string, carcode: string, contractnumber: string, receiptstatus: string, settlestatuslist: string, origin: string, destination: string, parentid: string, isaccountenroute: boolean, receivablecodes: string, feeType: string, isArrived: boolean, receivableSettleBillCode: string, orderStatus: string, goodsName: string): Promise<TotalReceivableResponse>;

  /**
    *获取应收列表
    * @param orderby  排序字段枚举
    * @param asc  是否升序
    * @param client  客户单位
    * @param settle  结算单位
    * @param settleid  结算单位编号
    * @param businessaffairsid  商务专员编号
    * @param starttime  发货起始时间
    * @param endtime  发货结束时间
    * @param carcode  车牌号
    * @param contractnumber  合同短号
    * @param receiptstatus  回单状态
    * @param settlestatuslist  结算状态集合
    * @param origin  发货地址
    * @param destination  目的地址
    * @param parentid  应收总单编号
    * @param isaccountenroute  是否为未结账应收
    * @param receivablecodes  应收编号集合（逗号分隔）
    * @param feeType  应收费用类型
    * @param isArrived  是否送达
    * @param receivableSettleBillCode  应收结算总单可识别编号(code)
    * @param orderStatus 订单状态
    * @param goodsName  货物名称
    * @param skip  跳过项数
    * @param count  获取项数
    */
  receivablelist(orderby: string, asc: boolean, client: string, settle: string, settleid: string, businessaffairsid: string, starttime: string, endtime: string, carcode: string, contractnumber: string, receiptstatus: string, settlestatuslist: string, origin: string, destination: string, parentid: string, isaccountenroute: boolean, receivablecodes: string, feeType: string, isArrived: boolean, receivableSettleBillCode: string, orderStatus: string, goodsName: string, skip: number, count: number): Promise<ListResponse<FinanceReceivableListItemResponse>>

  /**
   * 获取应收列表总条数
   */
  receivablecount(client: string, settle: string, settleid: string, businessaffairsid: string, starttime: string, endtime: string, carcode: string, contractnumber: string, receiptstatus: string, settlestatuslist: string, origin: string, destination: string, parentid: string, isaccountenroute: boolean, receivablecodes: string, feeType: string, isArrived: boolean, receivableSettleBillCode: string, orderStatus: string, goodsName: string): Promise<ListResponse<FinanceReceivableListItemResponse>>







  /**
    *应收审核通过
    * @param id  应收编号集合（逗号分隔）   
    */
  audited(id: string): Promise<BaseResponse>;

  /**
    *应收撤销审核
    * @param id   应收编号      
    */
  returnaudited(id: string): Promise<BaseResponse>;

  /**
    *应收撤出账单
    * @param id   应收编号         
    */
  withdrawnbill(id: string): Promise<BaseResponse>;

  /**
    *应收退回办理
    * @param id   应收编号         
    */
  returnReceivable(id: string): Promise<BaseResponse>;

  /**
    *根据Id集合获取应收总额之和
    * @param id   编号集合（逗号分隔）       
    */
  sumreceivable(id: string): Promise<SumreceivableResponse>;

  /**
    *添加账单
    * @param totalMoney    总金额
    * @param description    应收说明
    * @param settleId    结算单位编号
    * @param settle    结算单位
    * @param client    客户单位
    * @param clientId    客户单位编号
    * @param invoiceTime    开票日期
    * @param invoiceStatus    开票状态
    */
  addparent(totalMoney: number, description: string, settleId: string, settle: string, client: string, clientId: string, invoiceTime: string, invoiceStatus: string): Promise<BaseResponse>;

  /**
    *获取应收结算总单详情
    * @param id   应收结算总单编号          
    */
  getReceivableSettleBillDetail(id: string): Promise<ReceivableSettleBillDetailResponse>;

  /**
    *应收账单对账
    * @param id    应收结算总单编号
    * @param invoiceStatus    开票状态
    * @param invoiceTime    开票时间
    */
  checked(id: string, inviiceStatus: string, inviiceTime: string): Promise<BaseResponse>;

  /**
    *编辑应收价格信息
    * @param id    应收编号
    * @param receivablePrice        应收单价
    * @param receivablePriceUnit    应收单价单位
    * @param receivableTotalPrice   应收总价
    * @param quantityOfGoods        货物数量
    * @param goodsUnit              货物数量单位
    * @param receivableSummary      应收说明
    * @param settleId               结算单位编号
    * @param settle                 结算单位
    */
  edit(id: string, receivablePrice: number, receivablePriceUnit: string, receivableTotalPrice: number, quantityOfGoods: number, goodsUnit: string, receivableSummary: string,settleId:string,settle:string): Promise<BaseResponse>;

  /**
    *添加应收到总单
    * @param id    应收编号
    * @param parentId    应收总单编号
    * @param description 应收说明    
    */
  toparent(id: string, parentId: string, description: string): Promise<BaseResponse>;

  /**
    *添加收入
    * @param amount    金额
    * @param description    说明
    * @param settleId    结算单位编号
    * @param settle    结算单位
    * @param receiptTime    收款日期

    */
  income(amount: number, description: string, settleId: string, settle: string, receiptTime: string): Promise<BaseResponse>;

  /**
    *删除收入
    * @param id    收入编号      
    */
  deleteincome(id: string): Promise<BaseResponse>;

  /**
    *获取收入列表
    * @param settle    结算单位
    * @param starttime    收款起始时间
    * @param endtime    收款结束时间
    */
  incomeList(settle: string, starttime: string, endtime: string): Promise<ListResponse<IncomeListItemResponse>>;

  /**
    *获取应收统计详情
    * @param settle    结算单位
    * @param starttime   起始时间
    * @param endtime   结束时间      
    */
  statistics(settle: string, starttime: string, endtime: string): Promise<ReceivableStatisticsResponse>;

  /**
    *获取应收统计列表
    * @param settle    结算单位
    * @param starttime   起始时间
    * @param endtime   结束时间   
    * @param skip        
    * @param count      
    */
  statisticslist(settle: string, starttime: string, endtime: string, skip: number, count: number): Promise<ListResponse<ReceivableStatisticsResponse>>;

  /**
    *新增应收
    * @param clientId    客户单位id
    * @param shipProvince    发货地省编号
    * @param shipCity    发货地市编号
    * @param shipArea    发货地区编号
    * @param shipAddress    发货地详细地址
    * @param deliverProvince    送货地省编号
    * @param deliverCity    送货地市编号
    * @param deliverArea    送货地区编号
    * @param deliverAddress    送货地详细地址
    * @param goodsId    货物编号
    * @param goodsTypeId    货物类型编号
    * @param quantityOfGoods    货物数量
    * @param goodsUnit    货物数量单位
    * @param payablePrice    应付单价
    * @param payablePriceUnit    应付单价单位
    * @param receivablePrice    应收单价
    * @param receivablePriceUnit    应收单价单位
    * @param receivableTotalPrice    应收总价
    * @param receivableSummary    应收说明
    * @param carrierId    承运商编号
    * @param carId    车辆编号
    * @param contractNumber    合同编号
    * @param driverLicenseNumber    驾驶证号
    * @param bankName    开户银行
    * @param bankCode    银行卡号
    * @param holder    持卡人
    * @param deliveryTime    发货时间
    * @param arrivalTime    到货时间
    * @param billId    结算账单编号
    * @param clientCornet    客户单位短号
    */
  addnewreceivable(clientId: string, shipProvince: string, shipCity: string, shipArea: string, shipAddress: string, deliverProvince: string, deliverCity: string, deliverArea: string, deliverAddress: string, goodsId: string, goodsTypeId: string, quantityOfGoods: number, goodsUnit: string, payablePrice: number, payablePriceUnit: string, receivablePrice: number, receivablePriceUnit: string, receivableTotalPrice: number, receivableSummary: string, carrierId: string, carId: string, contractNumber: string, driverLicenseNumber: string, bankName: string, bankCode: string, holder: string, deliveryTime: string, arrivalTime: string, billId: string, clientCornet: string): Promise<BaseResponse>;

  /**
    *添加应收结算总单
    * @param description    应收说明
    * @param receivableIdList   应收子单编号集合      
    */
  addReceivableSettleBill(description: string, receivableIdList: Array<string>): Promise<BaseResponse>;

  /**
    *获取应收结算总单列表
    * @param orderby    排序字段枚举
    * @param asc    是否升序
    * @param code    应收总编号
    * @param reckoner    结算人
    * @param settle    结算单位
    * @param totalmoney    应收总额
    * @param starttime    结算起始时间
    * @param endtime    结算结束时间
    * @param invoicestarttime    开票起始时间
    * @param invoiceendtime    开票结束时间
    * @param status    开票状态
    * @param client    客户单位
      @param clientid  结算单位编号
    * @param skip    跳过项数
    * @param count    获取项数
    */
  getreceivableSettleBillList(orderby: string, asc: boolean, code: string, reckoner: string, settle: string, totalmoney: string, starttime: string, endtime: string, invoicestarttime: string, invoiceendtime: string, status: string, client: string, settleid:string, skip: number, count: number): Promise<ListResponse<ReceivableSettleBillListItemResponse>>;


}

export default receivableService;