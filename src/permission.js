import router from './router'
import NProgress from 'nprogress'
import layout from './layout'

const filterAsyncRouter = (routers) => {
  // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = routers.filter((router) => {
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

  if (to.path === '/login') {
    next({ path: '/' })
    NProgress.done()
  } else {
    const res = [
      {
        name: 'user',
        path: '/user',
        redirect: '/user/list',
        meta: {
          title: '用户管理',
          icon: 'plant-09',
        },
        component: '@/layout',
        children: [
          {
            name: 'userList',
            path: '/user/list',
            meta: {
              title: '用户管理',
              icon: 'plant-09',
            },
            component: '@/views/user',
          },
          {
            name: 'userAdd',
            path: '/user/add',
            meta: {
              title: '新增用户',
              icon: 'plant-09',
            },
            component: '@/views/user/add',
          },
        ],
      },
      {
        name: 'document',
        path: '/document',
        meta: {
          title: '文档管理',
        },
        component: '@/layout',
        children: [
          {
            name: 'documentList',
            path: '/document/list',
            meta: {
              title: '文档管理',
            },
            component: '@/views/document',
          },
          {
            name: 'documentAdd',
            path: '/document/add',
            meta: {
              title: '新增文档',
            },
            component: '@/views/document/add',
          },
        ],
      },
    ]
    const menus = filterAsyncRouter(res)
    router.addRoutes(menus)
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done()
})
