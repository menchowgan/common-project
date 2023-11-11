import { request } from '@/utils/http';

export default class PhotosManager {
  constructor() {
    
  }

  /**
   * deleteUserPhoto
   */
  public async deleteUserPhoto(url: string): Promise<boolean> {
    try {
      const res = await request("DELETE_UPLOAD", {url});
      if (res.code === 200) {
        return true
      }
      return false
    } catch (e) {
      return false
    }
  }
}