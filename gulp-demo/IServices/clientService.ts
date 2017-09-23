import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 客户列表返回数据实体
 */
interface ClientListItemResponse {
        /**
         * 标识符
         */
        id:string;
        /**
         * 序号
         */
        index:number;
        /**
         * 客户单位名称
         */
        name:string;
        /**
         * 地址
         */
        address:string;
        /**
         * 地址详情
         */
        addressDetails:string;
        /**
         * 产品
         */
        products:string;
        /**
         * 付款方式
         */
        paidWay:string;
        /**
         * 商务专员
         */
        businessOfficer:string;
        /**
         * 录入时间
         */
        inputTime:string
    }
/**
* 客户单位详情返回数据实体
*/
interface ClientDetailResponse extends BaseResponse {
    /**
     * 客户单位短号
     */
    cornet: string;
    /**
     * 客户单位名称
     */
    name: string;
    /**
     * 客服专员编号
     */
    clientServiceOfficerId: string;
    /**
     * 商务专员编号
     */
    businessOfficerId: string;
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
     * 管理账户
     */
    adminUserName: string;
    /**
     * 管理密码
     */
    adminPassword: string;
    /**
     * 重复管理密码
     */
    reAdminPassword: string;
    /**
     * 手机号
     */
    phoneNumber: string;
    /**
     * 产品
     */
    products: string;
    /**
     * 产品包装方式
     */
    productPack: string;
    /**
     * 付款方式
     */
    paidWay: string;
    /**
     * 备注
     */
    remarks: string;
    /**
     * 合同编号
     */
    contractNumber:string;
}
//result
/**
 *客户服务 
 */
interface clientService {


    /**
     * 获取客户列表
     * v1.0
     * @param name 客户单位名称
     * @param businessOfficerId 商务专员编号
     * @param province 所属省份
     * @param city 所属城市
     * @param addressDetails 地址详情
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(name: string, businessOfficerId: string, province: string, city: string,addressDetails:string, skip: number, count: number): Promise<ListResponse<ClientListItemResponse>>;

    /**
     * 获取客户单位详细
     * v1.0
     * @param id 客户编号
     */
    getDetail(id: string): Promise<ClientDetailResponse>;
       /**
     * 编辑客户单位
     * v1.0
     * @param id 需要编辑的客户单位编号
     * @param name 客户单位名称
     * @param clientServiceOfficerId 客服专员编号
     * @param businessOfficerId 商务专员编号
     * @param province 所属省份
     * @param city 所属城市 
     * @param area 所属区
     * @param address 详细地址
     * @param adminPassword 管理密码
     * @param reAdminPassword 重复管理密码
     * @param phoneNumber 手机号
     * @param products 产品
     * @param productPack 产品包装方式
     * @param paidWay 付款方式
     * @param remarks 备注
     */
    edit(id: string, name: string, clientServiceOfficerId: string, businessOfficerId: string, province: string, city: string, area: string, address: string, adminPassword: string, reAdminPassword: string, phoneNumber: string, products: string, productPack: string, paidWay: string, remarks: string): Promise<BaseResponse>;
        /**
     * 添加客户单位
     * v1.0
     * @param name 客户单位名称
     * @param clientServiceOfficerId 客服专员编号
     * @param businessOfficerId 商务专员编号
     * @param province 所属省份
     * @param city 所属城市 
     * @param area 所属区
     * @param address 详细地址
     * @param adminPassword 管理密码
     * @param reAdminPassword 重复管理密码
     * @param phoneNumber 手机号
     * @param products 产品
     * @param productPack 产品包装方式
     * @param paidWay 付款方式
     * @param remarks 备注
     */
    add(name: string, clientServiceOfficerId: string, businessOfficerId: string, province: string, city: string, area: string, address: string, adminUserName: string, adminPassword: string, reAdminPassword: string, phoneNumber: string, products: string, productPack: string, paidWay: string, remarks: string): Promise<BaseResponse>;
}

export default clientService;

