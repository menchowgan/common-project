import { request } from '@/utils/http';
import { callAsyncWithErrHandler, showError } from '../errHandling';
import { ArticleSimpleInfoModel } from "../interfaces"
import InfoManager from './manager';

export default class ArticleManager implements InfoManager {
  constructor() { }

  /**
   * queryById
   */
  public async queryById(articleId: string): Promise<ArticleSimpleInfoModel | null> {
    const res = await callAsyncWithErrHandler(request, ["ARTICLE_QUERY", {articleId}], (e: Error) => {
      showError(e)
      return null
    })
    return res.code === 200 ? res?.data : null
  }

  /**
   * queryBy user Id
   */
  public async query(userId: number): Promise<ArticleSimpleInfoModel[] | null> {
    const res = await callAsyncWithErrHandler(request, ["ARTICLE_QUERY_BY_USERID", {userId}], (e: Error) => {
      showError(e)
      return null
    })
    return res.code === 200 ? res?.data : null
  }

  public async queryByType(
    userid: number,
    type: string): Promise<Array<ArticleSimpleInfoModel>> {
    const res = await callAsyncWithErrHandler(request, [ 
      "ARTICLE_QUERY_BY_TYPE",
      {userid, type}
    ], 
    (e: Error) => {
      showError(e)
      return []
    })
    return res.code === 200 ? res.data : []
  }

  public async articleUpload(params: ArticleSimpleInfoModel): Promise<boolean> {
    const res = await callAsyncWithErrHandler(request, ["ARTICLE_UPLOAD", params], (e: Error) => {
      showError(e)
      return false
    })
    return res.code === 0
  }
}