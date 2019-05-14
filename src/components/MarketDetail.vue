<template>
  <div class="market">
    <div class="keyimg"></div>
    <div class="content market_detail_wrap">
      <div class="market_detail_top">
        <div class="market_detail_img">
          <img
            :src="storeItem.thumbnailUrl && storeItem.thumbnailUrl.length ? cdn + storeItem.thumbnailUrl[0].imageUrl : null"
          >
        </div>
        <div class="detail_info">
          <span class="info_caption">{{categoryNameSwitch(storeItem.category)}}</span>
          <dl class="item">
            <dt class="title">
              <strong>{{storeItem.title}}</strong>
            </dt>
            <dd class="pirce">
              <strong>판매가 :</strong>
              <em class="price_num">{{numberWithCommas(storeItem.price)}}원</em>
            </dd>
            <!-- <dd>
              <strong>중량 :</strong>
              <span class="weight_text">1,450 g(셀프부대찌개재료:662 g,사골육수:650 g,신라면:120 g,체다슬라이스치즈:18 g)</span>
            </dd>
            <dd class="expiration_date">
              <strong>유통기한 :</strong>
              <span class="weight_text weight_text_v1">
                셀프부대찌개재료 : 제조일로부터 냉장 4일, 사골육수 : 제조일로부터 냉동 180일
                <br>신라면 : 제조일로부터 6개월, 체다슬라이스치즈 : 제조일로부터 6개월
              </span>
            </dd>-->
            <dd class="shipping_guide">
              <strong>배송안내 :</strong>
              <span class="free_delivery">무료배송</span>
            </dd>
            <dd>
              <strong>수량 :</strong>
              <div class="quantity">
                <span @click="handleProductQtyDecrease" class="bt_down">
                  <img src="../assets/img/minus.png" alt="빼기 버튼">
                </span>
                <input
                  type="text"
                  name="num"
                  :value="productQty"
                  id
                  class="num"
                  title="상품수량"
                  readonly
                >
                <span @click="handleProductQtyIncrease" class="bt_up">
                  <img src="../assets/img/plus.png" alt="더하기 버튼">
                </span>
              </div>
            </dd>
          </dl>
          <div class="detail_info_bottom">
            <div class="total_price">
              <strong>
                총 판매금액 :
                <span class="price_num">{{numberWithCommas(productQty * storeItem.price)}}원</span>
              </strong>
            </div>
            <ul class="market_detail_btn">
              <li>
                <button @click="getOrderItem">바로 구매</button>
              </li>
              <li>
                <button>장바구니</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 상세정보 상단-->
      <div class="market_detail_bottom">
        <ul class="market_detail_tab">
          <li>
            <router-link
              :to="{path: `${$route.params.storeItemId}`, query: {content: 'detail'}}"
              exact-active-class="on"
              @click="handleChangeIsDetailClicked()"
            >제품정보</router-link>
          </li>
          <li>
            <router-link
              :to="{path: `${$route.params.storeItemId}`, query: {content: 'info'}}"
              exact-active-class="on"
              @click="handleChangeIsInfoClicked()"
            >제품정보고시</router-link>
          </li>
          <li>
            <router-link
              :to="{path: `${$route.params.storeItemId}`, query: {content: 'warning'}}"
              exact-active-class="on"
              @click="handleChangeIsWarningClicked()"
            >주의사항</router-link>
          </li>
        </ul>
        <div class="detail_tab_content on">
          <div class="detail_information">
            <img
              class="detail_img"
              v-if="$route.query.content === 'detail'"
              :src="cdn + storeItem.productDetailCards[0].imageUrl"
            >
            <img
              class="detail_img"
              v-if="$route.query.content === 'info'"
              :src="cdn + storeItem.productInfoCards[0].imageUrl"
            >
            <img
              class="detail_img"
              v-if="$route.query.content === 'warning'"
              src="../assets/img/marketDetail_warning.png"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keyimg {
  height: 284px;
  background: url("../assets/img/market1.jpg") no-repeat center;
}

.market_detail_wrap {
  margin-top: 102px;
  margin-bottom: 122px;
}

