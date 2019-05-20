<template>
  <div class="header">
    <div class="header_inner">
      <h1 class="logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="식과당">
        </router-link>
      </h1>
      <div id="gnb">
        <h2 class="blind">대메뉴</h2>
        <ul class="menu">
          <li>
            <router-link to="/brand">식과당 소개</router-link>
          </li>
          <li>
            <router-link to="/diet" class="menu_arrow">맞춤당 식단</router-link>
            <ul class="submenu">
              <li>
                <router-link to="/diet">이용방법</router-link>
              </li>
              <li>
                <router-link to="/diet">식단표</router-link>
              </li>
              <li>
                <router-link to="/diet">주문하기</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{path: '/market', query: {sort: '-cdate'}}" class="menu_arrow">건강당 마켓</router-link>
            <ul class="submenu">
              <li>
                <router-link :to="{path: '/market/1', query: {sort: '-cdate'}}">반찬</router-link>
              </li>
              <li>
                <router-link :to="{path: '/market/2', query: {sort: '-cdate'}}">간식</router-link>
              </li>
              <li>
                <router-link :to="{path: '/market/3', query: {sort: '-cdate'}}">영양제</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              :to="{path: '/jipijigi', query: {limit: 8, offset: 0}}"
              class="menu_arrow"
            >지피지기 당뇨</router-link>
            <ul class="submenu">
              <li>
                <router-link :to="{path: '/jipijigi/1'}">당뇨란?</router-link>
              </li>
              <li>
                <router-link :to="{path: '/jipijigi/2'}">당뇨 음식</router-link>
              </li>
              <li>
                <router-link :to="{path: '/jipijigi/3'}">당뇨 운동</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <dl class="user_menu" v-if="isNotLogged">
        <dt class="blind">사용자 메뉴</dt>
        <dd>
          <router-link to="/login">로그인</router-link>
        </dd>
        <dd>
          <router-link to="/join">회원가입</router-link>
        </dd>
        <dd>
          <router-link to="/cart">장바구니</router-link>
        </dd>
      </dl>
      <dl class="user_menu" v-if="isLogged">
        <dt class="blind">사용자 메뉴</dt>
        <dd>
          <span @click="logOut" class="logout">로그아웃</span>
        </dd>
        <dd>
          <router-link to="/mypage">마이페이지</router-link>
        </dd>
        <dd>
          <router-link to="/cart">장바구니</router-link>
        </dd>
      </dl>
    </div>
    <div class="submenu_wrap"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 10;
  width: 100%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  .header_inner {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    padding-top: 30px;
    &::after {
      display: block;
      content: "";
      clear: both;
    }
    .logo {
      float: left;
    }
    .menu {
      float: left;
      margin-left: 140px;
      > li {
        position: relative;
        float: left;
        margin-left: 50px;
        > a {
          position: relative;
          font-size: 18px;
          font-weight: 500;
          &.menu_arrow::after {
            display: inline-block;
            width: 11px;
            height: 5px;
            content: "";
            margin-left: 7px;
            margin-top: 12px;
            vertical-align: top;
            background: url("../assets/img/mene_arrow.png") no-repeat;
          }
        }
      }
    }
  }
}

.menu > li::after {
  position: absolute;
  top: 7px;
  right: -25px;
  display: block;
  content: "";
  width: 1px;
  height: 15px;
  background: #707070;
}

.menu > li:last-child::after {
  width: 0px;
}

.menu li:first-child {
  margin-left: 0;
}

.user_menu {
  float: right;
  margin-top: 3px;
}

.user_menu dd {
  position: relative;
  float: left;
  font-size: 14px;
  margin-left: 24px;
}

.user_menu dt + dd {
  margin-left: 0;
}
.logout {
  cursor: pointer;
}
.user_menu dd::after {
  position: absolute;
  top: 5px;
  right: -15px;
  display: block;
  content: "";
  width: 2px;
  height: 14px;
  background: #cfd0d2;
}

.user_menu dd:last-child::after {
  width: 0px;
}

.menu li a,
.user_menu dd a {
  color: #000;
}
.submenu {
  display: none;
  position: absolute;
  top: 40px;
  width: 300px;
  z-index: 100;
  li {
    margin-top: 5px;
    a {
      font-size: 16px;
    }
  }
}
.submenu_wrap {
  position: absolute;
  display: none;
  z-index: 20;
  top: 90px;
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.2);
}
.show {
  display: block;
}
</style>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      isLogged: false,
      isNotLogged: false
    };
  },
  mounted() {
    $(document).ready(function() {
      $(".menu>li>a,#gnb").on("mouseenter focus", function() {
        $(".submenu").addClass("show");
        $(".submenu_wrap").addClass("show");
      });
      $(".header").on("mouseleave", function() {
        $(".submenu").removeClass("show");
        $(".submenu_wrap").removeClass("show");
      });
      $(".menu>li:last-child").on("focusout", function() {
        $(".submenu").removeClass("show");
        $(".submenu_wrap").removeClass("show");
      });
    });
    if (localStorage.getItem("sat")) {
      this.isLogged = true;
    }
    if (!localStorage.getItem("sat")) {
      this.isNotLogged = true;
    }
  },
  methods: {
    logOut: function() {
      localStorage.removeItem("sat");
      localStorage.removeItem("sar");
      window.location.href = "/";
    }
  }
};
</script>