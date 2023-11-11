import { InfoModel } from "../interfaces";

export default abstract class InfoManager {
  public abstract query(userId: number): Promise<InfoModel[] | null>
}
