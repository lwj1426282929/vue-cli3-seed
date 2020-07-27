import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, getMenus } from '@/service/user'

Vue.use(Vuex)

//创建 VueX 对象
const store = new Vuex.Store({
  state: {
    token: '123456789',
    user: {},
    menus: [],
  },

  getters: {
    token: (state) => state.token,
    user: (state) => state.user,
    menus: (state) => state.menus,
  },

  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data
    },

    SET_USER: (state, data) => {
      state.user = data
    },

    SET_MENUS: (state, data) => {
      state.menus = data
    },
  },

  actions: {
    // 请求当前用户信息
    getUser({ commit }) {
      if (sessionStorage.getItem('user')) {
        const data = JSON.parse(sessionStorage.getItem('user'))
        commit('SET_USER', data)

        return data
      }

      return getUser().then((res) => {
        res.data = {
          name: '赖维健',
          avatar:
            'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        }
        commit('SET_USER', res.data)
        sessionStorage.setItem('user', JSON.stringify(res.data))
      })
    },

    // 请求用户菜单
    getMenus({ commit }) {
      if (sessionStorage.getItem('menu')) {
        const data = JSON.parse(sessionStorage.getItem('menu'))
        commit('SET_MENUS', data)

        return data
      }

      return getMenus().then((res) => {
        res.data = [
          {
            name: 'user',
            path: '/user',
            redirect: '/user/list',
            meta: {
              title: '用户管理',
              icon: 'users',
            },
            component: '@/layout',
            children: [
              {
                name: 'userList',
                path: '/user/list',
                meta: {
                  title: '用户管理',
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
        res.data.push({
          name: '404',
          path: '*',
          redirect: '/404',
          component: '@/layout',
          meta: {
            title: '404',
          },
          hidden: true,
          children: [
            {
              path: '/404',
              meta: {
                title: '404',
              },
              component: '@/views/404',
            },
          ],
        })
        commit('SET_MENUS', res.data)
        sessionStorage.setItem('menu', JSON.stringify(res.data))

        return res.data
      })
    },
  },
})

export default store
