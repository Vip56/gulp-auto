import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
//result
interface exportService{
   /** 
     * 获取导出外接询价单
     * v1.0
     * @param cspInquiryCode 外接总询价单号
     * @param cspInquiryChildCode 外接子询价单号
     * @param clientName 客户单位名称
     * @param states 询价状态
     * @param begintime 开始时间
     * @param endtime 结束时间
     * @param beginAddress 送货地址
     * @param endAddress 到货地址
     * @param skip 跳过项数
     * @param count 获取项数
    */
    exportCspinquiryList(cspInquiryCode: string, cspInquiryChildCode: string, clientName: string, states: string, beginTime: string, endTime: string, beginAddress: string, endAddress: string, skip: number, count: number):any;
    /**
       * 导出称运单报表列表
       * v1.0
       * @param orderby 排序字段 枚举
       * @param asc 是否升序
       * @param contractNum 合同号
       * @param clientName 客户名称
       * @param shipAddress 发货地址
       * @param deliverAddress 送货地址
       * @param shipStartTime 发货开始时间
       * @param shipEndTime 发货结束时间
       * @param carrierName 承运商名称
       * @param driver 驾驶员
       * @param isOneTier 是否零担整单
       */
      expoetReportCarrierOrderList(orderby:number,asc:boolean,contractNum:string,clientName:string,shipAddress:string,deliverAddress:string,shipStartTime:string,shipEndTime:string,carrierName:string,driver:string,isOneTier:boolean):Promise<BaseResponse>

     /**
       * 导出回单管理列表exce
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
       * @param dispatchOfficerId 调度专员
       * @param carrierName 承运商名称
       * @param carLength 车长
       */
      excelReceiptexport(orderby:string,asc:boolean,orderId:string,clientName:string,route:string,shipStartTime:string,shipEndTime:string,
      status:string,placeOrderStartTime:string,placeOrderEndTime:string,shipAddress:string,deliverAddress:string,carCode:string,contractNum:string,
      contractStatus:string,receiptPriceStatus:string,oilCardStatus:string,customerServiceOfficerId:string,dispatchOfficerId:string,
      carLength:string,carrierName:string):any
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
    export(orderby: number, asc: boolean, feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string, payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatus: string, origin: string, destination: string, paymentMethod: string): any;


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
    feesettlebillexport(orderby: number, asc: boolean, feeSettleBillCode: string, carrierId: string, carrierName: string, paymentMethod: string, startTime: string, endTime: string, totalMoney: string, reckonerId: string, contractNumber: string, feeStatusList: string, origin: string, destination: string): any;

    /**
     * 导出结算单详情费用列表
     * v1.0
     * @param feeSettleBillCode 结算总单短号
     * @param feeCode 费用短号
     * @param carrierName 承运商名称
     * @param carCode 车牌号
     * @param contractNumber 合同短号
     * @param feeStatus 费用状态
     */
    detailexport(feeSettleBillCode: string, feeCode: string, carrierName: string, carCode: string, contractNumber: string, feeStatus: string): any;

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
    exportFinanceFeeList(orderby: number, asc: boolean, feeSettleBillCode: string, feeCode: string, clientName: string, clientId: string, applicant: string, contractNumber: string, startDeliveryTime: string, endDeliveryTime: string, startTime: string, endTime: string, settleStartTime: string, settleEndTime: string, payStartTime: string, payEndTime: string, contractStatus: string, receiptStatus: string, oilCardStatus: string, carrierId: string, carrierName: string, carrierPhone: string, carCode: string, feeType: string, feeStatusList: string, origin: string, destination: string, paymentMethod: string, payUser: string): any;

    /**
     * 导出询价单管理列表
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param inquiryid 总询价编号
     * @param inquirychildid 子询价编号
     * @param clientname 客户单位名称
     * @param userid 调度专员编号
     * @param beginaddress 发货地址
     * @param endaddress 送货地址
     * @param state 询价状态
     * @param begintime 开始时间
     * @param endtime 结束时间
     */
    exportInquiryList(orderby: string, asc: boolean, inquiryid: string, inquirychildid: string, clientname: string, userid: string, beginaddress: string, endaddress: string, state: string, begintime: string, endtime: string):any;

    /**
     * 导出发货单管理列表
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
     * @param dispatchOfficerId 调度专员
     * @param carrierName 承运商名称
     * @param carLength 车长
     * @param oilCardNumber 油卡卡号
     * @param isOneTier 是否单行
     * @param driverPhone 驾驶员号码
     */
      excelCarryOrderList(orderby:number,asc:boolean,orderId:string,clientName:string,route:string,shipStartTime:string,shipEndTime:string,
      status:string,placeOrderStartTime:string,placeOrderEndTime:string,shipAddress:string,deliverAddress:string,carCode:string,contractNum:string,
      contractStatus:string,receiptPriceStatus:string,oilCardStatus:string,customerServiceOfficerId:string,dispatchOfficerId:string,
      carrierName:string,carLength:string,oilCardNumber:string,isOneTier:boolean,driverPhone:string):any;

