import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 用户组列表返回数据实体
 */
interface UserGroupListItemResponse {
    /**
     * 主键
     */
    id: string;
    /**
     * 索引
     */
    index: number;
    /**
     * 用户组名称
     */
    name: string;
    /**
     * 权限数
     */
    authorizationCount: number;
    /**
     * 用户数
     */
    userCount: number;
}

/**
 * 用户组详细
 */
interface UserGroupDetailResponse extends BaseResponse {
    /**
     * 用户组名称
     */
    name: string;
    /**
     * 用户组权限
     */
    roles: Array<string>;

    /**
     * 专员类型组
     */
    commissionerType: Array<string>;
}

//result
/**
 * 用户组服务
 */
interface userGroupService {
    /**
     * 获取用户组列表
     * v1.0
     * @param name 用户组名称
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(name: string, skip: number, count: number): Promise<ListResponse<UserGroupListItemResponse>>;

    /**
     * 获取用户组详细
     * v1.0
     * @param id 用户组编号
     */
   getDetail(id: string): Promise<UserGroupDetailResponse>;

    /**
     * 添加用户组
     * v1.0
     * @param name 用户组名称
     * @param roles 用户组权限
     * @param roles 权限组
     */
    add(name: string, roles: Array<string>): Promise<BaseResponse>;

    /**
     * 编辑用户组
     * v1.0
     * @param id 用户组编号
     * @param name 用户组名称
     * @param roles 用户组权限
     * @param roles 权限组
     */
    edit(id: string, name: string, roles: Array<string>): Promise<BaseResponse>;

    /**
     * 删除用户组
     * v1.0
     * @param id 用户组编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default userGroupService;

