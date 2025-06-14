import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue";
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        next();
      } else {
        // User is not signed in
        next('/login');
      }
    });
  } else {
    next();
  }
})

export default router
