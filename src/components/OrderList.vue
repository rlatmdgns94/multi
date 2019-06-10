<template>
  <div class="cart_wrap">
    <div class="cart_keyimg"></div>
    <div class="content">
      <form action class="cart_box">
        <p class="order_list_title">주문 상품 정보</p>
        <table class="cart">
          <caption class="blind">주문내역</caption>
          <thead>
            <tr>
              <th scope="col" class="order_num">주문번호</th>
              <th scope="col" class="order_day">주문일</th>
              <th scope="col" class="product_name">상품명 / 옵션</th>
              <th scope="col" class="product">수량</th>
              <th scope="col" class="product">상품구매금액</th>
              <th scope="col" class>주문처리상태</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.orderId">
              <td class="order_num">
                [
                <span>{{order.merchant_uid}}</span>]
              </td>
              <td class="order_day">
                <span>{{$moment(order.cdate).format('YYYY-MM-DD')}}</span>
              </td>
              <td>
                <div class="cart_product">
                  <div class="cart_product_img">
                    <router-link to="/">
                      <img :src="order.productImage ? cdn + order.productImage : productImg" alt>
                    </router-link>
                  </div>
                  <div class="cart_product_text">
                    <p class="cart_product_name">{{order.productName}}</p>
                    <p
                      class="cart_product_option"
                    >{{ order.optionItemName ? [order.optionItemName] : null }}</p>
                  </div>
                </div>
              </td>
              <td>{{order.productQty}}</td>
              <td>{{numberWithCommas(order.totalPrice)}}원</td>
              <td>{{statusSwitch(order.status)}}</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart_keyimg {
  height: 284px;
  background: url("../assets/img/order_list.jpg") no-repeat center;
}

.cart_explanation_box {
  overflow: hidden;
}

.cart_explanation {
  margin-top: 60px;
  margin-bottom: 36px;
  overflow: hidden;
  float: right;
  li {
    float: left;
    font-size: 18px;
    &::after {
      display: inline-block;
      content: ">";
      margin-left: 34px;
      margin-right: 34px;
    }
    &:last-child::after {
      content: ">";
      margin-right: -34px;
    }
  }
}
.cart_box {
  margin-top: 87px;
  margin-bottom: 113px;
}
.cart {
  width: 100%;
  border-top: 2px solid #85af4b;
  thead,
  tfoot {
    background: #f9f9f9;
  }
  thead {
    th {
      padding: 16px 0;
      font-weight: 500;
    }
  }
  tbody {
    text-align: center;
    tr {
      height: 117px;
      border-bottom: 1px solid #f0f0f0;
      &:last-child {
        border: 0;
      }
    }
  }
  .order_num {
    width: 102px;
    text-align: center;
  }
  .order_day {
    width: 110px;
  }
  .product_name {
    width: 600px;
  }
}

.cart_product {
  overflow: hidden;
  text-align: left;
  padding-left: 66px;
  .cart_product_img {
    float: left;
    width: 58px;
    overflow: hidden;
    margin-right: 20px;
  }
  .cart_product_text {
    float: left;
    .cart_product_name {
      font-size: 17px;
      font-weight: 600;
    }
    .cart_product_option {
      font-size: 14px;
      color: #777;
    }
  }
}
.cart_menu {
  margin: 8px 0;
  > li {
    margin-top: 5px;
    &:first-child {
      margin-top: 0;
    }
    a {
      display: inline-block;
      width: 93px;
      padding: 7px 0px;
      border: 1px solid #9a9a9a;
      color: #000;
      font-size: 10px;
    }
  }
}
.cart_all_menu {
  float: right;
  margin: 0px;
  li {
    float: left;
    margin-top: 0;
    margin-left: 14px;
    &:first-child {
      margin-left: 0;
    }
    a {
      display: inline-block;
      padding: 7px 37px;
      border: 1px solid #5b5b5b;
      color: #000;
      font-size: 15px;
      text-align: center;
    }
  }
}
.cart_bottom_area {
  overflow: hidden;
  margin-top: 50px;
}
.product_clear {
  float: left;
  a {
    display: inline-block;
    padding: 7px 37px;
    border: 1px solid #85af4b;
    color: #000;
    font-size: 15px;
    text-align: center;
  }
}
.cart_order_btn {
  border: 1px solid #85af4b !important;
  background: #85af4b;
  color: #fff !important;
}
.cart_text {
  margin-top: 26px;
  li {
    color: #000;
    font-size: 12px;
    &::before {
      content: "※";
    }
  }
}
// 수량 카운트
.num {
  display: inline-block;
  width: 16px;
  height: 20px;
  border: 1px solid #acacac;
  text-align: center;
}
.bt_box {
  display: inline-block;
  text-align: center;
  font-size: 1px;
  color: #787878;
  vertical-align: middle;
  img {
    display: block;
  }
}
.order_list_title {
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 5px;
}
</style>

<script>
import axios from "axios";

import config from "../utils/config";
import productImg from "../assets/img/cart1.png";
export default {
  name: "OrderList",
  data: function() {
    return {
      orders: [],
      cdn: config.cdn,
      productImg: productImg
    };
  },
  async mounted() {
    const response = await axios({
      url: "/v1/order",
      method: "get",
      headers: { "x-sikguadang-token": localStorage.getItem("sat") }
    });
    this.orders = response.data;
    console.log(this.orders);
  },
  methods: {
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    statusSwitch: function(status) {
      switch (status) {
        case "ready":
          return "입금 대기중";
          break;
        case "paid":
          return "결제 완료";
          break;
        case "failed":
          return "결제 취소";
          break;
        case "":
          return "결제 취소";
          break;
        case null:
          return "결제 취소";
          break;
        default:
          return null;
      }
    }
  }
};
</script>