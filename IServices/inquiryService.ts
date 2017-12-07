import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
  * 获取导出询价单列表
  */
interface ExportInquiryListItemResponse {
    /**
     *车型
    */
    vehicleType: string;
    /**
    *应收报价
   */
    receivableQuotation: string;
    /**
    *应收报价时间
   */
    receivableQuotationTime: string;
    /**
    *预计发货时间
   */
    plannedArrivalTime: string;
    /**
    *审核通过时间
   */
    auditPassTime: string;
    /**
    *公里数
   */
    mileage: number;
    /**
    *货物类别名称
   */
    goodsTypeName: string;
    /**
    *承运方式
   */
    carriageWay: string;
    /**
    *标识符
   */
    id: string;
    /**
    *序号
   */
    index: number;
    /**
    *总询价单编号
   */
    inquiryId: string;
    /**
    *询价子单编号
   */
    inquiryChildId: string;
    /**
    *客户单位名称
   */
    clientName: string;
    /**
    *发货地址
   */
    startAddress: string;
    /**
    *送货地址
   */
    endAddress: string;
    /**
    *货物名称
   */
    goodsName: string;
    /**
    *货物数量
   */
    goodsQuantity: string;
    /**
    *所需车长
   */
    carLength: string;
    /**
    *下单时间
   */
    createTime: string;
    /**
     *紧急程度
    */
    urgency: string;

    /**
    *询价状态
   */
    state: string;

    /**
    *应付报价
   */
    payableQuotation: string;

    /**
    *应付报价时间
   */
    payableQuotationTime: string;

    /**
     *调度专员
    */
    dispatchOfficer: string;

}

/**
 * 询价列表项
 */
interface InquiryListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 总询价单编号
     */
    inquiryId: string;
    /**
     * 询价子单编号
     */
    inquiryChildId: string;
    /**
     * 客户单位名称
     */
    clientName: string;
    /**
     * 发货地址
     */
    startAddress: string;
    /**
     * 送货地址
     */
    endAddress: string;
    /**
     * 货物名称
     */
    goodsName: string;
    /**
     * 货物数量
     */
    goodsQuantity: string;
    /**
     * 所需车长
     */
    carLength: string;
    /**
     * 下单时间
     */
    createTime: string;
    /**
     * 紧急程度
     */
    urgency: string;
    /**
     * 询价状态
     */
    state: string;
    /**
     * 应付报价
     */
    payableQuotation: string;
    /**
     * 应付报价时间
     */
    payableQuotationTime: string;
    /**
     *  调度专员
     */
    dispatchOfficer: string;
}

/**
 * 子询价单列表
 */
interface InquiryChildListResponse {
    /**
     *起始地省
    */
    startProvince: string;
    /**
     *起始地市
    */
    startCity: string;
    /**
     *起始地区
    */
    startArea: string;
    /**
     *起始地详细地址
    */
    startAddress: string;
    /**
     * 起始地地址
     */
    startAddressStr?:string
    /**
     *目的地省
    */
    endProvince: string;
    /**
     *目的地市
    */
    endCity: string;
    /**
     *目的地区
    */
    endArea: string;
    /**
     *目的地详细地址
    */
    endAddress: string;
    /**
     * 目的地地址Str
     */
    endAddressStr?:string;
    /**
     *预计发货时间
    */
    plannedArrivalTime: string;
    /**
     *预计到货时间
    */
    plannedDeliveryTime: string;
    /**
     *公里数
    */
    mileage: number;
    /**
     *货物类别编号
    */
    goodsTypeId: string;
    /**
     *货物类别名称
    */
    goodsTypeName: string;
    /**
     *货物编号
    */
    goodsId: string;
    /**
     *货物名称
    */
    goodsName: string;
    /**
     *货物数量
    */
    goodsQuantity: number;
    /**
     *货物数量单位
    */
    goodsQuantityUnit: string;
    /**
     *车型
    */
    carType: string;
    /**
     *车长
    */
    carLength: string;
    /**
     *承运方式
    */
    carrierCategory: string;
    /**
     *装车效果
    */
    loadingEffect: string;
    /**
     *子询价单备注
    */
    remarks: string;
}

/**
 * 询价详情
 */
