type Opt = {
  [key: string]: string
}

export const dateFormat = (fmt: string, date: Date) => {
  let ret;
  const opt: Opt = {
      "y+": date.getFullYear().toString(),        // 年
      "M+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "h+": date.getHours().toString(),           // 时
      "m+": date.getMinutes().toString(),         // 分
      "s+": date.getSeconds().toString()          // 秒
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

export const timeFormat = (time: number): string => {
  if (!Math.floor(time)) {
    return '00:00:00'
  }
  const t: string[] = []
  const dr = Math.floor(time)

  let i = 0
  let h = dr

  while (h > 0) {
    let _h = Math.floor(h / (3600 / Math.pow(60, i)))
    let _rest = h % (3600 / Math.pow(60, i))
    if (_h > 0) {
      t.push(`${_h}`.padStart(2, '0'))
    } else {
      t.push('00')
    }
    h = _rest
    i++
  }

  return t.join(':')
}

export const getWelcome = () => {
  const hour = new Date().getHours()
  if (hour >= 19 || hour < 7) {
    return "晚上好!"
  } else if (hour >= 7 && hour < 11) {
    return "上午好!"
  } else if (hour >= 11 && hour < 13) {
    return "中午好!"
  } else if (hour >= 13 && hour < 19) {
    return "下午好!"
  }
}