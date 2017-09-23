import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 货物列表返回数据实体
 */
interface GoodsListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 产品代号
     */
    productCode: string;
    /**
     * 产品名称
     */
    name: string;
    /**
     * 包装方式
     */
    packageMethod: string;
    /**
     * 货物类别
     */
    categoryName: string
}

/**
 * 货物详情返回数据实体
 */
interface GoodsDetailResponse extends BaseResponse {
    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 产品名称
     */
    name: string;
    /**
     * 产品代号
     */
    productCode: string;
    /**
     * 货物类别编号
     */
    categoryId: string;
    /**
     * 辅助工具
     */
    auxiliaryTool: string;
    /**
     * 包装方式
     */
    packageMethod: string;
    /**
     * 毛重换算率
     */
    gwRate: number;
    /**
     * 货物尺寸-长度
     */
    length: number;
    /**
     * 货物尺寸-宽度
     */
    width: number;
    /**
     * 货物尺寸-高度
     */
    height: number;
    /**
     * 货物容量
     */
    volume: string;
    /**
     * 货物重量
     */
    weight: number;
    /**
     * 货物重量单位
     */
    weightUnit: string;
    /**
     * 货物规格
     */
    goodNorms: string;
    /**
     * 赔偿方式
     */
    compensation: string;
    /**
     * 备注
     */
    remarks: string;
}

//result
/**
 *货物服务 
 */
interface goodsService {
    /**
     * 获取货物列表
     * v1.0
     * @param enterpriseid 企业公司编号
     * @param name 货物名称
     * @param goodtypeid 货物类别编号
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseid: string, name: string, goodtypeid: string, skip: number, count: number): Promise<ListResponse<GoodsListItemResponse>>;

    /**
     * 获取货物详细
     * v1.0
     * @param id 货物编号
     */
    getDetail(id: string): Promise<GoodsDetailResponse>;

    /**
     * 添加货物
     * v1.0
     * @param enterpriseCompanyId 企业公司编号 
     * @param name 产品名称
     * @param productCode 产品代号
     * @param categoryId 货物类别编号
     * @param auxiliaryTool 辅助工具
     * @param packageMethod 包装方式
     * @param gwRate 毛重换算率
     * @param length 货物尺寸-长度
     * @param width 货物尺寸-宽度
     * @param height 货物尺寸-高度
     * @param volume 货物容量
     * @param weight 货物重量
     * @param weightUnit 货物重量单位
     * @param goodNorms 货物规格
     * @param compensation 赔偿方式
     * @param remarks 备注
     */
    add(enterpriseCompanyId: string, name: string, productCode: string, categoryId: string, auxiliaryTool: string, packageMethod: string, gwRate: number, length: number, width: number, height: number, volume: string, weight: number, weightUnit: string, goodNorms: string, compensation: string, remarks: string): Promise<BaseResponse>;

    /**
     * 编辑货物
     * v1.0
     * @param id 需要编辑的货物编号
     * @param enterpriseCompanyId 企业公司编号 
     * @param name 产品名称
     * @param productCode 产品代号
     * @param categoryId 货物类别编号
     * @param auxiliaryTool 辅助工具
     * @param packageMethod 包装方式
     * @param gwRate 毛重换算率
     * @param length 货物尺寸-长度
     * @param width 货物尺寸-宽度
     * @param height 货物尺寸-高度
     * @param volume 货物容量
     * @param weight 货物重量
     * @param weightUnit 货物重量单位
     * @param goodNorms 货物规格
     * @param compensation 赔偿方式
     * @param remarks 备注
     */
    edit(id: string, enterpriseCompanyId: string, name: string, productCode: string, categoryId: string, auxiliaryTool: string, packageMethod: string, gwRate: number, length: number, width: number, height: number, volume: string, weight: number, weightUnit: string, goodNorms: string, compensation: string, remarks: string): Promise<BaseResponse>;

    /**
    * 删除货物
    * v1.0
    * @param id	需要删除的货物类别编号
    */
    delete(id: string): Promise<BaseResponse>;
}

export default goodsService;
