import { PropType } from "vue"

export function makeBooleanProp(defaultValue: boolean = false) {
  return {
    type: Boolean,
    default: defaultValue
  }
}

export function makeStringProp(defaultValue: string = '') {
  return {
    type: String,
    default: defaultValue
  }
}

export function makeNumericProp(defaultValue: number | string = 0) {
  return {
    type: [String, Number],
    default: defaultValue
  }
}

export function makeArrayProp<T>(defaultValue: T[] = []) {
  return {
    type: Array as PropType<T[]>,
    default: () => {
      return defaultValue
    }
  }
}