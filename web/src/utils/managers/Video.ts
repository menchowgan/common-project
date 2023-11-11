import { request } from '@/utils/http';
import { VideoModel } from "../interfaces/index"

export default class VideoManager {
  constructor() {
    
  }

  /**
   * uploadUserVideo
   */
  public async uploadUserVideo(params: VideoModel): Promise<boolean> {
    try {
      const res = await request("VIDEO_USER_UPLOAD", params);
      console.log("user video info post", res);
      if (res.code === 0) {
        return true
      }
      return false
    } catch (e) {
      return false
    }
  }

  /**
   * queryBy user Id
   */
  public async query(userId: number): Promise<VideoModel[] | null> {
    try {
      const res = await request("VIDEO_QUERY_BY_USERID", {userId});
      console.log("user video info post", res);
      return res.code === 200 ? res?.data : null
    } catch (e) {
      return null
    }
  }
}