import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
  * 工程列表返回数据实体
  */
interface ProjectListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 工程编号
     */
    projectCode: string;
    /**
     * 工程名称
     */
    projectName: string;
    /**
     * 创建时间
     */
    createTime: string;
    /**
     * 上限值
     */
    maxTon: string
}

/**
 * 工程详情返回数据实体
 */
interface ProjectDetailResponse extends BaseResponse {

    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 工程名称
     */
    projectName: string;
    /**
     * 工程编号
     */
    projectCode: string;
    /**
     * 上限值
     */
    maxValue: number;
    /**
     * 上限值单位
     */
    maxUnit: string;
    /**
     * 收货单位
     */
    settleName: string;
    /**
     * 收货人
     */
    settleContact: string;
    /**
     * 收货人联系电话
     */
    settlePhone: string;
    /**
     * 工程说明
     */
    remarks: string;
}

//result
/**
 *工程服务 
 */
interface projectService {
    /**
     * 获取工程列表
     * v1.0
     * @param enterpriseid 企业公司编号
     * @param projectcode 工程编号
     * @param projectname 工程名称
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseid: string, projectcode: string, projectname: string, skip: number, count: number): Promise<ListResponse<ProjectListItemResponse>>;

    /**
     * 获取工程详细
     * v1.0
     * @param id 工程编号
     */
    getDetail(id: string): Promise<ProjectDetailResponse>;

    /**
     * 编辑工程
     * v1.0
     * @param id 需要编辑的工程编号
     * @param enterpriseCompanyId 企业公司编号
     * @param projectName 工程名称
     * @param projectCode 工程编号
     * @param maxValue 上限值
     * @param maxUnit 上限值单位
     * @param settleName 收货单位
     * @param settleContact 收货人
     * @param settlePhone 收货人联系电话
     * @param remarks 工程说明
     */
    edit(id: string, enterpriseCompanyId: string, projectName: string, projectCode: string, maxValue: number, maxUnit: string, settleName: string, settleContact: string, settlePhone: string, remarks: string): Promise<BaseResponse>;

    /**
     * 添加工程
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param projectName 工程名称
     * @param projectCode 工程编号
     * @param maxValue 上限值
     * @param maxUnit 上限值单位
     * @param settleName 收货单位
     * @param settleContact 收货人
     * @param settlePhone 收货人联系电话
     * @param remarks 工程说明
     */
    add(enterpriseCompanyId: string, projectName: string, projectCode: string, maxValue: number, maxUnit: string, settleName: string, settleContact: string, settlePhone: string, remarks: string): Promise<BaseResponse>;

    /**
     * 删除工程
     * v1.0
     * @param id 需要删除的工程编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default projectService;