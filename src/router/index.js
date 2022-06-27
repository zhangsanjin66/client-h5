import { createRouter,createWebHashHistory  } from 'vue-router'
import Home from  '../views/home/Home.vue'

const routes=[
  {
    path:'/',
    redirect: '/home' //重定向  如果访问/结尾就重定向到/home页面
  },
  {
    path:'/home',
    component:Home
  },
  {
      path: '/login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/UserCenter/Login/Login.vue')
  },
  {
      path: '/activityDetail',
      // route level code-splitting
      // this generates a separate chunk (activityDetail.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "activityDetail" */ '../views/activityDetail/ActivityDetail.vue')
  },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

  export default router