import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 权限分类列表项
 */
interface AuthorizationTypeListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 分类名称
     */
    name: string;
    /**
     * 权限分类级别
     */
    level: string;
}

/**
 * 权限分类详细
 */
interface AuthorizationTypeDetailResponse extends BaseResponse {
    /**
     * 权限分类名称
     */
    name: string;
    /**
     * 权限分类级别
     */
    level: string;
}

//result authorizationTypeService
/**
 * 权限分类服务
 */
interface authorizationTypeService {
    /**
     * 获取列表
     * v1.0
     * @param name 权限分类名称
     */
    getList(name: string, skip: number, count: number): Promise<ListResponse<AuthorizationTypeListItemResponse>>;

    /**
     * 获取详细
     * v1.0
     * @param id 权限分类编号
     */
    getDetail(id: string): Promise<AuthorizationTypeListItemResponse>;

    /**
     * 添加权限分类
     * v1.0
     * @param name 查询的分类名称
     * @param name 权限分类名称
     * @param level 权限分类级别
     */
    add(name: string, level: string): Promise<BaseResponse>;

    /**
     * 编辑权限分类
     * v1.0
     * @param id 权限分类编号
     * @param name 查询的分类名称
     * @param name 权限分类名称
     * @param level 权限分类级别
     */
    edit(id: string, name: string, level: string): Promise<BaseResponse>;

    /**
     * 删除权限分类
     * v1.0
     * @param id 权限分类编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default authorizationTypeService
