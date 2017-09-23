import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 获取外接询价单列表
 */
interface CspInquiryListItemResponse {
    /**
     * 标识符
     */
    id:string;
    /**
     * 序号
     */
     index:string;
    /**
     * 外接总询价单号
     */
     cspInquiryCode:string;
     /**
      * 外接子询价单号
      */
      cspInquiryChildCode:string;
      /**
       * 客户单位
       */
      clientName:string;
      /**
       * 发货地址
       */
      startAddress:string;
      /**
       * 送货地址
       */
      endAddress:string;
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
      carLength:string;
      /** 
       * 询价时间
      */
      cspInquiryTime:string;
      /** 
       * 紧急程度
      */
      responseTime:string;
      /** 
       * 询价状态
      */
      status:string;
}
/**
 * 获取发布询价详情
 */
interface CspInquiryDetailResponse{
    /** 
     * 询价单主键
    */
    id:string;
    /**
     * 子询价单号
     */
    cspInquiryChildCode:string;
    /** 
     * Csp询价单总单编号
    */
    cspInquiryId:string;
    /**
     * 紧急程度
     */
    responseTime:string;
    /** 
     * 紧急程度单位
    */
    responseTimeUnit:string;
    /**
     * 询价时间
     */
    cspInquiryTime:string;
     /**
     * 客户单位编号
     */
    clientId: string;
    /**
     * 客户单位
     */
    clientName:string;
    /**
     * 发货计划人编号
     */
    consignorId: string;
    /**
     * 发货计划人
     */
    customerName:string;
    /**
     * 发货人电话
     */
    customerPhone:string;
    /**总询价内容
     * 
     */
    content:string;
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
     * 起始省
     */
    originProvince:string;
    /** 
     * 起始市
    */
    originCity:string;
    /** 
     * 起始区
    */
    originCounty:string;
    /** 
     * 起始地详情
    */
    originDetails:string;
    /** 
     * 预计发货时间
    */
    foreArrivalTime:string;
    /** 
     * 预计到货时间
    */
    foreDeliveryTime:string;
     /**
     *货物类别编号
    */
    goodsTypeId: string;
    /** 
     * 货物类别名称
    */
    goodsTypeName:string;
     /**
     *货物编号
    */
    goodsId: string;
    /** 
     * 货物名称
    */
    goodsName:string;
    /** 
     * 货物数量
    */
    quantityOfGoods:number;
    /** 
     * 货物数量单位
    */
    goodsUnit:string;
    /** 
     * 所需车型
    */
    vehicleType:string;
    /** 
     * 所需车长
    */
    carLength:string;
    /** 
     * 承运方式
    */
    carriageWay:string;
    /** 
     * 装车效果
    */
    loadingEffect:string;
    /**
     * 附件备注 */
    attachmentRemarks:string;
    /**
     * 附件列表
     */
    attachmentList:Array<AttachmentDetail>;

}
/**
 * 附件
 */
interface AttachmentDetail{
    /** 
     * 附件id
    */
    attachmentId:string;
    /** 
     * 附件名称
    */
    attachmentName:string;
    /** 
     * 附件路径
    */
    attachmentPath:string;
    /** 
     * 附件标签
    */
    attachmentTag:string;
}

//result
/**
 * 外接询价单服务
 */
interface cspInquiryService{
    /**
     * 获取外接询价单列表
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
    getList(cspInquiryCode: string, cspInquiryChildCode: string, clientName: string, states: string, beginTime: string, endTime: string, beginAddress: string, endAddress: string, skip: number, count: number): Promise<ListResponse<CspInquiryListItemResponse>>;

     /**
     * 获取外接询价单详情
     * v1.0
     * @param id 外接询价单号
     */
    getDetail(id: string): Promise<CspInquiryDetailResponse>;

}

export default cspInquiryService;