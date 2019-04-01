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
          <tr>
            <td>
              <div class="cart_product">
                <div class="cart_product_img">
                  <router-link to="/">
                    <img src="../assets/img/cart1.png" alt>
                  </router-link>
                </div>
                <div class="cart_product_text">
                  <p class="cart_product_name">맞춤당 정기 식단 프로그램</p>
                  <p class="cart_product_option">[옵션 : 하루 2끼, 주 3일, 1주 메인+반찬]</p>
                </div>
              </div>
            </td>
            <td>1</td>
            <td>120,000 원</td>
            <td>무료</td>
            <td>120,000 원</td>
          </tr>
        </tbody>
      </table>
      <div class="order_information">
        <div class="buyer_information">
          <h3 class="order_title">주문자 정보</h3>
          <table class="buyer">
            <tr>
              <th>이름</th>
              <td>지수빈</td>
            </tr>
            <tr>
              <th>
                <label for="email">이메일</label>
              </th>
              <td>
                <input type="text" name="email" id="email">
              </td>
            </tr>
            <tr>
              <th>
                <label for="phone">연락처</label>
              </th>
              <td>
                <select name id>
                  <option value="010" selected>010</option>
                  <option value="011">011</option>
                  <option value="012">012</option>
                </select>
                -
                <input type="text" name="phone" id="phone" size="3" maxlength="4">
                -
                <input type="text" name="phone" id="phone" size="3" maxlength="4">
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
                <input type="text" name="recipient" id="recipient" size="20">
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td>
                <input type="text" name="rcvZipcode" size="7" readonly>
                <button type="button" onclick="openZipSearch()" class="address_search">검색</button>
                <br>
                <input type="text" name="rcvAddress1" readonly size="30" style="margin:5px 0;">
                <br>
                <input type="text" name="rcvAddress2" size="30" placeholder="상세주소를 입력해주세요.">
              </td>
            </tr>
            <tr>
              <th>
                <label for="phone">연락처</label>
              </th>
              <td>
                <select name id>
                  <option value="010" selected>010</option>
                  <option value="011">011</option>
                  <option value="012">012</option>
                </select>
                -
                <input type="text" name="phone" id="phone" size="1" maxlength="4">
                -
                <input type="text" name="phone" id="phone" size="1" maxlength="4">
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
              <label>
                <input type="radio" name="payment">카드결제
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="payment">가상결제
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="payment">실시간 계좌이체
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="order_total">
        <h3 class="order_title">최종 결제 금액</h3>
        <div class="price">
          총 주문금액 :
          <strong>170,000원</strong>
        </div>
      </div>
      <ul class="order_btn_are">
        <li>
          <label for="order_reset" class="order_reset">주문취소</label>
          <input type="reset" value="주문취소" id="order_reset">
        </li>
        <li>
          <label for="order_button" class="order_button">주문하기</label>
          <input type="submit" value="주문하기" id="order_button">
        </li>
      </ul>
      <!-- </form> -->
    </div>
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
export default {
  name: "Order",
  mounted() {
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
  }
};
</script>