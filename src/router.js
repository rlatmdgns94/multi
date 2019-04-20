import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Symptom from "./components/Symptom.vue";
import Main from "./components/Main.vue";
import Login from "./components/Login.vue";
import Join from "./components/Join.vue";
import Diet from "./components/Diet.vue";
import Cart from "./components/Cart.vue";
import Order from "./components/Order.vue";
import OrderCompleted from "./components/OrderCompleted.vue";
import OrderList from "./components/OrderList.vue";
import Mypage from "./components/Mypage.vue";
import Market from "./components/Market.vue";
import MarketDetail from "./components/MarketDetail.vue";
import Jipijigi from "./components/Jipijigi.vue";
import JipijigiDetail from "./components/JipijigiDetail.vue";
import Brand from "./components/Brand.vue";
import UpdateMember from "./components/UpdateMember.vue";
import IdFind from "./components/IdFind.vue";
import PasswordFind from "./components/PasswordFind.vue";

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
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: "/ordercompleted",
      name: "OrderCompleted",
      component: OrderCompleted
    },
    {
      path: "/orderlist",
      name: "OrderList",
      component: OrderList
    },
    {
      path: "/mypage",
      name: "Mypage",
      component: Mypage
    },
    {
      path: "/market",
      name: "Market",
      component: Market
    },
    {
      path: "/marketdetail",
      name: "MarketDetail",
      component: MarketDetail
    },
    {
      path: "/jipijigi",
      name: "Jipijigi",
      component: Jipijigi
    },
    {
      path: "/jipijigidetail",
      name: "JipijigiDetail",
      component: JipijigiDetail
    },
    {
      path: "/brand",
      name: "Brand",
      component: Brand
    },
    {
      path: "/updatemember",
      name: "UpdateMember",
      component: UpdateMember
    },
    {
      path: "/idfind",
      name: "IdFind",
      component: IdFind
    },
    {
      path: "/passwordfind",
      name: "PasswordFind",
      component: PasswordFind
    }
  ],
  mode: "history"
});
