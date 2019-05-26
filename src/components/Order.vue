<template>
  <div class="cart_wrap">
    <div class="order_keyimg"></div>
    <div class="content">
      <!-- <form action> -->
      <table class="cart">
        <thead>
          <tr>
            <th scope="col" class="product_name">상품명 / 옵션</th>
            <th scope="col" class="product">수량</th>
            <th scope="col" class="product">상품금액</th>
            <th scope="col" class>배송비</th>
            <th scope="col" class="quantity">합계</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.userId">
            <td>
              <div class="cart_product">
                <div class="cart_product_img">
                  <router-link to="/">
                    <img :src="item.productImg ? cdn + item.productImg : productImg" alt>
                  </router-link>
                </div>
                <div class="cart_product_text">
                  <p class="cart_product_name">{{item.productName}}</p>
                  <p class="cart_product_option">{{ item.optionName ? [item.optionName] : null }}</p>
                </div>
              </div>
            </td>
            <td>{{item.qty}}</td>
            <td>{{numberWithCommas(item.totalPrice)}}</td>
            <td>무료</td>
            <td>{{numberWithCommas(parseInt(item.totalPrice * item.qty))}}</td>
          </tr>
        </tbody>
      </table>
      <div class="order_information">
        <div class="buyer_information">
          <h3 class="order_title">주문자 정보</h3>
          <table class="buyer">
            <tr>
              <th>이름</th>
              <td>{{userInfo.userName}}</td>
            </tr>
            <tr>
              <th>
                <label for="email">이메일</label>
              </th>
              <td>
                <input type="text" name="email" id="email" v-model="userInfo.email">
              </td>
            </tr>
            <tr>
              <th>
                <label for="phone">연락처</label>
              </th>
              <td>
                <select v-model="userInfo.phoneFirst">
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="012">012</option>
                </select>
                -
                <input
                  v-model="userInfo.phoneMiddle"
                  type="text"
                  name="phone"
                  id="phone"
                  size="3"
                  maxlength="4"
                >
                -
                <input
                  v-model="userInfo.phoneLast"
                  type="text"
                  name="phone"
                  id="phone"
                  size="3"
                  maxlength="4"
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="order_information">
        <div class="shipping_information">
          <h3 class="order_title">배송지 정보</h3>
          <table class="shipping">
            <tr>
              <th>
                <label for="recipient">받으시는 분</label>
              </th>
              <td>
                <input
                  v-model="orderData.userName"
                  type="text"
                  name="recipient"
                  id="recipient"
                  size="20"
                >
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td>
                <input
                  v-on:input="orderData.postcode = $event.target.value"
                  id="postcode"
                  type="text"
                  size="7"
                  readonly
                >
                <button type="button" @click="modalRender" class="address_search">검색</button>
                <br>
                <input
                  v-on:input="orderData.address = $event.target.value"
                  id="address"
                  type="text"
                  size="30"
                  readonly
                  style="margin:5px 0;"
                >
                <br>
                <input
                  v-on:input="orderData.address_detail = $event.target.value"
                  id="address_detail"
                  type="text"
                  name="rcvAddress2"
                  size="30"
                  placeholder="상세주소를 입력해주세요."
                >
              </td>
            </tr>
            <tr>
              <th>
                <label for="phone">연락처</label>
              </th>
              <td>
                <select v-model="orderData.phoneFirst">
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="012">012</option>
                </select>
                -
                <input
                  v-model="orderData.phoneMiddle"
                  type="text"
                  name="phone"
                  id="phone"
                  maxlength="4"
                >
                -
                <input
                  v-model="orderData.phoneLast"
                  type="text"
                  name="phone"
                  id="phone"
                  maxlength="4"
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="order_information">
        <div class="payment_information">
          <h3 class="order_title">결제 정보</h3>
          <ul class="payment_list">
            <li>
              <input v-model="orderData.purchaseMethod" type="radio" value="card" id="card">
              <label for="card">카드결제</label>
            </li>
            <li>
              <input v-model="orderData.purchaseMethod" type="radio" value="vbank" id="vbank">
              <label for="vbank">가상계좌</label>
            </li>
            <li>
              <input v-model="orderData.purchaseMethod" type="radio" value="trans" id="trans">
              <label for="trans">실시간 계좌이체</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="order_total">
        <h3 class="order_title">최종 결제 금액</h3>
        <div class="price">
          총 주문금액 :
          <strong>{{numberWithCommas(orderData.totalPrice)}}원</strong>
        </div>
      </div>
      <ul class="order_btn_are">
        <li>
          <Button @click="cancelPurchase" class="order_reset">주문취소</Button>
        </li>
        <li>
          <Button @click="purchase" class="order_button">주문하기</Button>
        </li>
      </ul>
      <!-- </form> -->
    </div>
    <modals-container handleAddress="handleAddress"/>
  </div>
</template>

