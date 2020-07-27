import service from './service'

// 获取用户列表
export const getUserList = (params) => {
  return service.get('/getUserList', { params })
}
