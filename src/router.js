import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./App'),
            redirect: '/login',
            meta: {
                title: '入口',
            },
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('./components/Login'),
                    meta: {
                        title: '登录',
                    }
                },
                {
                    path: '/setPassword',
                    name: 'setPassword',
                    component: () => import('./components/SetPassword'),
                    meta: {
                        title: '修改密码',
                    }
                },
            ]
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('./components/Personal'),
            meta: {
                title: '个人中心',
            },
            children: [
                {
                    path: '/personalData',
                    name: 'personalData',
                    component: () => import('./components/PersonalData'),
                    meta: {
                        title: '个人信息',
                    }
                },
                {
                    path: '/lostHistory',
                    name: 'lostHistory',
                    component: () => import('./components/lostHistory'),
                    meta: {
                        title: '查询失物招领发布历史',
                    }
                },
                {
                    path: '/searchHistory',
                    name: 'searchHistory',
                    component: () => import('./components/searchHistory'),
                    meta: {
                        title: '查询寻物启事发布历史',
                    }
                },
                {
                    path: '/messageManager',
                    name: 'messageManager',
                    component: () => import('./components/messageManager'),
                    meta: {
                        title: '留言管理',
                    }
                }
            ]
        }
    ]
})

export default router