interface InquiryDetailResponse {
    /**
    *计划专员编号
   */
    plannerId: string;
    /**
    *计划专员姓名
   */
    plannerName: string;
    /**
    *客户单位名称
   */
    clientName: string;
    /**
    *发货员姓名
   */
    consignorName: string;
    /**
    *发货员号码
   */
    consignorPhone: string;
    /**
    *商务专员姓名
   */
    businessOfficerName: string;
    /**
    *客服专员姓名
   */
    customerServiceOfficerName: string;
    /**
    *下单时间
   */
    createTime: string;
    /**
    *总询价编号
   */
    inquiryId: string;
    /**
    *子询价编号
   */
    inquiryChildId: string;
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
     *调度专员名称
     */
    dispatchOfficerName: string;
    /**
    *客户单位编号
   */
    clientId: string;
    /**
    *发货员编号
   */
    consignorId: string;
    /**
    *总询价内容
   */
    content: string;
    /**
    *子询价单列表
   */
    inquiryChildList: Array<InquiryChildListResponse>;
    /**
    *附件列表(名称+路径)
   */
    attachment: Array<attachmentList>;
    /**
    *附件备注
   */
    attachmentDetails: string;
    /**
    *客户单位短号
   */
    clientCornet: string;
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
 * 获取应付报价列表集合
 */
interface PayableQuotationListItemResponse {
    /**
    *应付报价
   */
    payableQuotation: string;
    /**
    *应付报价单位
   */
    payableQuotationUnit: string;
    /**
    *应付报价说明
   */
    payableQuotationDetails: string;
}

/**
 * 获取应收报价
 */
interface ReceivableQuotationResponse {
    /**
    *应收报价
   */
    receivableQuotation: number;
    /**
    *应收报价单位
   */
    receivableQuotationUnit: string;
    /**
    *应收报价说明
   */
    receivableQuotationDetails: string;
}

/**
 * 变更询价单状态
 */
interface TransformInquiryStateResponse extends BaseResponse {
    /**
    *子询价单编号
   */
    inquiryChildId: string;
    /**
    *询价单状态
   */
    state: string;
    /**
    *备注
   */
    remarks: string;
}

/**
* 变更调度员
*/
interface TransformDispatchOfficerResponse extends BaseResponse {
    /**
    *子询价编号
   */
    inquiryChildId: string;
    /**
    *调度专员编号
   */
    dispatchOfficerId: number;
    /**
    *调度专员名称
   */
    dispatchOfficerName: string;
}

/**
* 添加询价单应付报价
*/
interface AddPayableQuotationResponse extends BaseResponse {
    /**
    *子询价编号
   */
    inquiryChildId: string;
    /**
    *公里数
   */
    mileage: number;
    /**
    *应付报价集合
   */
    payableQuotations: Array<PayableQuotationListItemResponse>;
    /**
    *子询价单备注
   */
    remarks: string;
}

/**
* 添加询价单应收报价
*/
interface AddReceivableQuotationResponse extends BaseResponse {
    /**
    *子询价编号
   */
    inquiryChildId: string;
    /**
    *应收报价
   */
    receivableQuotation: ReceivableQuotationResponse;
    /**
    *子询价单备注
   */
    remarks: string;
}


//result
/**
 * 询价服务
 */
interface inquiryService {
    /**
     * 获取导出询价单列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param inquiryid 总询价编号
     * @param inquirychildid 子询价编号
     * @param clientname 客户单位名称
     * @param userid 调度专员编号
     * @param beginaddress 发货地址
     * @param endaddress 送货地址
     * @param state	 询价状态
     * @param begintime 开始时间
     * @param endtime 结束时间
     * @param skip 跳过项数
     * @param count 获取项数
     * 
     */
    exportList(orderby: string, asc: boolean, inquiryid: string, inquirychildid: string, clientname: string, userid: string, beginaddress: string, endaddress: string, state: string, begintime: string, endtime: string, skip: number, count: number): Promise<ListResponse<ExportInquiryListItemResponse>>;

    /**
     * 获取询价列表
     * v1.0
     * @param orderby 排序字段枚举
     * @param asc 是否升序
     * @param inquiryid 总询价编号
     * @param inquirychildid 子询价编号
     * @param clientname 客户单位名称
     * @param userid 调度专员编号
     * @param businessaffairsid 商务专员编号
     * @param beginaddress 发货地址
     * @param endaddress 送货地址
     * @param states 询价状态集合（逗号分割）
     * @param begintime 开始时间
     * @param endtime 结束时间
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(orderby: string, asc: boolean, inquiryid: string, inquirychildid: string, clientname: string, dispatcherid: string, businessaffairsid: string, beginaddress: string, endaddress: string, states: string, begintime: string, endtime: string, skip: number, count: number): Promise<ListResponse<InquiryListItemResponse>>;

    /**
     * 获取询价详细
     * v1.0
     * @param id 子询价单编号
     */
    getDetail(id: string): Promise<InquiryDetailResponse>;

    /**
     * 添加询价单
     * v1.0
     * @param urgency 紧急程度
     * @param urgencyUnit 紧急程度单位
     * @param businessOfficerId 商务专员编号
     * @param plannerName 计划专员名称
     * @param businessOfficerName 商务专员名称
     * @param customerServiceOfficerId 客服专员编号
     * @param customerServiceOfficerName 客户专员名称
     * @param dispatchOfficerId 调度专员编号
     * @param dispatchOfficerName 调度专员名称
     * @param clientId 客户单位编号
     * @param clientName 客户单位名称
     * @param consignorId 发货员编号
     * @param content 总询价内容
     * @param inquiryChildList 子询价单列表
     * @param attachment 附件列表(名称+路径)
     * @param attachmentDetails 附件备注
     * @param clientCornet 客户单位短号
     */

        // /**
        //  * 获取导出询价单列表
        //  */
        // export(orderby:string,asc:boolean,inquiryid:string,inquirychildid:string,clientname:string,userid:string,beginaddress:string,endaddress:string,state:string,begintime:string,endtime:string, skip:number, count:number):ng.IPromise<ListResponse<ExportInquiryListItemResponse>>;

