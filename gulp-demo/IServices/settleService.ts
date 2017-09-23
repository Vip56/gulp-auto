import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 结算方列表返回数据实体
 */
interface SettleListItemResponse {
    /**
     * 	标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 单位名称
     */
    name: string;
    /**
     * 联系人
     */
    contactMan: string;
    /**
     * 联系电话
     */
    phoneNumber: string;
    /**
     * 添加时间
     */
    creatTime: string
}

/**
 * 结算方详情返回数据实体
 */
interface SettleDetailResponse extends BaseResponse {

    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 单位名称
     */
    name: string;
    /**
     * 联系人
     */
    contactMan: string;
    /**
     * 联系电话
     */
    phoneNumber: string;
    /**
     * 是否启用
     */
    isEnable: boolean;
    /**
     * 备注
     */
    remarks: string
}

//result
/**
 *结算方服务 
 */
interface settleService {
    /**
     * 获取结算方列表
     * v1.0
     * @param enterpriseid	企业公司编号
     * @param name 结算单位名称
     * @param contactman 联系人
     * @param enabled 是否启用
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseid: string, name: string, contactman: string, enabled: boolean, skip: number, count: number): Promise<ListResponse<SettleListItemResponse>>;

    /**
     * 获取结算方详细
     * v1.0
     * @param id 结算方编号
     */
    getDetail(id: string): Promise<SettleDetailResponse>;

    /**
     * 编辑结算方
     * v1.0
     * @param id 需要编辑的结算方编号
     * @param enterpriseCompanyId 企业公司编号
     * @param name 结算单位名称
     * @param contactman 联系人
     * @param phoneNumber 联系电话
     * @param string 是否启用
     * @param remarks 备注
     */
    edit(id: string, enterpriseCompanyId: string, name: string, contactMan: string, phoneNumber: string, isEnable: string, remarks: string): Promise<BaseResponse>;

    /**
      * 删除结算方
      * v1.0
      * @param id 需要删除的结算方编号
      */
    delete(id: string): Promise<BaseResponse>;

    /**
     * 添加结算方
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param name 单位名称
     * @param contactman 联系人
     * @param phoneNumber 联系电话
     * @param isEnabled 是否启用
     * @param remarks 备注
     */
    add(enterpriseCompanyId: string, name: string, contactMan: string, phoneNumber: string, isEnable: string, remarks: string): Promise<BaseResponse>;
}

export default settleService;

