import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 权限列表返回数据项
 */
interface AuthorizationListItemResponse {
    /**
     * 主键
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 权限Tag
     */
    tag: string;
    /**
     * 权限类别名称
     */
    category: string;
    /**
     * 权限级别
     */
    level: string;
    /**
     * 控制器名
     */
    controller: string;
    /**
     * 动作名
     */
    action: string;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 权限说明
     */
    description: string;
}

/**
 * 权限详细
 */
interface AuthorizationDetailResponse extends BaseResponse {
    /**
     * 权限tag
     * 权限Tag
     */
    tag: string;
    /**
     * 控制器
     */
    controller: string;
    /**
     * 动作
     */
    action: string;
    /**
     * 所属权限类别编号
     */
    categoryId: string;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 说明
     */
    description: string;
}

//result authorizationService
/**
 * 权限服务
 */
interface authorizationService {
    /**
     * 判断当前是否有该权限
     * v1.0
     * @param role 权限名称
     */
    auth(role: string): Promise<BaseResponse>;

    /**
     * 禁用权限
     * v1.0
     * @param id 权限编号
     * @param disabled 是否禁用（默认为启用）
     */
    disabled(id: string, disabled: boolean): Promise<BaseResponse>;
    /**
     * 获取列表
     * v1.0
     * @param tag 权限Tag
     * @param categoryId 所属权限分类编号
     */
    getList(tag: string, categoryid: string, skip: number, count: number): Promise<ListResponse<AuthorizationListItemResponse>>;

    /**
     * 获取详细
     * v1.0
     * @param id 权限编号
     */
    getDetail(id: string): Promise<AuthorizationDetailResponse>;

    /**
     * 添加权限
     * v1.0
     * @param tag 权限Tag
     * @param controller 控制器名称
     * @param action 动作名称
     * @param categoryId 所属权限分类编号
     * @param isEnabled 是否启用
     * @param description 说明
     */
    add(tag: string, controller: string, action: string, categoryId: string, isEnabled: boolean, description: string): Promise<BaseResponse>;

    /**
     * 编辑权限
     * v1.0
     * @param id 权限编号
     * @param tag 权限Tag
     * @param controller 控制器名称
     * @param action 动作名称
     * @param categoryId 所属权限分类编号
     * @param isEnabled 是否启用
     * @param description 说明
     */
    edit(id: string, tag: string, controller: string, action: string, categoryId: string, isEnabled: boolean, description: string): Promise<BaseResponse>;

    /**
     * 删除权限
     * v1.0
     * @param id 权限编号 
     */
    delete(id: string): Promise<BaseResponse>;
}


export default authorizationService