import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 登录输出数据，是否登录成功
 */
interface LoginOutPutListItemResponse extends BaseResponse {
    /**
     * 用户编号
     */
    id:number;
    /**
     * 用户名
     */
    userName:string;
    /**
     * 真实姓名
     */
    realName:string;
    /**
     * 部门名称
     */
    userGroup:string;
    /**
     * 专员类型
     */
    commissionerType:Array<string>;
    /**
     * 融云Token
     */
    rongToken:string;
}


//result
/**
 *登录服务 
 */
interface loginService {
    /**
     * 登录
     * @param userName 用户名
     * @param password 密码
     */
    login(userName: string, password:string): Promise<LoginOutPutListItemResponse>;
    /**
     * 登出
     */
    loginOut(): Promise<any>;
    /**
     * 是否登录
     */
    isLogin(): Promise<any>;
}

export default loginService;