        // /**
        //  * 获取询价列表
        //  */
        // getList(orderby:string,asc:boolean,inquiryid:string,inquirychildid:string,clientname:string,dispatcherid:string,businessaffairsid:string,beginaddress:string,endaddress:string,states:string,begintime:string,endtime:string, skip:number, count:number):ng.IPromise<ListResponse<InquiryListItemResponse>>;

        // /**
        //  * 获取询价详细
        //  */
        // getDetail(id:string):Promise<InquiryDetailResponse>;

        /**
         * 添加询价单
         * @param urgency 紧急程度
         * @param urgencyUnit 紧急程度单位
         * @param businessOfficerId 商务专员编号
         * @param plannerName 计划专员名称
         * @param businessOfficerName 商务专员名称
         * @param customerServiceOfficerId 客服专员编号
         * @param customerServiceOfficerName 客户专员名称
         * @param dispatchOfficerId 调度专员编号
         * @param dispatchOfficerName 调度专员名称
         * @param clientId 客户单位编号
         * @param clientName 客户单位名称
         * @param consignorId 发货员编号
         * @param content 总询价内容
         * @param inquiryChildList 子询价单列表
         * @param attachment 附件列表(名称+路径)
         * @param attachmentDetails 附件备注
         * @param clientCornet 客户单位短号
         * @param cspInquiryChildId csp询价子单编号
         */
        add(urgency:number,urgencyUnit:string,businessOfficerId:string,plannerName:string,businessOfficerName:string,customerServiceOfficerId:string,customerServiceOfficerName:string,dispatchOfficerId:string,dispatchOfficerName:string,clientId:string,clientName:string,consignorId:string,content:string, inquiryChildList:Array<InquiryChildListResponse>, attachment:Array<attachmentList>,attachmentDetails:string,clientCornet:string,cspInquiryChildId?:string):Promise<BaseResponse>;
        
    /**
     * 获取应付报价列表
     * v1.0
     * @param id 子询价单编号
     */
    pay(id: string): Promise<ListResponse<PayableQuotationListItemResponse>>;

    /**
     * 获取应收报价
     * v1.0
     * @param id 子询价单编号
     */
    receive(id: string): Promise<ReceivableQuotationResponse>;

    /**
     * 变更询价单状态
     * v1.0
     * @param inquiryChildId 子询价单编号
     * @param state 询价单状态
     * @param remarks 备注
     */
    state(inquiryChildId: string, state: string, remarks: string): Promise<BaseResponse>;

    /**
     * 变更调度员
     * v1.0
     * @param inquiryChildId 子询价单编号
     * @param dispatchOfficerId 调度专员编号
     * @param dispatchOfficerName 调度专员名称
     */
    dispatch(inquiryChildId: string, dispatchOfficerId: number, dispatchOfficerName: string): Promise<BaseResponse>;

    /**
     * 添加询价单应付报价
     * v1.0
     * @param id 子询价编号
     * @param mileage 公里数
     * @param payableQuotations 应付报价集合
     * @param remarks 子询价单备注
     */
    addPay(inquiryChildId: string, mileage: number, payableQuotations: Array<PayableQuotationListItemResponse>, remarks: string): Promise<BaseResponse>;

    /**
     * 添加询价单应收报价
     * v1.0
     * @param id 子询价编号
     * @param receivableQuotation 应收报价对象
     * @param remarks 子询价单备注
     */
    addReceive(inquiryChildId: string, receivableQuotation: ReceivableQuotationResponse, remarks: string): Promise<AddReceivableQuotationResponse>;

    /**
     * 编辑询价单
     * v1.0
     * @param id 需要编辑的子询价单编号
     * @param urgency 紧急程度
     * @param urgencyUnit 紧急程度单位
     * @param businessOfficerId 商务专员编号
     * @param plannerName 计划专员名称
     * @param businessOfficerName 商务专员名称
     * @param customerServiceOfficerId 客服专员编号
     * @param customerServiceOfficerName 客户专员名称
     * @param dispatchOfficerId 调度专员编号
     * @param dispatchOfficerName 调度专员名称
     * @param clientId 客户单位编号
     * @param clientName 客户单位名称
     * @param consignorId 发货员编号
     * @param content 总询价内容
     * @param inquiryChildList 子询价单列表
     * @param attachment 附件列表(名称+路径)
     * @param attachmentDetails 附件备注
     * @param clientCornet 客户单位短号
     */
    edit(id: string, urgency: number, urgencyUnit: string, businessOfficerId: string, plannerName: string, businessOfficerName: string, customerServiceOfficerId: string, customerServiceOfficerName: string, dispatchOfficerId: string, dispatchOfficerName: string, clientId: string, clientName: string, consignorId: string, content: string, inquiryChildList: Array<InquiryChildListResponse>, attachment:Array<attachmentList>, attachmentDetails: string, clientCornet: string): Promise<BaseResponse>;

    /**
     * 删除子询价单
     * v1.0
     * @param id 需要删除的子询价单编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default inquiryService;