import axios from "axios"
import { App } from "vue";
import { GMessage, Loading } from '@/plugins';

const instance = axios.create({
  timeout: 1500,
  headers: {
    "Content-type": "application/json;charset=utf-8"
  }
})

const Axios = {
  install(app: App) {
    const appProps = app.config.globalProperties
    instance.interceptors.request.use(
      (config: any) => {
        if (config.loading ?? true) {
          Loading(true)
        }
        return config;
      },
      error => {
        Loading(false)
        GMessage("请求错误", {
          type: "error"
        })
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      response => {
        Loading(false)
        if (response.status === 200 && response.statusText === "OK") {
          return response.data
        }
        return null;
      },
      error => {
        Loading(false)
        GMessage(error.response.data.message || "请求错误", {
          type: "error"
        })
        return Promise.reject(error);
      }
    );
    appProps.axios = instance;
  }
}

export {
  instance,
  Axios
};