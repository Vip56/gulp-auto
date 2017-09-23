import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 货物类别列表返回数据实体
 */
interface GoodsTypeListItemResponse {
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
     * 添加时间
     */
    createTime: string
}

/**
 * 货物类别详情返回数据实体
 */
interface GoodsTypeDetailResponse extends BaseResponse {

    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 货物类别名称
     */
    name: string;
    /**
     * 备注
     */
    remarks: string
}

//result
/**
 *货物类别服务 
 */
interface goodsTypeService {
    /**
     * 获取货物类别列表
     * v1.0
     * @param enterpriseid 企业公司编号
     * @param name 类别名称
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseid: string, name: string,  skip: number, count: number): Promise<ListResponse<GoodsTypeListItemResponse>>;

    /**
     * 获取货物类别详细
     * v1.0
     * @param id 需要获取的货物类别编号
     */
    getDetail(id: string): Promise<GoodsTypeDetailResponse>;

    /**
     * 编辑货物类别
     * v1.0
     * @param id 需要编辑的货物类别编号
     * @param enterpriseCompanyId 企业公司编号
     * @param name 货物类别名称
     * @param remarks 备注
     */
    edit(id: string, enterpriseCompanyId: string, name: string, remarks:string): Promise<BaseResponse>;

    /**
     * 添加货物类别
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param name 货物类别名称
     * @param remarks 备注
     */
    add(enterpriseCompanyId: string, name: string,remarks:string): Promise<BaseResponse>;

     /**
      * 删除货物类别
      * v1.0
      * @param id 需要删除的货物类别编号
      */
    delete(id:string):Promise<BaseResponse>;
}

export default goodsTypeService;

