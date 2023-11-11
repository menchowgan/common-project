import { Plan } from "@/utils/interfaces"
import { PlanManager } from "@/utils/managers"

export default function usePlan() {
  const planManager = new PlanManager()

  const list = reactive<Plan[]>([])

  const search = async (userId: number) => {
    const content = await planManager.search(userId)
    if (content) {
      const l = JSON.parse(content)
      list.push(...l)
    }
  }

  return {
    list,
    search
  }
}