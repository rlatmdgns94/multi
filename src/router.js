import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Diabetes from "./components/Diabetes.vue";
import Symptom from "./components/Symptom.vue";
import Main from './components/Main.vue';
import Login from './components/Login.vue';
import Join from './components/Join.vue';
import Diet from './components/Diet.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/diabetes",
      name: "Diabetes",
      component: Diabetes
    },
    {
      path: "/symptom",
      name: "Symptom",
      component: Symptom
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/join",
      name: "Join",
      component: Join
    },
    {
      path: "/diet",
      name: "Diet",
      component: Diet
    }
  ],
  mode: 'history'
});
