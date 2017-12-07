import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 物流方列表返回数据实体
 */
interface LogisticsListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 所属地区
     */
    address: string;
    /**
     * 用户数
     */
    userCount: number;
    /**
     * 	最后登录时间
     */
    lastLoginTime: string;
}

/**
 * 物流方详细
 */
interface LogisticsDetailResponse extends BaseResponse {
    /**
     * 单位名称
     */
    name: string;
    /**
     * 所属省份
     */
    province: string;
    /**
     * 所属城市
     */
    city: string;
    /**
     * 所属区
     */
    area: string;
    /**
     * 详细地址
     */
    address: string;
    /**
     * 手机号
     */
    phoneNumber: string;
    /**
     * 管理员账户
     */
    adminName: string;
    /**
     * 是否启用
     */
    isEnabled: boolean;
}
/**
 * 获取自动审核信息
 */
interface getAutoAuditDetailResponse extends BaseResponse {
    /**
     * 是否自动审核费用
     */
    isAutoAuditFee:boolean;
    /**
     * 是否自动审核回单
     */
    isAutoAuditReceipt:boolean;
    /**
     * 运单限额
     */
    carrierOrderQuota:string;
    /**
     * 单笔限额
     */
    feeQuota:string;
}

/**
 * 变更自动审核费用开关返回数据
 */
interface changeIsAutoAuditFeeResponse extends BaseResponse{
    /**
     * 是否自动审核费用
     */
    isAutoAuditFee:boolean;
    /**
     * 是否自动审核回单
     */
    isAutoAuditReceipt:boolean;
    /**
     * 运单限额
     */
    carrierOrderQuota:string;
    /**
     * 单笔限额
     */
    feeQuota:string;
}

//result
/**
 * 物流方服务
 */
interface logisticsService {

    /**
     * 获取列表
     * v1.0
     * @param name 单位名称
     * @param province 所属省份编号
     * @param city 所属城市编号
     * @param area 所属区编号
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(name: string, province: string, city: string, area: string, skip: number, count: number): Promise<ListResponse<LogisticsListItemResponse>>;

    /**
     * 获取详细
     * v1.0
     * @param id 物流方编号
     */
    getDetail(id: string): Promise<LogisticsDetailResponse>;

    /**
     * 添加物流方
     * v1.0
     * @param name 单位名称
     * @param province 所属省份
     * @param city 所属城市
     * @param area 所属区
     * @param address 详细地址
     * @param adminName 管理员账户
     * @param phoneNumber 手机号
     * @param adminPassword 管理员密码
     * @param reAdminPassword 重复管理员密码
     * @param isEnabled 是否启用
     */
    add(name: string, province: string, city: string, area: string, address: string, adminName: string, phoneNumber: string, adminPassword: string, reAdminPassword: string, isEnabled: boolean): Promise<BaseResponse>;

    /**
     * 编辑物流方
     * v1.0
     * @param id 需要编辑的物流方编号
     * @param name 单位名称
     * @param province 所属省份
     * @param city 所属城市
     * @param area 所属区
     * @param address 详细地址
     * @param adminName 管理员账户
     * @param phoneNumber 手机号
     * @param adminPassword 管理员密码
     * @param reAdminPassword 重复管理员密码
     * @param isEnabled 是否启用
     */
    edit(id: string, name: string, province: string, city: string, area: string, address: string, phoneNumber: string, adminPassword: string, reAdminPassword: string, isEnabled: boolean): Promise<BaseResponse>;

    /**
     * 删除物流方
     * v1.0
     * @param id 删除的物流方编号
     */
    delete(id: string): Promise<BaseResponse>;

    /**
     * 获取自动审核信息
     */
    getAutoAuditDetail():Promise<getAutoAuditDetailResponse>;

    /**
     * 变更自动审核费用开关
     */
    changeIsAutoAuditFee():Promise<changeIsAutoAuditFeeResponse>
}

export default logisticsService;

