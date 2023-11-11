interface RotatingOption {
  /**
   * name
   * default "---g-rotate-style"
   */
  name?: string;
  /**
   * time
   * unit (s)
   * default 15
   */
  time?: number;
  /**
   * time line
   * such as 'linear'
   */
  timeLine?: string;
  /**
   * animation mode
   * such as 'infinite'
   */
  mode?: string;
  /**
   * keyFrameName
   * default '---rotating-key-frames'
   */
  keyFrameName?: string;
  /**
   * animation key frame
   * default `
   *    0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
   * `
   */
  keyFrame?: string;
}

export default function useRotate(
  target: Ref<any>,
  option: RotatingOption = {}
): any {
  const {
    name = "---g-rotate-style",
    time = 15,
    timeLine = "linear",
    mode = "infinite",
    keyFrameName = " ---rotating-key-frames",
    keyFrame = `
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    `,
  } = option;

  const style = document.createElement("style");
  style.innerHTML = `
    .${name} {
      animation: ${keyFrameName} ${time}s ${timeLine} ${mode};
    }
    @keyframes ${keyFrameName} {
      ${keyFrame}
    }
  `;
  document.head.appendChild(style);

  const rotating = ref(false);

  const toValue = (target: Ref<any>): HTMLElement => {
    if ("$el" in target.value) {
      return target.value.$el;
    }
    return target.value;
  };

  const clearClass = (el: HTMLElement) => {
    el.className = (el!.className as string).replace(name, "");
  };

  watchEffect(() => {
    if (!target.value) {
      return;
    }
    const el = toValue(target);
    if (rotating.value) {
      clearClass(el);
      el.className = `${el!.className} ${name}`;
    } else {
      clearClass(el);
    }
  });

  return {
    rotating,
  };
}
