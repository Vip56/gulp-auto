import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 客户资料列表返回数据实体
 */
interface ClientInfoListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 资料名称
     */
    name: string;
    /**
     * 	资料类型
     */
    infoType: string;
    /**
     * 资料级别
     */
    infoLevel: string;
    /**
     * 创建时间
     */
    createTime: string;
}
/**
* 客户资料详情返回数据实体
*/
interface ClientInfoDetailResponse extends BaseResponse {
    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 资料名称
     */
    name: string;
    /**
     * 资料类别
     */
    infoType: string;
    /**
     * 资料级别
     */
    infoLevel: string;
    /**
     * 资料内容
     */
    content: string;
}

/**
 *客户资料服务 
 */
//result
interface clientInfoService {
    /**
     * 获取客户资料列表
     * v1.0
     * @param enterpriseId 企业公司编号
     * @param name 资料名称
     * @param infoType 资料类别
     * @param infoLevel 档案级别
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseid: string, name: string, infotype: string, infolevel: string, skip: number, count: number): Promise<ListResponse<ClientInfoListItemResponse>>;

    /**
     * 获取客户资料详细
     * v1.0
     * @param id 客户资料详细编号
     */
    getDetail(id: string): Promise<ClientInfoDetailResponse>;

    /**
     * 编辑客户资料
     * v1.0
     * @param id 需要编辑的客户资料编号
     * @param enterpriseCompanyId 企业公司编号
     * @param name 资料名称
     * @param infoType 资料类别
     * @param infoLevel 资料级别
     * @param content 资料内容
     */
    edit(id: string, enterpriseCompanyId: string, name: string, infoType: string, infoLevel: string, content: string): Promise<BaseResponse>;
    /**
     * 添加客户资料
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param name 资料名称
     * @param infoType 资料类别
     * @param infoLevel 资料级别
     * @param content 资料内容
     */
    add(enterpriseCompanyId: string, name: string, infoType: string, infoLevel: string, content: string): Promise<BaseResponse>;

    /**
     * 删除客户资料
     * v1.0
     * @param id 需要删除的客户资料编号
     */
    delete(id: string): Promise<BaseResponse>;
}

export default clientInfoService