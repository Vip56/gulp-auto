import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 员工列表输出项
 */
interface EmployeeListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 真实姓名
     */
    realName: string;
    /**
     * 手机号
     */
    phoneNumber: string;
    /**
     * 部门
     */
    department: string;
    /**
     * 最后登录时间
     */
    lastLoginTime: string;
    /**
     * 专员类型
     */
    types: string;
}

/**
 * 员工详细
 */
interface EmployeeDetailResponse extends BaseResponse {
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
     * 真实姓名
     */
    realName: string;
    /**
     * 性别
     */
    sex: boolean;
    /**
     * 是否启用
     */
    isEnabled: boolean;
    /**
     * 用户组编号
     */
    userGroupId: string;
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
 * 员工服务
 */
interface employeeService {
    /**
     * 获取列表
     * v1.0
     * @param type 专员类型
     * @param userName 用户名
     * @param realName 真实姓名
     * @param phoneNumber 手机号
     * @param departmentId 所属部门
     * @param isEnabled 是否启用
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(type: string, userName: string, realName: string, phoneNumber: string, departmentId: string, isEnabled:boolean, skip: number, count: number): Promise<ListResponse<EmployeeListItemResponse>>;

    /**
     * 获取详细
     * v1.0
     * @param id 员工编号
     */
    getDetail(id: string): Promise<EmployeeDetailResponse>;

    /**
     * 添加员工
     * v1.0
     * @param userName 用户名
     * @param password 密码
     * @param rePassword 重复密码
     * @param email 邮箱
     * @param phoneNumber 手机号
     * @param realName 真实姓名
     * @param sex 性别
     * @param isEnabled 是否启用
     * @param userGroupId 用户组编号
     * @param roles 权限值
     * @param types 专员类型
     */
    add(userName: string, password: string, rePassword: string, email: string, phoneNumber: string, realName: string, sex: string, isEnabled: boolean, userGroupId: string, roles: Array<string>, types: Array<string>): Promise<BaseResponse>;

    /**
     * 编辑员工
     * v1.0
     * @param id 修改的员工编号
     * @param password 密码
     * @param email 邮箱
     * @param phoneNumber 手机号
     * @param realName 真实姓名
     * @param sex 性别
     * @param isEnabled 是否启用
     * @param userGroupId 用户组编号
     * @param roles 权限值
     * @param types 专员类型
     */
    edit(id: string, password: string, email: string, phoneNumber: string, realName: string, sex: string, isEnabled: boolean, userGroupId: string, roles: Array<string>, types: Array<string>): Promise<BaseResponse>;
}

export default employeeService;

