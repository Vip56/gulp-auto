import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 列表项
 */
interface ValueListItemResponse {
    text: string;
    value: string;
}

//result
interface valueService {
    /**
     * 获取应收费用类型
     */
    getReceivableFeeTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取结算状态
     */
    getSettleStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取系统级别
     */
    getSystemLevelList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取紧急时间单位
     */
    getUrgencyUnitList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取资料级别
     */
    getInfoLevelList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取车长
     */
    getCarLengthList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取开票类型
     */
    getInvoiceStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取车辆附件类型
     */
    getCarAttachmentTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取承运商附件类型
     */
    getCarrierAttachmentTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取客户资料类别
     */
    getClientInfoTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取岗位类型
     */
    getJobTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取线路报价状态
     */
    getLinePriceStateList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取线路报价价格类型
     */
    getLinePriceTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取专员类型
     */
    getCommissionerTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取询价状态列表
     */
    getInquiryStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取询价排序枚举
     */
    getInquirySortList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取订单排序枚举
     */
    getOrderSortList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取应收排序枚举
     */
    getReceivableSortList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取发货单排序枚举
     */
    getCarrierOrderSortList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取承运商排序枚举
     */
    getCarrierSortList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取车辆排序枚举
     */
    getVehicleSortList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取车型枚举
     */
    getCarTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取订单状态
     */
    getOrderStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取合同状态
     */
    getContractStatusList(): ListResponse<ValueListItemResponse>;

     /**
     * 获取电子合同状态--运维
     */
    getEContractStatus(): ListResponse<ValueListItemResponse>;

    /**
     * 获取电子合同类型--运维
     */
    getEContractType(): ListResponse<ValueListItemResponse>;

    /**
     * 获取回单状态
     */
    getReceiptStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取有卡状态
     */
    getOilCCardStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取费用类型
     */
    getFeeTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取费用状态
     */
    getFeeStatusList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取货物数量单位
     */
    getGoodQuantityUnitList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取承运方式
     */
    getCarrierWayList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取承运类别
     */
    getCarriageTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取承运商类型
     */
    getCarrierTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取付款方式
     */
    getPaymentMethodList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取承运商级别
     */
    getCarrierLevelList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取结算类型
     */
    getSettlementTypeList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取价格单位
     */
    getPriceUnitList(): ListResponse<ValueListItemResponse>;

    /**
     * 获取外接单状态
     */
    getCspStatus(): ListResponse<ValueListItemResponse>
}

export default valueService;
