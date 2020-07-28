import router from './router'
import store from './store'
import layout from './views/layout'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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

  // 未登录
  if (!store.getters.token) {
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  } else {
    if (to.path === '/login') next({ path: '/' })

    if (!store.getters.user) store.dispatch('getUser')

    console.log('store.getters.menu', store.getters.menu)
    console.log('router.options.routes', router.options.routes)

    if (!store.getters.menu) {
      const data = await store.dispatch('getMenu')
      const menu = filterAsyncRouter(data)

      router.addRoutes(menu)

      next({ ...to, replace: true })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
