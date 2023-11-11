import GMessage from "./components/GMessage"
import { createVNode, render, VNode } from "vue";

const div = document.createElement("div")

document.body.appendChild(div)

let timer: any = null

interface OptModel {
  type: 'success' | 'warn' | 'error'
  timeout?: number
}

export default (message: string | VNode, options: OptModel): void => {
  const vnode = createVNode(GMessage, {message, ...options})
  
  render(vnode, div)

  timer && clearTimeout(timer)
  let timeout = 3500
  if (options?.timeout) {
    timeout = options.timeout
  }
  timer = setTimeout(() => {
    render(null, div)
  }, timeout);
}