import InfoManager from "./manager"

export default class InfoGetter {
  public static async query(manager: InfoManager, userid: number) {
    const res = await manager.query(userid)
    return res
  }
}