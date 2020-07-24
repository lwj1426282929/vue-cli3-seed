import service from './service'

// 获取当前用户信息
export const getUser = (params) => {
  return service.get('/getUser', { params })
}

// 获取用户所属菜单
export const getMenus = (params) => {
  return service.get('/getMenus', { params })
}

// 获取用户列表
export const getUserList = (params) => {
  return service.get('/getUserList', { params })
}
