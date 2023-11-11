import { defineComponent, ref, onMounted, readonly } from "vue";
import "./style.scss"

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "success",
    },
    fontSize: {
      type: Number,
      default: 3.6,
    },
    message: {
      type: [String, Object],
      default: "登录成功",
    },
    timeout: {
      type: Number,
      default: 3500,
    },
  },
  setup(props: any) {
    const styleModel = readonly({
      warn: {
        color: "#ffcf86",
        borderColor: "#ffcf86",
      },
      error: {
        color: "#ffa8a8",
        borderColor: "#ffa8a8",
      },
      success: {
        color: "#3fc7f5",
        borderColor: "#3fc7f5",
      },
    });

    const out = ref<Boolean>(false);

    onMounted(() => {
      let timeout = props.timeout;
      if (timeout < 1000) {
        timeout = 1000;
      }
      setTimeout(() => {
        out.value = true;
      }, timeout - 500);
    });

    return () => (
      <div 
        class={!out.value ? "g-message" : "out"}
        style={{
          ...((styleModel as any)[props.type] as any),
          fontSize: props.fontSize + "vh",
        }}>
        {props.message}
      </div>
    )
  },
});