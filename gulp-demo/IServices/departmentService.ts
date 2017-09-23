import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 部门列表项
 */
interface DepartmentListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 部门名称
     */
    name:string;
    /**
     * 权限数
     */
    authorizationCount: number;
    /**
     * 用户数
     */
    userCount: number;
    /**
     * 专员类型
     */
    types: string;
}

/**
 * 部门详情
 */
interface DepartmentDetailResponse extends BaseResponse {
    /**
     * 部门名称
     */
    name: string;
    /**
     * 权限值
     */
    roles: Array<string>;
    /**
     * 专员类型
     */
    types: Array<string>;
}

//result
/**
 * 部门服务
 */
interface departmentService {

    /**
     * 获取列表
     * v1.0
     * @param name 部门名称
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(name: string, skip: number, count: number): Promise<ListResponse<DepartmentListItemResponse>>;

    /**
     * 获取详细
     * v1.0
     * @param id 部门编号
     */
    getDetail(id: string): Promise<DepartmentDetailResponse>;

    /**
     * 添加部门
     * v1.0
     * @param name 部门名称
     * @param roles 权限值
     * @param types 专员类型
     */
    add(name: string, roles: Array<string>, types: Array<string>): Promise<BaseResponse>;

    /**
     * 编辑部门
     * v1.0
     * @param id 部门编号
     * @param name 部门名称
     * @param roles 权限值
     * @param types 专员类型
     */
    edit(id: string, name: string, roles: Array<string>, types: Array<string>): Promise<BaseResponse>;

    /**
     * 删除部门
     * v1.0
     * @param id 部门编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default departmentService;