.market_detail_top {
  overflow: hidden;
  .market_detail_img {
    float: left;
    width: 521px;
    height: 523px;
    overflow: hidden;
    background: green;
  }
  .detail_info {
    float: left;
    margin-left: 64px;
  }
  .info_caption {
    color: #85af4b;
    font-size: 13px;
    text-decoration: underline;
  }
  .total_price {
    margin-top: 24px;
    font-size: 20px;
    strong {
      font-weight: 500;
    }
    span {
      font-size: 22px;
    }
  }
  .item {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 26px;
    dd {
      margin-top: 23px;
      font-size: 20px;
      strong {
        font-weight: 300;
        margin-right: 5px;
      }
    }
    .title {
      font-size: 26px;
      margin-bottom: 35px;
      strong {
        font-weight: 500;
      }
    }
    .expiration_date {
      margin-top: 12px;
    }
    .shipping_guide {
      margin-top: 15px;
    }
    .weight_text {
      font-size: 15px;
    }
    .weight_text_v1 {
      display: inline-block;
      vertical-align: top;
      margin-top: 5px;
    }
    .free_delivery {
      font-size: 17px;
    }
  }
}
.price_num {
  color: #85af4b;
  font-weight: 400;
}
.quantity {
  display: inline-block;
  .num {
    width: 26px;
    height: 24px;
    padding: 0;
    font-size: 14px;
    border: 1px solid #bdbdbd;
    text-align: center;
  }
  .bt_up,
  .bt_down {
    text-align: center;
    padding-top: 7px;
    display: inline-block;
    width: 26px;
    height: 17px;
    font-size: 20px;
    border: 1px solid #bdbdbd;
    vertical-align: middle;
  }
  .bt_up {
    border-left: 0;
  }
  .bt_down {
    border-right: 0;
  }
}
.market_detail_bottom {
  margin-top: 140px;
}
.market_detail_btn {
  margin-top: 35px;
  li {
    display: inline-block;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
    button {
      cursor: pointer;
      display: inline-block;
      border: 1px solid #85af4b;
      color: #85af4b;
      padding: 10px 85px;
      font-size: 16px;
      background:#fff;
      border-radius: 30px;
      &:hover{
        background: #85af4b;
        color: #fff;
        border: 1px solid #85af4b;
      }
    }
  }
}
.market_detail_tab {
  li {
    display: inline-block;
    width: 33%;
    text-align: center;
    a {
      display: block;
      padding: 15px 0;
      color: #7b7b7b;
      background: #fcfcfc;
      border-bottom: 1px solid #85af4b;
      &.on {
        background: #fff;
        border: 1px solid #85af4b;
        border-top: 2px solid #85af4b;
        border-bottom: 0;
      }
    }
  }
}
.detail_tab_content {
  display: none;
  &.on {
    display: block;
  }
  .detail_information {
    margin-top: 100px;
    min-height: 50vh;
    .detail_img {
      display: block;
    }
  }
}
// .active{
//         background: #85af4b;
//         color: #fff;
//         border: 1px solid #85af4b;
//       }
</style>

<script>
import axios from "axios";

import config from "../utils/config";
export default {
  name: "MarketDetail",
  data: function() {
    return {
      cdn: config.cdn,
      storeItem: {},
      productQty: 1,
      isDetailClicked: true,
      isInfoClicked: false,
      isWarningClicked: false
    };
  },
  async mounted() {
    const getStoreItemById = await axios({
      url: `/v1/store/${this.$route.params.storeItemId}`,
      method: "get"
    });
    this.storeItem = getStoreItemById.data;
  },
  methods: {
    categoryNameSwitch: function(number) {
      switch (number) {
        case 1:
          return "반찬";
          break;
        case 2:
          return "간식";
          break;
        case 3:
          return "영양제";
          break;
        default:
          return null;
      }
    },
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    handleChangeIsDetailClicked: function(event) {
      this.isDetailClicked = true;
      this.isInfoClicked = false;
      this.isWarningClicked = false;
      console.log(this.isDetailClicked);
    },
    handleChangeIsInfoClicked: function(event) {
      this.isInfoClicked = true;
      this.isDetailClicked = false;
      this.isWarningClicked = false;
    },
    handleChangeIsWarningClicked: function(event) {
      this.isWarningClicked = true;
      this.isDetailClicked = false;
      this.isInfoClicked = false;
    },
    handleProductQtyIncrease: function(event) {
      this.productQty = parseInt(this.productQty + 1);
    },
    handleProductQtyDecrease: function(event) {
      if (this.productQty - 1 === 0) {
        alert("최소 주문수량은 1개입니다.");
        this.productQty = 1;
      } else {
        this.productQty = this.productQty - 1;
      }
    },
    getOrderItem: function() {
      if (!localStorage.getItem("sat")) {
        alert("로그인이 필요합니다.");
        this.$router.push("/login");
      } else {
        const data = [
          {
            productName: this.storeItem.title,
            qty: this.productQty,
            totalPrice: this.storeItem.price * this.productQty,
            productImg: this.storeItem.thumbnailUrl[0].imageUrl
          }
        ];
        localStorage.setItem("basket", JSON.stringify(data));
        this.$router.push("/order");
      }
    }
  }
};
</script>