import { useWindowSize } from "@vueuse/core"

export default function useUserAgent() {
  const { height, width } = useWindowSize()

  const isMoble = computed(() => {
    return width.value < height.value
  })

  watch(() => width.value, (val: number) => {
    if (val > 2000) {
      document.body.style.fontSize = 32 + 'px'
    } else {
      document.body.style.fontSize = 24 + 'px'
    }
  }, {
    immediate: true
  })

  return {
    isMoble
  }
}