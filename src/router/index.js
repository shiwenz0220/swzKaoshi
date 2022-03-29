import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from "../views/MyLogin.vue"

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
    children: [{
      path: "",
      name: "shouye",
      component: () => import("../views/home/ShouYe.vue")
    }, {
      path: "2-1",
      meta: ["文章管理", "文章列表"],
      component: () => import("../views/home/WenLie.vue")
    }, {
      path: "2-2",
      meta: ["文章管理", "多层路由示例"],
      component: () => import("../views/home/DuoShi.vue")
    }]
  }, {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/MyLogin.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
// router.beforeEach(function(to,from,next){
//   if(to.path==="/login"){
//     next()
//   }else{
//     let token = localStorage.getItem("token")
//     if(!token)return next({path:"/login"})
//     if(token)return next()
//   }
// })
export default router;