import NProgress from 'nprogress'
import router from './router'
import store from './store'
import layout from './layout'

const filterAsyncRouter = (routers) => {
  // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = routers.filter((router) => {
    router.meta = router.meta || { title: '', icon: '' }
    if (router.component === '@/layout') {
      router.component = layout
    } else {
      router.component = loadView(router.component)
    }

    // 存在子集
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })

  return accessedRouters
}

const loadView = (view) => {
  return () => import(`@/views/${view.replace('@/views/', '')}`)
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if (!store.getters.menus || !store.getters.menus.length) {
    const data = await store.dispatch('getMenus')
    const menus = filterAsyncRouter(data)
    router.addRoutes(menus)
    next({ ...to, replace: true })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
