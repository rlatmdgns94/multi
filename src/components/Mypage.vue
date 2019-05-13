<template>
  <div class="mypage">
    <div class="cart_keyimg"></div>
    <div class="content">
      <p class="greetings">
        <em>{{ userInfo.userName }}</em> 님 환영합니다.
      </p>
      <div class="mypage_content_wrap">
        <div class="mypage_content">
          <router-link to="/updatemember" class="left_menu">
            <dl>
              <dt>회원정보</dt>
              <dd>회원이신 고객님의 개인정보를 관리하는 공간입니다.</dd>
              <dd>개인정보를 최신 정보로 유지하시면 보다 간편히 쇼핑을 즐기실 수 있습니다.</dd>
            </dl>
          </router-link>
          <router-link to="/orderlist" class="right_menu">
            <dl>
              <dt>주문내역</dt>
              <dd>
                고객님께서 주문하신 상품의
                <br>주문내역을 확인하실 수 있습니다.
              </dd>
            </dl>
          </router-link>
        </div>
        <div class="mypage_content">
          <router-link to="/cart" class="left_menu">
            <dl>
              <dt>장바구니</dt>
              <dd>
                고객님의 ‘식’ 을 담은 장바구니
                <br>주문하시기 전에 장바구니를 확인하세요.
              </dd>
            </dl>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart_keyimg {
  height: 284px;
  background: url("../assets/img/mypage.jpg") no-repeat center;
}
.content {
  text-align: center;
}
.greetings {
  display: inline-block;
  font-size: 21px;
  margin-top: 66px;
  padding-bottom: 2px;
  border-bottom: 2px solid #85af4b;
  em {
    font-size: 22px;
    font-weight: 400;
  }
}
.mypage_content_wrap {
  margin-top: 66px;
  margin-bottom: 137px;
}
.mypage_content {
  overflow: hidden;
  text-align: left;
  a {
    display: inline-block;
    width: 49%;
    color: #7f7f7f;
    &:hover {
      background: #eaf1e0;
    }
  }
  &:last-child {
    margin-top: 25px;
  }
  dl {
    display: block;
    border: 1px solid #d3d3d3;
    padding: 30px 0 30px 25px;
    dt {
      font-size: 20px;
      font-weight: 400;
      color: #85af4b;
      margin-bottom: 5px;
      dd {
        font-size: 15px;
      }
    }
  }
  .left_menu {
    float: left;
  }
  .right_menu {
    float: right;
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "Mypage",
  data: function() {
    return {
      userInfo: {}
    };
  },
  async mounted() {
    const getUserInfo = await axios({
      url: "/v1/users/profile_edit",
      method: "get",
      headers: { "x-sikguadang-token": localStorage.getItem("sat") }
    });
    this.userInfo = getUserInfo.data;
  }
};
</script>