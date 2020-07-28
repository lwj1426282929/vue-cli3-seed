import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, getMenu } from '@/service'

Vue.use(Vuex)

// 创建 VueX 对象
const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
    menu: null,
  },

  getters: {
    token: (state) => state.token || sessionStorage.getItem('token'),
    user: (state) => state.user || JSON.parse(sessionStorage.getItem('user')),
    menu: (state) => state.menu || JSON.parse(sessionStorage.getItem('menu')),
  },

  mutations: {
    SET_TOKEN: (state, data) => {
      sessionStorage.setItem('token', data)
      state.token = data
    },

    SET_USER: (state, data) => {
      sessionStorage.setItem('user', JSON.parse(data))
      state.user = data
    },

    SET_MENU: (state, data) => {
      sessionStorage.setItem('menu', JSON.parse(data))
      state.menu = data
    },
  },

  actions: {
    // 请求当前用户信息
    getUser({ commit }) {
      return getUser().then((res) => {
        res.data = {
          name: '赖维健',
          avatar:
            'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        }

        commit('SET_USER', res.data)

        return res.data
      })
    },

    // 请求用户菜单
    getMenu({ commit }) {
      return getMenu().then((res) => {
        res.data = [
          {
            name: 'user',
            path: '/user',
            redirect: '/user/list',
            meta: {
              title: '用户管理',
              icon: 'users',
            },
            component: '@/views/layout',
            children: [
              {
                name: 'userList',
                path: '/user/list',
                meta: {
                  title: '用户管理',
                  icon: 'users',
                },
                component: '@/views/user',
              },
              {
                name: 'userAdd',
                path: '/user/add',
                meta: {
                  title: '新增用户',
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
              icon: 'document',
            },
            component: '@/views/layout',
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
                  icon: 'users',
                },
                component: '@/views/document/add',
              },
            ],
          },
        ]

        commit('SET_MENU', res.data)

        return res.data
      })
    },
  },
})

export default store
