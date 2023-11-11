import GMessage from "@/plugins/GMessage";
import { request } from "../http";
import { Plan } from "../interfaces";

export default class PlanManager {
  constructor() {}

  public async submit(userId: number, plans: Plan[]): Promise<boolean> {
    const params = {
      userId,
      content: JSON.stringify(plans)
    }
    try {
      const res = await request('PLAN_SUBMIT', params)
      if (res.code === 200) {
        return true
      }
      return false
    } catch (e) {
      GMessage((e as any).message, {
        type: 'error'
      })
      return false
    }
  }

  public async search(userId: number): Promise<string> {
    try {
      const res = await request("PLAN_SEARCH", {
        userId
      })
      if (res.code === 200) {
        return res.data?.content || "[]"
      }
      return "[]"
    } catch (e) {
      GMessage((e as any).message, {
        type: 'error'
      })
      return "[]"
    }
  }
}