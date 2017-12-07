import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
interface cspOrderListResponse{
    /**
     * 订单id
     */
    id:string;
    /**
     * 序号
     */
    index:string;
    /**
     * 订单编号
     */
    cspOrderId:string;
    /**
     * 发货起始地址
     */
    startAddress:string;
    /**
     * 发货到货地址
     */
    endAddress:string;
    /**
     * 客户单位名称
     */
    clientName:string;
    /**
     * 货物名称
     */
    goodsName:string;
    /**
     * 货物数量
     */
    quantityOfGoods:string;
    /**
     * 车长
     */
    CarLength:string;
    /**
     * 订单发布时间
     */
    cspOrderTime:string;
    /**
     * 紧急程度
     */
    responseTime:string;
    /**
     * 订单状态
     */
    status:string;
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
 * 附件
 */
interface attachmentList{
    attachmentId:string;
    attachmentName:string;
    attachmentPath:string;
    attachmentTag:string;
}


interface cspOrderDetailResponse{
    /**
     * 编号
     */
    id:string;
    /**
     * 可识别的订单编号
     */
    cspOrderId:string;
    /**
     * 订单发布时间
     */
    cspOrderTime:string;
    /**
     * 紧急程度
     */
    responseTime:string;
    /**
     * 紧急程度单位
     */
    responseTimeUnit:string;
    /**
     * 客户单位
     */
    clientName:string;
    /**
     * 客户单位id
     */
    clientId:string;
    /**
     * 发货计划人
     */
    consignorName:string;
    /**
     * 发货计划人电话
     */
    consignorPhone:string;
    /**
     * 发货计划人id
     */
    consignorId:string;
    /**
     * 发货内容
     */
    content:string;
    /**
     * 所需车长
     */
    carLength:string;
    /**
     * 承运方式
     */
    carriageWay:string;
    /**
     * 车型
     */
    vehicleType:string;
    /**
     * 装车效果
     */
    loadingEffect:string;
    /**
     * 订单备注
     */
    remarks:string;
    /**
     * 起始地省
     */    
    originProvince:string;
    /**
     * 起始地市
     */
    originCity:string;
    /**
     * 起始地区
     */
    originCounty:string;
    /**
     * 起始地详情
     */
    originDetails:string;
    /**
     * 起始地详情地址（省市区）
     */
    originAddress:string;
    /**
     * 目的地省
     */
    destinationProvince:string;
    /**
     * 目的地市
     */
    destinationCity:string;
    /**
     * 目的地区
     */
    destinationCounty:string;
    /**
     * 目的地详情
     */
    destinationDetails:string;
    /**
     * 目的地详情地址（省市区）
     */
    destinationAddress:string;
    /**
     * 中转地
     */
    viaAddressList:address[];
    /**
     * 发货时间
     */
    deliveryTime:string;
    /**
     * 到货时间
     */
    arrivalTime:string;
    /**
     * 里程数
     */
    mileage:string;
    /**
     * 货物名称
     */
    goodsName:string;
    /**
     * 货物名称
     */
    goodsId:string;
    /**
     * 货物类别名称
     */
    goodsTypeName:string;
    /**
     * 货物类别名称id
     */
    goodsTypeId:string;
    /**
     * 吨位范围
     */
    tonnageRange:string;
    /**
     * 货物数量
     */
    quantityOfGoods:string;
    /**
     * 货物数量单位
     */
    goodsUnit:string;
    /**
     * 货物数量单位str
     */
    goodsUnitStr:string;
    /**
     * 货物数量2
     */
    quantityOfGoodsTwo:string;
    /**
     * 货物数量2单位
     */
    goodsUnitTwo:string;
    /**
     * 子单列表
     */
    items:CspOrderChildList[];
    /**
     * 附件列表
     */
    attachmentList:attachmentList[];
    
}

interface CspOrderChildList{
    /**
     * 起始地省
     */
    originProvince:string;
    /**
     * 起始地省
     */
    originCity:string;
    /**
     * 起始地区
     */
    originCounty:string;
    /**
     * 起始地详情
     */
    originDetails:string;
    /**
     * 起始地详情地址（省市区）
     */
    originAddress:string;
    /**
     * 目的地省
     */
    destinationProvince:string;
    /**
     * 目的地市
     */
    destinationCity:string;
    /**
     * 目的地区
     */
    destinationCounty:string;
    /**
     * 目的地详情
     */
    destinationDetails:string;
    /**
     * 目的地详情地址（省市区）
     */
    destinationAddress:string;
    /**
     * 中转地
     */
    viaAddressList:address[];
    /**
     * 发货时间
     */
    deliveryTime:string;
    /**
     * 到货时间
     */
    arrivalTime:string;    
    /**
     * 里程数
     */
    mileage:string;
    /**
     * 货物名称
     */
    goodsName:string;
    /**
     * 货物名称id
     */
    goodsId:string;
    /**
     * 货物类别名称
     */
    goodsTypeName:string;
    /**
     * 货物类别名称id
     */
    goodsTypeId:string;
    /**
     * 吨位范围
     */
    tonnageRange:string;
    /**
     * 货物数量
     */
    quantityOfGoods:string;
    /**
     * 货物数量单位
     */
    goodsUnit:string;
    /**
     * 货物数量单位Str
     */
    goodsUnitStr:string;
    /**
     * 货物数量2
     */
    quantityOfGoodsTwo:string;
    /**
     * 货物数量2单位
     */
    goodsUnitTwo:string;
    /**
     * 结算方式
     */
    settlementType:string;
    /**
     * 结算方式str
     */
    settlementTypeStr:string;
    /**
     * 含税
     */
    includeTax:string;
    /**
     * 应收说明
     */
    receivableSummary:string;
    /**
     * 应收单价单位
     */
    receivablePriceUnit:string;
    /**
     * 应收单价单位str
     */
    receivablePriceUnitStr:string;
    /**
     * 应收单价
     */
    receivablePrice:number;
    /**
     * 应收总价
     */
    receivableTotalPrice:string;
    /**
     * 结算单位
     */
    settle:string;
    /**
     * 结算单位id
     */
    settleId:string;
    /**
     * 工程代号
     */
    projectCode:string;
    /**
     * 工程总量
     */
    projectMax:string;
    /**
     * 工程总量单位
     */
    projectMaxUnit:string;
    /**
     * 工程名称
     */
    projectName:string;
    /**
     * 工程id
     */
    projectId:string;
    /**
     * 收货单位
     */
    consigneeCompany:string;
    /**
     * 收货单位id
     */
    takeGoodsCompanyId:string;
    /**
     * 收货人
     */
    consignee:string;
    /**
     * 收货人号码
     */
    consigneePhone:string;
    /**
     * 发货单号
     */
    orderNumber:string;
}


//result
interface cspOrderService{
    /**
      *获取外接订单列表
      * v1.0
      *@param orderId 订单编号集合（可逗号隔开）
      *@param clientName 客户单位
      *@param states 订单状态集合（逗号分隔）
      *@param startTime 发货起始时间
      *@param endTime 发货结束时间
      *@param startAddress 发货起始地址
      *@param endAddress 发货到货地址
      *@param skip 跳过项数
      *@param count 获取项数
      */
    cspOrderlist(orderId:string,clientName:string,states:string,startTime:string,endTime:string,startAddress:string,endAddress:string,skip:number,count:number):Promise<ListResponse<cspOrderListResponse>>
    /**
     * 获取外接订单详情
     * @param id 
     */
    cspOrderDetail(id:string):Promise<cspOrderDetailResponse>
    
}
export default cspOrderService;

