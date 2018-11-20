import Vue from 'vue'
import Router from 'vue-router'
const userInfo = () => import('../pages/userInfo.vue')
const tip = () => import('../pages/tip/tip.vue')
const nofind = () => import('../pages/tip/nofind.vue')

Vue.use(Router)
/**
 title: '标题', // 顶部标题
 requireAuth: true // 表示进入这个路由是需要登录的
 **/
export default new Router({
  routes: [
    {path: '/', redirect: '/userInfo', meta: {title: '个人信息认证'}},
    {path: '/userInfo', component: userInfo, meta: {title: '个人信息认证'}},
    {path: '/tip', component: tip, meta: {title: '提示'}},
    {path: '/nofind', component: nofind, meta: {title: '404'}},
    {path: '*', component: nofind, meta: {title: '404'}}
  ]
})