<style lang="scss" scoped>
.order_keyimg {
  height: 284px;
  background: url("../assets/img/order_bg.jpg") no-repeat center;
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

.cart {
  width: 100%;
  margin-top: 87px;
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
  .product_name {
    width: 760px;
  }
}

.cart_product {
  overflow: hidden;
  padding-left: 24px;
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
// 주문정보
.order_information {
  table,
  ul {
    display: block;
    width: 100%;
    border-top: 2px solid #85af4b;
  }
  th {
    font-weight: 300;
  }
  tr {
    height: 50px;
  }
  input {
    height: 23px;
  }
}
.buyer {
  padding-top: 15px;
  th {
    width: 96px;
    padding-left: 20px;
    text-align: left;
  }
}
.shipping_information,
.buyer_information {
  margin-top: 58px;
}
.shipping {
  padding-top: 15px;
  th {
    width: 116px;
    padding-left: 20px;
    text-align: left;
  }
}
.address_search {
  margin-left: 13px;
  border: 0;
  background: #707070;
  padding: 5px 14px;
  color: #fff;
  font-size: 11px;
  border-radius: 6px;
}
.order_title {
  text-align: left;
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 5px;
}
.payment_information {
  margin-top: 60px;
}
.payment_list {
  li {
    margin-top: 20px;
    font-size: 15px;
    &:first-child {
      margin-top: 25;
    }
  }
  input {
    width: 15px;
    height: 15px;
    margin-right: 13px;
    margin-left: 24px;
  }
}
.order_total {
  margin-top: 64px;
}
.price {
  padding: 20px 0;
  padding-right: 37px;
  border-top: 2px solid #85af4b;
  background: #f9f9f9;
  text-align: right;
  font-size: 20px;
}
.order_btn_are {
  text-align: center;
  margin-top: 67px;
  margin-bottom: 110px;
  li {
    display: inline-block;
    font-size: 15px;
    .order_reset,
    .order_button {
      display: inline-block;
      padding: 7px 42px;
    }
    .order_reset {
      border: 1px solid #000;
      background: #fff;
    }
    .order_button {
      margin-left: 14px;
      color: #fff;
      border: 1px solid #85af4b;
      background: #85af4b;
    }
    input {
      display: none;
    }
  }
}
</style>

<script>
import axios from "axios";
import PostCode from "./PostCode.vue";
import iamportConst from "../utils/iamportConst";

import config from "../utils/config";
import productImg from "../assets/img/cart1.png";

export default {
  name: "Order",
  components: {
    PostCode
  },
  data: function() {
    return {
      orderData: {},
      userInfo: {},
      items: {},
      cdn: config.cdn,
      productImg: productImg
    };
  },
  async mounted() {
    $(function() {
      $(".bt_up").click(function() {
        var n = $(".bt_up").index(this);
        var num = $(".num:eq(" + n + ")").val();
        num = $(".num:eq(" + n + ")").val(num * 1 + 1);
      });
      $(".bt_down").click(function() {
        var n = $(".bt_down").index(this);
        var num = $(".num:eq(" + n + ")").val();
        num = $(".num:eq(" + n + ")").val(num * 1 - 1);
      });
    });
    IMP.init(iamportConst.iamportInitial);
    if (!localStorage.getItem("sat")) {
      alert("로그인을 해주세요.");
      window.location.href = "/login";
    }
    const response = await axios({
      url: "/v1/users/profile_edit",
      method: "get",
      headers: { "x-sikguadang-token": localStorage.getItem("sat") }
    });
    this.userInfo = response.data;
    const splitedPhoneNumbers = this.userInfo.phoneNumber.split("-");
    this.userInfo.phoneFirst = splitedPhoneNumbers[0];
    this.userInfo.phoneMiddle = splitedPhoneNumbers[1];
    this.userInfo.phoneLast = splitedPhoneNumbers[2];
    this.orderData.phoneFirst = "010";
    this.orderData.phoneMiddle = "";
    this.orderData.phoneLast = "";
    const order = JSON.parse(localStorage.getItem("order"));
    this.items = order;

    if (this.items) {
      this.sumTotalPrice();
      this.sumTotalProductQty();
      this.sumTotalProductName();
    }
  },
  methods: {
    handleChangePostcode(e) {
      this.orderData.postcode = e.target.value;
    },

    handleChangeAddress(e) {
      this.orderData.address = e.target.value;
    },

    handleChangeAddressDetail(e) {
      this.orderData.address_detail = e.target.value;
    },

    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    modalRender() {
      this.$modal.show(
        PostCode,
        {
          hot_table: "data",
          modal: this.$modal,
          handleAddress: this.handleAddress
        },
        {
          name: "dynamic-modal",
          width: "500px",
          height: "500px",
          draggable: true
        }
      );
    },

    handleAddress(data) {
      let fullAddr = ""; // 최종 주소 변수
      let extraAddr = ""; // 조합형 주소 변수

      // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        fullAddr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        fullAddr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
      if (data.userSelectedType === "R") {
        //법정동명이 있을 경우 추가한다.
        if (data.bname !== "") {
          extraAddr += data.bname;
        }
        // 건물명이 있을 경우 추가한다.
        if (data.buildingName !== "") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
        fullAddr += extraAddr !== "" ? " (" + extraAddr + ")" : "";
      }

      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("address_detail").focus();

      // 우편번호, 주소 저장 및 상세주소 초기화
      document.getElementById("address").value = fullAddr;
      document.getElementById("postcode").value = data.zonecode;
      document.getElementById("address_detail").value = "";
      // this.orderData.postcode = data.zonecode;
      // this.orderData.address = fullAddr;
      // this.orderData.address_detail = "";

      this.$modal.hide("dynamic-modal");
    },

    sumTotalPrice() {
      const items = this.items;
      let totalPrice = 0;
      for (let i = 0; i < items.length; i++) {
        totalPrice = totalPrice + parseInt(items[i].totalPrice) * items[i].qty;
      }
      this.orderData.totalPrice = totalPrice;
    },

    sumTotalProductQty() {
      const items = this.items;
      let totalProductQty = 0;
      for (let i = 0; i < items.length; i++) {
        totalProductQty = totalProductQty + items[i].qty;
      }
      this.orderData.totalProductQty = totalProductQty;
    },

    sumTotalProductName() {
      const items = this.items;
      let totalProductName = "";

      if (items.length > 1) {
        totalProductName = items[0].productName + ` 외 ${items.length - 1}개`;
      } else {
        totalProductName = items[0].productName;
      }

      this.orderData.totalProductName = totalProductName;
    },

    purchase() {
      console.log(this.items);
      const hasOptionItem = this.items.filter(item => item.optionName !== "");
      const data = {};
      data.order = this.orderData;
      data.order.userId = this.userInfo.userId;
      data.order.phoneNumber =
        this.orderData.phoneFirst +
        "-" +
        this.orderData.phoneMiddle +
        "-" +
        this.orderData.phoneLast;
      data.order.totalPrice = this.orderData.totalPrice;
      data.order.productQty = this.orderData.totalProductQty;
      data.order.productName = this.orderData.totalProductName;
      data.order.productImg = this.items[0].productImg;
      data.order.optionItemName = hasOptionItem[0].optionName
        ? hasOptionItem[0].optionName
        : "";
      if (!localStorage.getItem("sat")) {
        alert("로그인을 해주세요.");
        this.$router.push("/login");
        return false;
      }

      if (!this.orderData.userName) {
        alert("받으시는 분의 이름을 입력해주세요.");
        return false;
      }

      // if (!this.orderData.postcode && !this.orderData.address) {
      //   alert("주소를 입력해주세요.");
      //   return false;
      // }

      if (!this.orderData.address_detail) {
        alert("상세주소를 입력해주세요.");
        return false;
      }

      if (
        !this.orderData.phoneFirst &&
        !this.orderData.phoneMiddle &&
        !this.orderData.phoneLast
      ) {
        alert("핸드폰 번호를 입력해주세요.");
        return false;
      }

      return new Promise((resolve, reject) => {
        return resolve(axios.post("/v1/order", data));
      })
        .then(response => {
          console.log(response);
          IMP.request_pay(
            {
              pg: "html5_inicis",
              pay_method: `${this.orderData.purchaseMethod}`,
              merchant_uid: response.data.merchant_uid,
              name: `${this.orderData.totalProductName}`,
              amount: this.orderData.totalPrice,
              buyer_email: `${this.userInfo.email}`,
              buyer_name: `${this.userInfo.userName}`,
              buyer_tel: `${this.userInfo.phoneFirst}-${
                this.userInfo.phoneMiddle
              }-${this.userInfo.phoneLast}`,
              // buyer_addr: `${this.orderData.address} ${
              //   this.orderData.address_detail
              // }`,
              // buyer_postcode: `${this.orderData.postcode}`,
              notice_url: "http://dev.soosooplace.com/v1/webhook/complete",
              m_redirect_url:
                "http://192.168.0.119:3000/payments/complete/mobile"
            },
            rsp => {
              console.log(rsp);
              let msg = "";
              if (rsp.success) {
                localStorage.setItem("paymentsResult", JSON.stringify(rsp));
                this.$router.push("/ordercompleted");
                // this.props.history.push({
                //   pathname: "/payments/complete",
                //   state: {
                //     rsp
                //   }
                // });
              } else {
                data.order.status = "failed";
                axios.put(
                  `/v1/order/${response.value.data.merchant_uid}`,
                  data
                );
                msg = "결제에 실패하였습니다.";
                msg += `에러내용 : ${rsp.error_msg}`;
                alert(msg);
              }
            }
          );
        })
        .catch(err => {
          console.log(err);
        });
    },

    cancelPurchase() {
      alert("주문을 취소하셨습니다.");
      window.location.href = "/";
    }
  }
};
</script>