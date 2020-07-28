import service from './service'

// 获取当前用户信息
export const getUser = (params) => {
  return service.get('/getUser', { params })
}

// 获取用户所属菜单
export const getMenu = (params) => {
  return service.get('/getMenu', { params })
}