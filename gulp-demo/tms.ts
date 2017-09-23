
/**
 * 基础输入对象
 */
interface AjaxResponse<T> {
    /**
     * 请求是否成功
     */
    success: boolean;
    /**
     * 请求回应
     */
    result: T;
    /**
     * 错误信息
     */
    error: ErrorInfo;
}

/**
 * 错误
 */
interface ErrorInfo {
    /**
     * 错误代码
     */
    code: number;
    /**
     * 错误描述
     */
    message: string;
    /**
     * 错误详情
     */
    details: string;
    /**
     * 验证错误
     */
    validationErrors: Array<ValidationErrorInfo>;
}

/**
 * 验证错误
 */
interface ValidationErrorInfo {
    /**
     * 错误描述
     */
    message: string;
    /**
     * 错误变量
     */
    members: Array<string>;
}

/**
 * 返回列表基础接口
 */
interface ListResponse<T> extends BaseResponse {
    data: Array<T>;
    total: number;
}

interface BaseResponse {
    extData: any;
}

/**
 * 辅助分页
 */
interface IPaginationOptions {
    /**
     * 分页中需要跳过的项数
     */
    skipSize: number;
    /**
     * 每页需显示的项数
     */
    pageSize: number;
    /**
     * 当前页数
     */
    currentPage: number;
}

/**
 * 视图模型必须实现的接口
 */
interface IBaseViewModel<TQueryTerms>  {
    /**
     * 是否正在查询中
     */
    querying: boolean;
    /**
     * 查询函数
     */
    queryFunc: () => void;
    /**
     * 标题
     */
    title: string;
    /**
     * 查询条件
     */
    queryTerms: TQueryTerms;

    /**
     * 导出方法
     */
    exportFunc:()=> void;
}



/**
 * ------------------枚举部分
 */

/**
 * 专员类型
 */
enum CommissionerType {
    /**
     * 缺省值
     */
    None = 0,
    /**
     * 计划专员
     */
    Plan = 1,
    /**
     * 调度专员
     */
    Dispatch = 2,
    /**
     * 调度经理
     */
    DispatchManager = 3,
    /**
     * 客服专员
     */
    CustomerService = 4,
    /**
     * 商务专员
     */
    BusinessAffairs = 5,
    /**
     * 结算专员
     */
    Settler = 6,
    /**
     * 独立专员
     */
    Independent = 7,
    /**
     * 客服经理
     */
    CustomerManager = 8
}

/**
 * angucomplete-alt--输入提示控件
 */
interface angucomplete<T>{
    originalObject:T;
    description:T;
    image:string;
    title:string
}

/**全局变量 */
declare var BMap;
declare var BMAP_ANCHOR_BOTTOM_LEFT;
declare var BMAP_NAVIGATION_CONTROL_LARGE;
declare var BMAP_ANCHOR_TOP_LEFT;
declare var Wilddog;
declare var LODOP;
declare var md5;
declare var CLODOP;
declare var getCLodop;
declare var temp;
declare var RongIMClient;
declare var RongIMLib;
// declare var bughd;
declare var RongWebIMWidget;
declare var store:any;


export {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete}


