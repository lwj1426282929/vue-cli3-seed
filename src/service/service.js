import axios from 'axios'
import { Notification } from 'element-ui'

const service = axios.create({
  responseType: 'json',
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 返回拦截器
service.interceptors.response.use(
  (response) => {
    let message = response.data.message
    if (message && message !== 'success') {
      Notification({
        title: '错误',
        type: 'error',
        message,
      })
    }
    return response.data
  },
  (error) => {
    Notification({
      title: '错误',
      type: 'error',
      message: error,
    })
    return Promise.reject(error)
  },
)

export default service
