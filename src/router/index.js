import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../pages/home.vue')
const vuxui = () => import('../pages/vuxui.vue')
const museui = () => import('../pages/museui.vue')
const tip = () => import('../pages/tip/tip.vue')
const nofind = () => import('../pages/tip/nofind.vue')

Vue.use(Router)
/**
 title: '标题', // 顶部标题
 requireAuth: true // 表示进入这个路由是需要登录的
 **/
export default new Router({
  routes: [
    {path: '/', component: home, redirect: '/home', meta: {title: '首页'}},
    {path: '/home', component: home, meta: {title: '首页'}},
    {path: '/vuxui', component: vuxui, meta: {title: 'vuxui认证'}},
    {path: '/museui', component: museui, meta: {title: 'museui认证'}},
    {path: '/tip', component: tip, meta: {title: '提示'}},
    {path: '/nofind', component: nofind, meta: {title: '404'}},
    {path: '*', component: nofind, meta: {title: '404'}}
  ]
})
