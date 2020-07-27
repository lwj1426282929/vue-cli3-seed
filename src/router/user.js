export default [
  {
    name: 'user',
    path: '/user',
    redirect: '/user/list',
    meta: {
      title: '用户管理',
      icon: 'plant-09',
    },
    component: () => import('@/views/layout'),
    children: [
      {
        name: 'userList',
        path: '/user/list',
        meta: {
          title: '用户管理',
          icon: 'plant-09',
        },
        component: () => import('@/views/user'),
      },
      {
        name: 'userAdd',
        path: '/user/add',
        meta: {
          title: '新增用户',
          icon: 'plant-09',
        },
        component: () => import('@/views/user/add.vue'),
      },
    ],
  },
]
