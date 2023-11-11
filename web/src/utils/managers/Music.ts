import { request } from '@/utils/http';
import { MusicModel } from "../interfaces"
import InfoManager from './manager';

export default class MusicManager implements InfoManager {
  constructor() { }

  /**
   * musicInfoUpload
   */
  public async musicInfoUpload(params: MusicModel): Promise<boolean> {
    try {
      const res = await request("MUSIC_USER_UPLOAD", params);
      console.log("user music info post", res);
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
  public async query(userId: number): Promise<MusicModel[] | null> {
    try {
      const res = await request("MUSIC_QUERY_BY_USERID", {userId});
      console.log("user music info post", res);
      return res.code === 200 ? res?.data : null
    } catch (e) {
      return null
    }
  }
}