import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 线路报价列表返回数据实体
 */
interface LinePriceListItemResponse {
    /**
     * 标识符
     */
    id: string;
    /**
     * 序号
     */
    index: number;
    /**
     * 起始地
     */
    beginAddress: string;
    /**
     * 目的地
     */
    endAddress: string;
    /**
     * 吨位范围
     */
    tonnageRange: string;
    /**
     * 货物类别
     */
    goodTypeName: string;
    /**
     * 车长
     */
    carLength: string;
    /**
     * 线路报价
     */
    price: number;
    /**
     * 价格状态
     */
    priceState: string
}

/**
* 线路价格详情返回数据实体
*/
interface LinePriceDetailResponse extends BaseResponse {

    /**
     * 企业公司编号
     */
    enterpriseCompanyId: string;
    /**
     * 开始时间
     */
    openTime: string;
    /**
     * 货物编号
     */
    goodsId: string;
    /**
     * 结束时间
     */
    closeTime: string;
    /**
     * 起始地省
     */
    startProvince: string;
    /**
     * 起始地市
     */
    startCity: string;
    /**
     * 起始地区
     */
    startArea: string;
    /**
     * 目的地省
     */
    endProvince: string;
    /**
     * 目的地市
     */
    endCity: string;
    /**
     * 目的地区
     */
    endArea: string;
    /**
     * 吨数范围
     */
    tonnageRange: string;
    /**
     * 运费价格
     */
    price: number;
    /**
     * 运费价格单位
     */
    priceUnit: string;
    /**
     * 货物类别编号
     */
    goodsTypeId: string;
    /**
     * 装车类型
     */
    loodingType: string;
    /**
     * 车长
     */
    carLength: string;
    /**
     * 结算方式
     */
    setleWay: string;
    /**
     * 是否含税
     */
    priceType: string;
    /**
     * 公里数
     */
    mileage: number;
    /**
     * 价格状态
     */
    priceState: string;
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
     * 备注
     */
    remarks: string;
}

//result
/**
 *线路报价服务 
 */
interface linePriceService {
    /**
     * 获取线路报价列表
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param goodtypeid 货物类别编号
     * @param pricestate 价格状态
     * @param beginprovince 起始地省
     * @param begincity 起始地市
     * @param beginarea 起始地区
     * @param endprovince 目的地省
     * @param endcity 目的地市
     * @param endarea 目的地区
     * @param Tonrange 吨位范围
     * @param GoodsId 货物编号
     * @param beginAddress 起始地
     * @param endAddress 目的地
     * @param skip 跳过项数
     * @param count 获取项数
     */
    getList(enterpriseCompanyId: string, goodtypeid: string, pricestate: string, beginprovince: string, begincity: string, beginarea: string, endprovince: string, endcity: string, endarea: string, Tonrange: string, GoodsId: string,beginAddress:string,endAddress:string,skip: number, count: number): Promise<ListResponse<LinePriceListItemResponse>>;

    /**
     * 获取线路价格详细
     * v1.0
     * @param id 线路报价编号
     */
    getDetail(id: string): Promise<LinePriceDetailResponse>;

    /**
     * 编辑线路报价
     * v1.0
     * @param id 需要编辑的线路报价编号
     * @param enterpriseCompanyId 企业公司编号
     * @param openTime 开始时间
     * @param goodsId 货物编号
     * @param closeTime 结束时间
     * @param startProvince 起始地省
     * @param startCity 起始地市
     * @param startArea 起始地区
     * @param endProvince 目的地省
     * @param endCity 目的地市
     * @param endArea 目的地区
     * @param tonnageRange 吨数范围
     * @param price 运费价格
     * @param priceUnit 运费价格单位
     * @param goodsTypeId 货物类别编号
     * @param loodingType 装车类型
     * @param carLength 车长
     * @param setleWay 结算方式
     * @param priceType 是否含税
     * @param mileage 公里数
     * @param priceState 价格状态
     * @param settleName 收货单位
     * @param settleContact 收货人
     * @param settlePhone 收货人联系电话
     * @param remarks 备注
     */
    edit(id: string, enterpriseCompanyId: string, openTime: string, goodsId: string, closeTime: string, startProvince: string, startCity: string, startArea: string, endProvince: string, endCity: string, endArea: string, tonnageRange: string, price: number, priceUnit: string, goodsTypeId: string, loodingType: string, carLength: string, setleWay: string, priceType: string, mileage: number, priceState: string, settleName: string, settleContact: string, settlePhone: string, remarks: string): Promise<BaseResponse>;

    /**
     * 添加线路报价
     * v1.0
     * @param enterpriseCompanyId 企业公司编号
     * @param openTime 开始时间
     * @param goodsId 货物编号
     * @param closeTime 结束时间
     * @param startProvince 起始地省
     * @param startCity 起始地市
     * @param startArea 起始地区
     * @param endProvince 目的地省
     * @param endCity 目的地市
     * @param endArea 目的地区
     * @param tonnageRange 吨数范围
     * @param price 运费价格
     * @param priceUnit 运费价格单位
     * @param goodsTypeId 货物类别编号
     * @param loodingType 装车类型
     * @param carLength 车长
     * @param setleWay 结算方式
     * @param priceType 是否含税
     * @param mileage 公里数
     * @param priceState 价格状态
     * @param settleName 收货单位
     * @param settleContact 收货人
     * @param settlePhone 收货人联系电话
     * @param remarks 备注
     */
    add(enterpriseCompanyId: string, openTime: string, goodsId: string, closeTime: string, startProvince: string, startCity: string, startArea: string, endProvince: string, endCity: string, endArea: string, tonnageRange: string, price: number, priceUnit: string, goodsTypeId: string, loodingType: string, carLength: string, setleWay: string, priceType: string, mileage: number, priceState: string, settleName: string, settleContact: string, settlePhone: string, remarks: string): Promise<BaseResponse>;
    /**
     * 删除线路报价
     */
    delete(id:string):Promise<BaseResponse>;
}

export default linePriceService;