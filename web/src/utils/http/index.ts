import { instance, Axios } from './utils/instance'
import CONFIG_METHODS, { ConfigModel } from "./utils/Config"
import { AxiosRequestConfig } from 'axios'

interface ResponseType<T> {
  code: number
  message?: string
  data: T
}

function urlReplace(url: string, params: any) {
  return url.replace(/\{(\w+)\}/g, (_, $2) => {
    return params?.[$2]
  })
}

interface RequestConfig<D> extends AxiosRequestConfig<D> {
  loading?: boolean
}

function request<T = any, D = any>(requestName: string, configOpts?: RequestConfig<D> ): Promise<ResponseType<T>>
function request<T = any, D = any>(requestName: string, params?: any, configOpts?: RequestConfig<D>): Promise<ResponseType<T>>
function request<T = any, D = any>(requestName: string, params?: any, conf?: RequestConfig<D>): Promise<ResponseType<T>> {
  const config = CONFIG_METHODS[requestName] as ConfigModel
  const method = config!.method

  let url = ""
  switch (method) {
    case "get":
    case "GET":
      if (params) {
        if (conf?.params) {
          Object.assign(conf.params, params)
        } else {
          conf = {
            params
          }
        }
      }
      if (conf) {
        url = urlReplace(config.url, conf.params)
      }
      return instance.get(url, conf)
    case "post":
    case "POST":
      if (params) {
        url = urlReplace(config.url, params)
      }
      return instance.post(url, params, conf)
    case "put":
    case "PUT":
      if (params) {
        url = urlReplace(config.url, params)
      }
      return instance.put(url, params, conf)
    case "delete":
    case "DELETE":
      return instance.delete(config.url, conf)
    default:
      if (params) {
        config.url = urlReplace(config.url, params)
      }
      return instance.post(url, params, conf)
  }
}

export {
  type ResponseType,

  request,
  Axios
}