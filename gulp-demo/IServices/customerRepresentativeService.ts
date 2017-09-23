import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 客户代表列表返回数据实体
 */
interface CustomerRepresentativeListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 真实姓名
     */
    realName: string;
    /**
     * 职位
     */
    job: string;
    /**
     * 联系手机
     */
    phoneNumber: string;
    /**
     * 创建时间
     */
    createTime: string;
}

/**
 * 客户代表详情返回数据实体
 */
interface CustomerRepresentativeDetailResponse extends BaseResponse {
    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 姓名
     */
    realName: string;
    /**
     * 职务
     */
    job: string;
    /**
     * 手机号
     */
    phoneNumber: string;
    /**
     * 备注
     */
    remarks: string;
}

//result customerRepresentativeService
/**
 *客户代表服务 
 */
interface customerRepresentativeService {
    /**
     * 获取客户代表列表
     * v1.0
     * @param enterpriseid 企业公司编号
     * @param realName 姓名
     * @param job 职位
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseid: string, realName: string, job: string, skip: number, count: number): Promise<ListResponse<CustomerRepresentativeListItemResponse>>;

    /**
     * 获取客户代表详细
     * v1.0
     * @param id 客户代表编号
     */
    getDetail(id: string): Promise<CustomerRepresentativeDetailResponse>;

    /**
     * 编辑客户代表
     * v1.0
     * @param id 需要编辑的客户代表编号
     * @param enterpriseCompanyId 企业公司编号
     * @param realName 姓名
     * @param job 职位
     * @param phoneNumber 手机号
     * @param remarks 备注
     */
    edit(id: string, enterpriseCompanyId: string, realName: string, job: string, phoneNumber: string, remarks: string): Promise<BaseResponse>;

    /**
     * 添加客户代表
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param realName 姓名
     * @param job 职位
     * @param phoneNumber 手机号
     * @param remarks 备注
     */
    add(enterpriseCompanyId: string, realName: string, job: string, phoneNumber: string, remarks: string): Promise<BaseResponse>;

    /**
     * 删除客户代表
     * v1.0
     * @param id 需要删除的客户代表编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default customerRepresentativeService;

