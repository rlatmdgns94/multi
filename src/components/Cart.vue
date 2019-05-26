<template>
  <div class="cart_wrap">
    <div class="cart_keyimg"></div>
    <div class="content">
      <form action class="cart_box">
        <table class="cart">
          <thead>
            <tr>
              <th scope="col" class="check">
                <input type="checkbox" @click="toggleSelect" :checked="selectAll">
              </th>
              <th scope="col" class="product_name">상품명 / 옵션</th>
              <th scope="col" class="product">수량</th>
              <th scope="col" class="product">상품금액</th>
              <th scope="col" class>배송비</th>
              <th scope="col" class="quantity">합계</th>
              <th scope="col" class="charge">선택</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in basket" :key="index">
              <td class="check">
                <input type="checkbox" v-model="item.checked">
              </td>
              <td>
                <div class="cart_product">
                  <div class="cart_product_img">
                    <router-link to="/">
                      <img :src="item.productImg ? cdn + item.productImg : productImg" alt>
                    </router-link>
                  </div>
                  <div class="cart_product_text">
                    <p class="cart_product_name">{{ item.productName }}</p>
                    <p class="cart_product_option">{{ item.optionName ? [item.optionName] : null }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <input type="text" name="num" v-model="item.qty" class="num">
                  <div class="bt_box">
                    <div class="bt_up" @click="handleIncreaseQty(index)">
                      <img src="../assets/img/btn_up.jpg" alt>
                    </div>
                    <div class="bt_down" @click="handleDecreaseQty(index)">
                      <img src="../assets/img/btn_down.jpg" alt>
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ numberWithCommas(item.totalPrice) }} 원</td>
              <td>무료</td>
              <td>{{ numberWithCommas(parseInt(item.totalPrice) * item.qty) }} 원</td>
              <td>
                <ul class="cart_menu">
                  <li>
                    <button type="button" @click="orderItem(index)" class="cart_order_btn">주문하기</button>
                  </li>
                  <li>
                    <button type="button" @click="deleteItem(index)">삭제</button>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="7">
                <span class="total">
                  총 주문금액 :
                  <strong>{{ numberWithCommas(sumTotalPrice) }} 원</strong>
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
        <ul class="cart_text">
          <li>식과당은 전체 상품 무료배송입니다.</li>
          <li>[쇼핑 계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</li>
          <li>배송에 관한 문의사항은 고객센터로 문의바랍니다.</li>
        </ul>
        <div class="cart_bottom_area">
          <span class="product_clear">
            <button type="button" @click="deleteAll">전체삭제</button>
          </span>
          <ul class="cart_all_menu">
            <li>
              <router-link :to="{path: '/market'}">쇼핑 계속하기</router-link>
            </li>
            <li>
              <button type="button" @click="orderSelectedItem">선택상품 주문</button>
            </li>
            <li>
              <button type="button" @click="orderAll" class="cart_order_btn">전체상품 주문</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart_keyimg {
  height: 284px;
  background: url("../assets/img/cart_bg.jpg") no-repeat center;
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
  tfoot {
    text-align: right;
    td {
      padding: 25px 0;
    }
    .total {
      margin-right: 30px;
      font-size: 18px;
    }
  }
  .check {
    width: 82px;
    text-align: center;
  }
  .product_name {
    width: 600px;
  }
}

.cart_product {
  overflow: hidden;
  text-align: left;
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
    button {
      display: inline-block;
      width: 93px;
      padding: 7px 0px;
      border: 1px solid #9a9a9a;
      color: #000;
      background: #fff;
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
    a,
    button {
      display: inline-block;
      padding: 7px 37px;
      border: 1px solid #5b5b5b;
      color: #000;
      font-size: 15px;
      background: #fff;
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
  button {
    display: inline-block;
    padding: 7px 37px;
    border: 1px solid #85af4b;
    color: #000;
    font-size: 15px;
    background: #fff;
    text-align: center;
  }
}
.cart_order_btn {
  border: 1px solid #85af4b !important;
  background: #85af4b !important;
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
</style>

<script>
import config from "../utils/config";
import productImg from "../assets/img/cart1.png";

export default {
  name: "Cart",
  data: function() {
    return {
      cdn: config.cdn,
      productImg: productImg,
      basket: []
    };
  },
  mounted() {
    const basket = JSON.parse(localStorage.getItem("basket"));
    this.basket = basket;
  },
  computed: {
    selectAll: function() {
      return this.basket.every(function(item) {
        return item.checked;
      });
    },
    sumTotalPrice() {
      const basket = this.basket;
      let totalPrice = 0;
      for (let i = 0; i < basket.length; i++) {
        totalPrice =
          totalPrice + parseInt(basket[i].totalPrice) * basket[i].qty;
      }
      return totalPrice;
    }
  },
  methods: {
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    toggleSelect: function() {
      const select = this.selectAll;
      this.basket.forEach(function(item) {
        item.checked = !select;
      });
      this.selectAll = !select;
    },
    handleIncreaseQty: function(index) {
      this.basket[index].qty = parseInt(this.basket[index].qty + 1);
    },
    handleDecreaseQty: function(index) {
      if (this.basket[index].qty - 1 === 0) {
        alert("최소 주문수량은 1개입니다.");
        this.basket[index].qty = 1;
      } else {
        this.basket[index].qty = this.basket[index].qty - 1;
      }
    },
    orderItem: function(index) {
      if (this.basket[index].checked !== true) {
        alert("체크박스에 체크해주세요.");
        return false;
      }
      if (this.basket[index].checked === true) {
        const item = this.basket.splice(index, 1);
        localStorage.setItem("order", JSON.stringify(item));
        localStorage.setItem("basket", JSON.stringify(this.basket));
        this.$router.push("/order");
      }
    },
    orderSelectedItem: function() {
      const selectedItem = this.basket.filter(item => item.checked === true);
      console.log(selectedItem);
      if (!selectedItem.checked) {
        alert("선택된 상품이 없습니다.");
      } else {
        localStorage.setItem("order", JSON.stringify(selectedItem));
        this.basket = this.basket.filter(item => item.checked === false);
        localStorage.setItem("basket", JSON.stringify(this.basket));
        this.$router.push("/order");
      }
    },
    orderAll: function() {
      localStorage.setItem("order", JSON.stringify(this.basket));
      localStorage.removeItem("basket");
      this.$router.push("/order");
    },
    deleteItem: function(index) {
      if (this.basket[index].checked !== true) {
        alert("체크박스에 체크해주세요.");
        return false;
      }

      if (this.basket[index].checked === true) {
        alert("삭제되었습니다.");
        this.basket.splice(index, 1);
        localStorage.setItem("basket", JSON.stringify(this.basket));
        window.location.reload();
      }
    },
    deleteAll: function() {
      const items = this.basket.filter(item => item.checked === false);
      console.log(items);
      localStorage.setItem("basket", JSON.stringify(items));
      // localStorage.setItem("basket", JSON.stringify(this.basket));
      window.location.reload();
    }
  }
};
</script>