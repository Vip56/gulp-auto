
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
    list: Array<T>;
    total: number;
    data?: any;
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
interface IBaseViewModel<TQueryTerms> extends ng.IScope {
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

abstract class ListController<TViewModel extends IBaseViewModel<TQueryTerms>, TQueryTerms> {
    /**
     * 分页参数
     */
    protected paginationOptions: IPaginationOptions;
    /**
     * 查询条件
     */
    protected queryTerms: TQueryTerms;

    
    constructor(protected $scope: TViewModel) {
    }

    /**
     * 初始化
     */
    protected init(): void {
        this.$scope.querying = false;
        this.$scope.queryFunc = ()=>{
            this.localHistory();
            this.paginationOptions.skipSize = 0;
            this.query(true);
        };
        this.$scope.exportFunc = this.exportFunc;
        this.paginationOptions = {  
            skipSize: 0,
            pageSize: 10,
            currentPage: 1
        };
    }
    //存储搜索条件
    protected localHistory(state?:ng.ui.IStateService):void{
        if(state){
            let routerName = state.current.name;
            let localName = state.current.url;
            if(routerName.indexOf("order")>0 || routerName.search("inquiry")>0 || routerName.indexOf("receivable")>0 || routerName.search("fee")>0 || routerName.indexOf("opera")>0||routerName.indexOf("excel")>0){
                window.localStorage.setItem(String(localName),JSON.stringify(this.queryTerms));
            };
        }
    }


    /**
     * 分页
     */
    protected paginationChanged = (newPage: number, pageSize: number,state?:ng.ui.IStateService) => {
        this.onPaginationChanged(newPage, pageSize,state);
        this.paginationOptions.skipSize = newPage * pageSize - pageSize;
        this.paginationOptions.pageSize = pageSize;
        this.paginationOptions.currentPage = newPage;
        this.loadData(this.queryTerms, this.paginationOptions.skipSize, this.paginationOptions.pageSize);
    }

    protected onPaginationChanged(newPage: number, pageSize: number,state?:ng.ui.IStateService): void {
        if(state){
            let skip = newPage * pageSize - pageSize;
            let routerName = state.current.name;
            let localName = state.current.url;
            if(routerName.indexOf("order")>0 || routerName.search("inquiry")>0 || routerName.indexOf("receivable")>0 || routerName.search("fee")>0 || routerName.indexOf("opera")>0||routerName.indexOf("excel")>0){
                window.localStorage.setItem(String(localName+'Page'),JSON.stringify({skip:skip,count:pageSize,currentPage:newPage}));
            };
        }
    }

    /**
     * 查询
     */
    protected query = (lock?:boolean) => {
        this.onQuery();
        this.$scope.querying = true;
        this.queryTerms = this.$scope.queryTerms;
        if(!lock){ this.getHistory();};
        this.loadData(this.queryTerms,this.paginationOptions.skipSize, this.paginationOptions.pageSize);
        this.getListCount();
    }

    protected exportFunc=()=>{
    }

    //获取历史搜索条件
    protected getHistory(state?:ng.ui.IStateService,location?:ng.ILocationService):void{
        if(state){
            let localName = state.current.url;
            let routerName = state.current.name;
            if(routerName.indexOf("order")>0 || routerName.search("inquiry")>0){
                if(location.search().name && (window.localStorage.getItem(String(localName))||window.localStorage.getItem(String(localName+'Page')))){
                    if(!window.localStorage.getItem(String(localName+'Page'))||!location.search().name){
                        window.localStorage.removeItem(String(localName+'Page'));
                    }
                    if(window.localStorage.getItem(String(localName+'Page'))){
                            let pageData = JSON.parse(window.localStorage.getItem(String(localName+'Page')));
                            this.paginationOptions.skipSize = pageData.skip;
                            this.paginationOptions.pageSize = pageData.count;
                            this.paginationOptions.currentPage = pageData.currentPage;
                    }
                    if(window.localStorage.getItem(String(localName))){
                        this.$scope.queryTerms = JSON.parse(window.localStorage.getItem(String(localName)));
                        this.queryTerms = this.$scope.queryTerms;
                    }
                }else{
                   if(!window.localStorage.getItem(String(localName+'Page'))||!location.search().name){
                        window.localStorage.removeItem(String(localName+'Page'));
                    }
                    if((routerName.indexOf("orderDeliverManage")>0||routerName.indexOf("orderManagentController")>0||routerName.indexOf("inquiryManagent")>0)&&(window.localStorage.getItem(String(localName))||window.localStorage.getItem(String(localName+'Page')))){
                        if(window.localStorage.getItem(String(localName))){
                            this.$scope.queryTerms = JSON.parse(window.localStorage.getItem(String(localName)));
                            this.queryTerms = this.$scope.queryTerms;
                            return;
                        }
                        if(window.localStorage.getItem(String(localName+'Page'))){
                            let pageData = JSON.parse(window.localStorage.getItem(String(localName+'Page')));
                            this.paginationOptions.skipSize = pageData.skip;
                            this.paginationOptions.pageSize = pageData.count;
                            this.paginationOptions.currentPage = pageData.currentPage;
                            return;
                        }
                    };
                    window.localStorage.removeItem(String(localName));
                }
                
                
            }else{
                if(window.localStorage.getItem(String(localName))){
                    this.$scope.queryTerms = JSON.parse(window.localStorage.getItem(String(localName)));
                    this.queryTerms = this.$scope.queryTerms;
                }
            }
            

        }
    }

    protected onQuery(): void {
        
    }

    protected getListCount(): void {
        
    }

    

    
    /**
     * 重新加载数据
     */
    protected reload(ship?:number): void {
        if(this.$scope.queryTerms){this.queryTerms = this.$scope.queryTerms;};
        this.loadData(this.queryTerms, ship?(ship-1)*10:0, this.paginationOptions.pageSize);
    }

    protected abstract loadData(queryTerms: TQueryTerms, skip: number, count: number): void;
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




