import { GMessage } from "@/plugins"

const isFunction = (args: unknown): args is Function => {
  return args instanceof Function
}

const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return !!val && isFunction((val as any).then) && isFunction((val as any).catch)
}

const isArray = (arg: unknown): arg is Array<Function> => {
  return arg instanceof Array
}

export function callWithErrHandler(fn: Function, args?: unknown | unknown[], errHandle?: Function): unknown
export function callWithErrHandler(fn: Function, errHandle: Function): unknown
export function callWithErrHandler(fn: Function, errHandleOrArgs: any, errHandle?: Function): unknown {
  const errHandleOrArgsIsFunction = isFunction(errHandleOrArgs)
  const args = !errHandleOrArgsIsFunction
                  ? !(errHandleOrArgs instanceof Array)
                      ? [errHandleOrArgs]
                      : errHandleOrArgs
                  : null

  let res: unknown
  try {
    res = args ? fn(...args) : fn()
  } catch (e) {
    if (errHandleOrArgsIsFunction) {
      errHandleOrArgs(e)
    } else if (errHandle && isFunction(errHandle)) {
      errHandle(e)
    } else {
      GMessage((e as Error).message || String(e), {
        type: "error"
      })
    }
  }
  return res
}

export function callAsyncWithErrHandler(fn: Function | Function[], args?: unknown, errHandle?: Function): any | any[]
export function callAsyncWithErrHandler(fn: Function | Function[], errHandle: Function | Function[]): any | any[]
export function callAsyncWithErrHandler(fn: Function | Function[], errHandleOrArgs: any, errHandle?: Function | Function[]): any | any[] {
  if(isFunction(fn)) {
    const res = callWithErrHandler(fn as Function, errHandleOrArgs)
    if (res && isPromise(res)) {
      res.catch(e => {
        if (errHandle && isFunction(errHandle)) {
          (errHandle as Function)(e)
        } else if (isArray(errHandle)) {
          errHandle[0](e)
        } else {
          GMessage((e as Error).message || String(e), {
            type: "error"
          })
        }
      })
    }
    return res
  }

  const values: any[] = []
  errHandle = !isArray(errHandle) ? [errHandle] as Function[] : errHandle
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithErrHandler((fn as Function[])[i], errHandleOrArgs, (errHandle as Function[])[i]))
  }
  return values
}

export function showError(e: Error, arg?: any){
  GMessage((e as Error).message || String(e), arg || {
    type: "error"
  })
}