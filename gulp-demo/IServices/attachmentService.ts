import {AjaxResponse,ErrorInfo,ValidationErrorInfo,ListResponse,BaseResponse,CommissionerType,IBaseViewModel,angucomplete} from '../tms'
/**
 * 上传文件
 */
interface postAttachmentResponse extends BaseResponse {
    filePath: string
}
//result
/**
 * 文件服务  attachmentService
 */
interface attachmentService {
    /**
     * 上传文件
     * @param id 附件编号
     */
    postAttachment(): Promise<postAttachmentResponse>;
    /**
     * 下载文件
     */
    getAttachment(id: string): Promise<BaseResponse>;

    getAttachmentStr(id:string):Promise<BaseResponse>;
}

export default attachmentService