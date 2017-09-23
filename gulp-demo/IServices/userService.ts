import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 用户列表返回数据实体
 */
interface UserListItemResponse {
    /**
     * 标识符
     */
    id:number;
    /**
     * 序列号
     */
    index: number;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 手机号
     */
    phoneNumber: string;
    /**
     * 用户组名称
     */
    userGroup: string;
    /**
     * 创建时间
     */
    createTime: string;
    /**
     * 最后登录时间
     */
    lastLoginTime: string;
    /**
     * 是否启用
     */
    isEnabled: boolean
}

/**
 * 用户详情返回数据实体
 */
interface UserDetailResponse extends BaseResponse {
    /**
     * 真实姓名
     */
    realName:string;
    /**
     * 融云头像
     */
    rongAvatar:string;
    /**
     * 标识符
     */
    extData:string;
    /**
     * 错误信息
     */
    errorMsg:string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 手机号
     */
    phoneNumber: string;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 用户组编号
     */
    userGroupId: string;
    /**
     * 权限数组
     */
    roles: Array<string>;
}

/**
 * 验证申领密码
 */
interface checkApplyPasswordResponse extends BaseResponse{
    /**
     * 密码是否正确
     */
    isRightPassword:boolean;
    /**
     * 申领tonken
     */
    applyToken:string;
}

/**
 * 根据原申请密码修改申领密码 
 */
interface updateApplyPassword extends BaseResponse{
    /**
     * 用户编号
     */
    id:string;
    /**
     * 原密码
     */
    oldPassword:string;
    /**
     * 密码
     */
    password:string;
    /**
     * 重复密码
     */
    rePassword:string;
}

//result
/**
 *用户服务
 */
interface userService {
    /**
     * 获取用户列表
     * v1.0
     * @param userName 用户名
     * @param phoneNumber 手机号
     * @param isEnabled 是否启用
     * @param userGroupId 用户组编号
     */
    getList(userName: string, phoneNumber: string, isEnabled: boolean, userGroupId: string, skip: number, count: number): Promise<ListResponse<UserListItemResponse>>;

    /**
     * 获取用户详细
     * v1.0
     * @param id 用户编号
     */
    getDetail(id: string): Promise<UserDetailResponse>;

    /**
     * 编辑用户
     * v1.0
     * @param id 用户编号
     * @param password 密码
     * @param rePassword 重复密码
     * @param email 邮箱
     * @param phoneNumber 手机号
     * @param isEnabled 是否启用
     * @param userGroupId 用户组编号
     * @param roles 权限数组
     */
    edit(id: string, password: string, rePassword: string, email: string, phoneNumber: string, isEnabled: boolean, userGroupId: string, roles: Array<string>): Promise<BaseResponse>;

    /**
     * 修改密码
     * v1.0
     * @param id 需要编辑的用户编号
     * @param oldPassword 原密码
     * @param password 密码
     * @param rePassword 重复密码
     */
    updatePassword(id: string, oldPassword: string, password: string, rePassword: string): Promise<BaseResponse>;

    /**
     * 添加用户
     * v1.0
     * @param userName 用户名
     * @param password 密码
     * @param rePassword 重复密码
     * @param email 邮箱
     * @param phoneNumber 手机号
     * @param isEnabled 是否启用
     * @param userGroupId 用户组编号
     * @param roles 权限组
     */
    add(userName: string, password: string, rePassword: string, email: string, phoneNumber: string, isEnabled: boolean, userGroupId: string, roles: Array<string>): Promise<BaseResponse>;

    /**
     * 获取容云Token
     * v1.0
     */
    getRongToken(): Promise<BaseResponse>;

    /**
     * 验证申领密码
     */
    checkApplyPassword(applyPassword:string):Promise<checkApplyPasswordResponse>;

    /**
     * 根据原申请密码修改申请密码
     * @param id 用户编号
     * @param oldPassword 原密码
     * @param password 密码
     * @param rePassword 重复密码
     */
    updateApplyPassword(id: string, oldPassword: string, password: string, rePassword: string): Promise<BaseResponse>;
}
export default userService;


