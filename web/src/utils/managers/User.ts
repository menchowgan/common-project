import { request } from '@/utils/http';
import { callAsyncWithErrHandler, showError } from '../errHandling';
import { UserModel } from "../interfaces"

export default class UserManager {
  public static USER_ID = import.meta.env.SL_USER_ID

  constructor() {
    
  }

  public async searchSimpleLifeInfo(): Promise<UserModel | null> {
    try {
      const res = await request<UserModel>('SIMPLE_LIFE', {id: UserManager.USER_ID}, {loading: false})
      if (res?.code === 200) {
        if (!res.data?.article?.id) {
          res.data.article = undefined
        }
        if (!res.data?.video?.id) {
          res.data.video = undefined
        }
        return res.data
      }
      return null
    } catch (e) {
      return null
    }
  }

  public async searchById(id: number): Promise<UserModel | null> {
    const res = await callAsyncWithErrHandler(request, ["SEARCH_USER_BRIEF", id], (e: Error) => {
      showError(e)
      return null
    })
    return res?.data
  }
  
  public async getSimpleInfo(): Promise<UserModel | null> {
    const res = await callAsyncWithErrHandler(request, ["GET_USER_SIMPLE_INFO", UserManager.USER_ID], (e: Error) => {
      showError(e)
      return null
    })
    return res?.data
  }

  /**
   * infoPost
   */
  public async infoPost(info: UserModel): Promise<boolean> {
    const res = await callAsyncWithErrHandler(request, ["POST_USER_INFO", {
      ...info,
    }], (e: Error) => {
      showError(e)
      return false
    })
    return res?.code === 0
  }

  /**
   * getInfo
   */
  public async getInfo(userid: number): Promise<UserModel | null> {
    const res = await callAsyncWithErrHandler(request, ["GET_INFO", userid], (e: Error) => {
      showError(e)
      return null
    })
    return res.code === 200 ? res?.data : null
  }
}