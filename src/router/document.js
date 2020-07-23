export default [
  {
    name: 'document',
    path: '/document',
    meta: {
      title: '文档管理',
    },
    component: () => import('@/layout'),
    children: [
      {
        name: 'documentList',
        path: '/document/list',
        meta: {
          title: '文档管理',
        },
        component: () => import('@/views/document/index.vue'),
      },
      {
        name: 'documentAdd',
        path: '/document/add',
        meta: {
          title: '新增文档',
        },
        component: () => import('@/views/document/add.vue'),
      },
    ],
  },
]
