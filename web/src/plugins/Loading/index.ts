import Loading from "./components/Loading.vue"
import { createVNode, render } from "vue";

const div = document.createElement("div")

document.body.appendChild(div)

const oldvnode = createVNode(Loading, { loading: false })
render(oldvnode, div)
export default (loading: boolean) => {
  const newvnode = createVNode(Loading, { loading })
  render(newvnode, div)
  div.style.display = "block"
  div.addEventListener("click", () => {
    div.style.display = "none"
  })
}