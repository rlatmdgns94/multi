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
import Market1 from "./components/Market1.vue";
import Market2 from "./components/Market2.vue";
import Market3 from "./components/Market3.vue";
import MarketDetail from "./components/MarketDetail.vue";
import Jipijigi from "./components/Jipijigi.vue";
import Jipijigi1 from "./components/Jipijigi1.vue";
import Jipijigi2 from "./components/Jipijigi2.vue";
import Jipijigi3 from "./components/Jipijigi3.vue";
import JipijigiDetail from "./components/JipijigiDetail.vue";
import Brand from "./components/Brand.vue";
import UpdateMember from "./components/UpdateMember.vue";
import IdFind from "./components/IdFind.vue";
import PasswordFind from "./components/PasswordFind.vue";
import Board from "./components/Board.vue";
import Notice from "./components/Notice.vue";
import BoardView from "./components/BoardView.vue";
import NoticeView from "./components/NoticeView.vue";
import Write from "./components/Write.vue";
import Email from "./components/Email.vue";
import Privacy from "./components/Privacy.vue";

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
      path: "/market/1",
      name: "Market1",
      component: Market1
    },
    {
      path: "/market/2",
      name: "Market2",
      component: Market2
    },
    {
      path: "/market/3",
      name: "Market3",
      component: Market3
    },
    {
      path: "/marketdetail/:storeItemId",
      name: "MarketDetail",
      component: MarketDetail
    },
    {
      path: "/jipijigi",
      name: "Jipijigi",
      component: Jipijigi
    },
    {
      path: "/jipijigi/1",
      name: "Jipijigi1",
      component: Jipijigi1
    },
    {
      path: "/jipijigi/2",
      name: "Jipijigi2",
      component: Jipijigi2
    },
    {
      path: "/jipijigi/3",
      name: "Jipijigi3",
      component: Jipijigi3
    },
    {
      path: "/jipijigidetail/:articleId",
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
    },
    {
      path: "/board",
      name: "Board",
      component: Board
    },
    {
      path: "/notice",
      name: "Notice",
      component: Notice
    },
    {
      path: "/boardview",
      name: "BoardView",
      component: BoardView
    },
    {
      path: "/noticeview",
      name: "NoticeView",
      component: NoticeView
    },
    {
      path: "/write",
      name: "Write",
      component: Write
    },
    {
      path: "/email",
      name: "Email",
      component: Email
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: Privacy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // page scroll to top for all route navigations
    return { x: 0, y: 0 };
  },
  mode: "history"
});