    /**
     * 导出车辆列表
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param carcode 车牌号
     * @param cartype 车型
     * @param carlength 车长
     * @param inputperson 录入人
     * @param driver 驾驶员
     * @param driverphone 驾驶员号码
     * @param carriercategory 承运类别
     * @param mianroute 主营线路
     * @param isenabled 是否启用
     * @param startTime 录入开始时间  
     * @param endTime 录入结束时间
     * @param skip 跳过项数
     * @param count 获取项数 
     */
    exportCar(orderby:string,asc:boolean,carcode:string,cartype:string,carlength:string,inputperson:string,
    driver:string,driverphone:string,carriercategory:string,mianroute:string,isenabled:boolean,startTime:string,
    endTime:string,skip:number,count:number):any;

 /**
   * 导出应收管理列表excel
   * v1.0
   * @param orderby 排序字段 枚举
   * @param asc 是否升序
   * @param client 客户单位
   * @param settle 结算单位
   * @param settleid 结算单位编号
   * @param businessaffairsid 商务专员编号
   * @param starttime 发货起始时间
   * @param endtime 发货结束时间
   * @param carcode 车牌号
   * @param contractnumber 合同短号
   * @param receiptstatus 回单状态
   * @param settlestatuslist 结算状态集合
   * @param origin 发货地址
   * @param destination 目的地址
   * @param parentid 应收总单编号
   * @param isaccountenroute 是否为未结账应收
   * @param receivablecodes 应收编号集合（逗号分隔）
   * @param feeType 应收费用类型
   * @param isArrived  是否已发货（true已发货,fasle待结算）
   * @param receivableSettleBillCode  应收结算总单可识别编号(code)
   * @param orderStatus 订单状态
   * @param goodsName 货物名称
   * @param isindependent 是否独立添加
   */
  exportReceivable(orderby:number,asc:boolean,client:string,settle:string,settleid:string,businessaffairsid:string,starttime:string,endtime:string,carcode:string,contractnumber:string,receiptstatus:string,settlestatuslist:string,origin:string,destination:string,parentid:string,isaccountenroute:boolean,receivablecodes:string,feeType:string,isArrived:boolean,receivableSettleBillCode:string,orderStatus:string,goodsName:string,isindependent:boolean):any;

  /**
   * 导出应收统计列表
   */
  exportstatistics(settle:string,starttime:string,endtime:string):any;
  /**
   * 导出应收列表（统计用财务明细）
   */
  exportstatisticsreceivable(settle:string,starttime:string,endtime:string):any;

  /**
   * 导出应收列表（统计用未结账明细单）
   */
  exportstatisticsaccount(settle:string,starttime:string,endtime:string,settlestatuslist:string):any;

  /**
   * 导出应收列表（统计用收入明细单）
   */
  exportstatisticsincome(settle:string,starttime:string,endtime:string):any;

  /**
     * 导出北斗报表列表
     * v1.0
     * @param startTime 定位起始时间
     * @param endTime 定位结束时间
     * @param carCode 车牌号
     */
    excelBDNPList(startTime:string,endTime:string,carCode:string):any
/**
     * 导出承运商列表
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
    exportCarrierList(orderby: number, asc: boolean, name: string, phone: string, type: string, inputperson: string,
        level: string, mainroute: string, isenabled: boolean, skip: number, count: number):any;
         /**
      * 导出订单报表
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
      * @param dispatchOfficerId 调度专员
      * @param shipAddress 发货地址
      * @param deliverAddress 送货地址
      * @param customerServiceId 客服专员编号
      */
      exportOrderList(orderby:number,asc:boolean,orderId:string,clientName:string,route:string,shipStartTime:string,shipEndTime:string,status:string,placeOrderStartTime:string,placeOrderEndTime:string,dispatchOfficerId:string,shipAddress:string,
      deliverAddress:string,customerServiceId:string):any;


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
      */
      exportCspOrderlist(orderId:string,clientName:string,states:string,startTime:string,endTime:string,startAddress:string,endAddress:string):any;

       /**
      *导出客户单位列表
      * v1.0
      *@param name 客户单位名称
     * @param businessOfficerId 商务专员编号
     * @param province 所属省份
     * @param city 所属城市
     * @param addressDetails 地址详情
      */
      exportClentlist(name: string, businessOfficerId: string, province: string, city: string,addressDetails:string):any;



      /**
       * 应收结算单导出（应收账单管理）
       * @param orderby 排序字段枚举
       * @param asc 应收总编号
       * @param code 应收总编号
       * @param reckoner 结算人
       * @param settle 结算单位
       * @param totalmoney 应收总额
       * @param starttime 结算起始时间
       * @param endtime 结算结束时间
       * @param invoicestarttime 开票起始时间
       * @param invoiceendtime 开票结束时间
       * @param status 开票状态
       * @param client 客户单位
       * @param settleid 结算单位编号
       */
      exportbilllist(orderby:number,asc:boolean,code:string,reckoner:string,
        settle:string,totalmoney:string,starttime:string,endtime:string,
        invoicestarttime:string,invoiceendtime:string,status:string,client:string,settleid:string) :any
}

export default exportService;

