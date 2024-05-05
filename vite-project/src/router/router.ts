// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    // 登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    // 登陆成功后展示数据
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "layout",
  },
  {
    // 404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  {
    // 重定向
    path: "/:pathMatch(.*)*", // 注意这里的通配符路由应当放在最后
    redirect: "/404",
    name: "Any",
  },
];
