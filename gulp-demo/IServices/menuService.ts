import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'

/**
 * 用户可用菜单列表
 */
interface MenuListItemResponse {
    name:string,
    menu_child:Array<MenuChildListResponse>
}

interface MenuChildListResponse{
    name:string
}

//result
interface menuService{
    /**
     * 获取用户可用菜单
     */
    getMenu(): Promise<ListResponse<MenuListItemResponse>>;
}

export default menuService;