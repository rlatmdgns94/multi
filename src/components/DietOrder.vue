<template>
  <!-- eslint-disable -->
  <div class="diet_wrap">
    <div class="diet_tab_area">
      <div class="diet_tab_menu">
        <h3 class="blind">맞춤당 식단 탭메뉴</h3>
        <ul class="diet_tab">
          <li>
            <router-link :to="{path: '/useway'}">이용방법</router-link>
          </li>
          <li>
            <router-link :to="{path: '/menu'}">식단표</router-link>
          </li>
          <li>
            <router-link :to="{path: '/dietOrder'}" class="on">주문하기</router-link>
          </li>
        </ul>
      </div>
      <!-- 탭메뉴 -->
    </div>
    <!-- 탭메뉴배경 -->
    <div class="diet_content_wrap">
      <!-- 주문하기 -->
      <div class="diet_content on" id="order">
        <div class="order_wrap">
          <ul class="diabetes_guide">
            <li>
              <span>
                <img src="../assets/img/check-form.png" alt>
              </span>
            </li>
            <li>
              <span class="step">Step1</span>
            </li>
            <li>
              <p class="guide_title">고객님의 식단 프로그램을 설계해주세요.</p>
            </li>
            <li>
              <p>이 프로그램은 당뇨 식이요법을 위한 프로그램입니다. 질병 치료는 전문의와 상담하세요.</p>
            </li>
          </ul>
          <div class="program_option">
            <form action>
              <div class="diabetes_option_box">
                <ul class="diabetes_guide diabetes_guide_v1">
                  <li>
                    <span class="step">Step2</span>
                  </li>
                  <li>
                    <p class="guide_title">식단의 횟수를 선택해주세요.</p>
                  </li>
                  <li>
                    <p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
                  </li>
                </ul>
                <ul class="diabetes_option">
                  <li>
                    <span class="diabetes_option_title">하루에</span>
                    <div class="option_box">
                      <input
                        type="radio"
                        name="meal_qty_of_the_day"
                        value="2"
                        id="option_meal_qty"
                        class="option_selected"
                        v-model="mealsPerDay"
                      >
                      <label for="option_meal_qty" class="diabetes_radio_btn">
                        <span></span>2끼
                      </label>
                    </div>
                    <div class="option_box">
                      <input
                        type="radio"
                        name="meal_qty_of_the_day"
                        value="3"
                        id="option_meal_qty2"
                        class="option_selected"
                        v-model="mealsPerDay"
                      >
                      <label for="option_meal_qty2" class="diabetes_radio_btn">
                        <span></span>3끼
                      </label>
                    </div>
                  </li>
                  <li>
                    <span class="diabetes_option_title">한 주에</span>
                    <div class="option_box">
                      <input
                        type="radio"
                        name="option_days_of_week"
                        value="3"
                        id="option_days_of_week"
                        class="option_selected"
                        v-model="daysPerWeek"
                      >
                      <label for="option_days_of_week" class="diabetes_radio_btn">
                        <span></span>3일
                      </label>
                    </div>
                    <div class="option_box">
                      <input
                        type="radio"
                        name="option_days_of_week"
                        value="5"
                        id="option_days_of_week2"
                        class="option_selected"
                        v-model="daysPerWeek"
                      >
                      <label for="option_days_of_week2" class="diabetes_radio_btn">
                        <span></span>5일
                      </label>
                    </div>
                  </li>
                  <li>
                    <span class="diabetes_option_title">총 몇 주</span>
                    <div class="option_box">
                      <input
                        type="radio"
                        name="option_weeks"
                        value="1"
                        id="option_weeks"
                        class="option_selected"
                        v-model="weeks"
                      >
                      <label for="option_weeks" class="diabetes_radio_btn">
                        <span></span>1주
                      </label>
                    </div>
                    <div class="option_box">
                      <input
                        type="radio"
                        name="option_weeks"
                        value="2"
                        id="option_weeks2"
                        class="option_selected"
                        v-model="weeks"
                      >
                      <label for="option_weeks2" class="diabetes_radio_btn">
                        <span></span>2주
                      </label>
                    </div>
                  </li>
                </ul>
                <ul class="diabetes_guide diabetes_guide_v1">
                  <li>
                    <span class="step">Step3</span>
                  </li>
                  <li>
                    <p class="guide_title">식단의 옵션을 선택해주세요.</p>
                  </li>
                  <li>
                    <p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
                  </li>
                </ul>
                <ul class="main_menu_option">
                  <li>
                    <div class="option_box">
                      <img src="../assets/img/option1.png" alt>
                      <input
                        type="radio"
                        name="option_meals"
                        value="7000"
                        id="option_meals"
                        class="option_selected"
                        v-model="mealOption"
                      >
                      <label for="option_meals" class="diabetes_radio_btn">
                        <span></span>단일음식
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="option_box">
                      <img src="../assets/img/option2.png" alt>
                      <input
                        type="radio"
                        name="option_meals"
                        value="9000"
                        id="option_meals2"
                        class="option_selected"
                        v-model="mealOption"
                      >
                      <label for="option_meals2" class="diabetes_radio_btn">
                        <span></span>단일음식+반찬
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="option_box">
                      <img src="../assets/img/option3.png" alt>
                      <input
                        type="radio"
                        name="option_meals"
                        value="10000"
                        id="option_meals3"
                        class="option_selected"
                        v-model="mealOption"
                      >
                      <label for="option_meals3" class="diabetes_radio_btn">
                        <span></span>단일음식+반찬+간식
                      </label>
                    </div>
                  </li>
                </ul>
                <ul class="diabetes_guide diabetes_guide_v1">
                  <li>
                    <span class="step">Step5</span>
                  </li>
                  <li>
                    <p class="guide_title">매주 배송 받을 요일을 선택해주세요.</p>
                  </li>
                  <li>
                    <p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
                  </li>
                </ul>
                <ul class="early_serious_chronic">
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="day_of_the_week"
                        value="tuesday"
                        class="button_like"
                        v-model="deliveryDate"
                      >
                      <span class="symptom_button">매주 화요일</span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="day_of_the_week"
                        value="thursday"
                        class="button_like"
                        :v-model="deliveryDate"
                      >
                      <span class="symptom_button">매주 목요일</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="payment_box">
                <div class="payment_text">
                  <span>식단 프로그램</span>
                  <span class="price">{{getTotalPrice()}} 원</span>
                </div>
                <div class="payment_menu">
                  <ul class="payment">
                    <li>
                      <span @click="getOrderItem">바로 결제하기</span>
                    </li>
                    <li>
                      <span @click="setItemToBasket">장바구니</span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- //주문하기 -->
      <div class="diet_content">
        <img src="../assets/img/use1.png" alt>
      </div>
      <!-- 레시피 -->
    </div>
    <!-- 탭 콘텐츠 -->
    <div class="detail_bg"></div>
  </div>
</template>

<style lang="scss">
.diet_wrap {
  overflow: hidden;
}

.diet_tab_area {
  position: relative;
  height: 350px;
  background: url("../assets/img/diet_bg.jpg") no-repeat;
}

// 탭메뉴 배경이미지
// 탭메뉴 시작
.diet_tab_menu {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 66px;
  background-color: rgba(0, 0, 0, 0.2);
  .diet_tab {
    width: 1000px;
    margin: 0 auto;
    li {
      position: relative;
      display: inline-block;
      width: 33%;
      line-height: 66px;
      &::after {
        position: absolute;
        top: 23px;
        right: 0;
        display: block;
        content: "";
        width: 1px;
        height: 20px;
        background: #000;
      }
      a {
        position: relative;
        display: block;
        color: #fff;
        text-align: center;
        font-size: 18px;
        &.on {
          color: #2e7b48;
          font-weight: 600;
          &::after {
            position: absolute;
            left: 158px;
            bottom: 0;
            display: block;
            content: "";
            width: 0;
            height: 0;
            border-bottom: 7px solid #fff;
            border-right: 7px solid transparent;
            border-left: 7px solid transparent;
          }
        }
      }
    }
  }
} // 탭메뉴
.diet_content {
  position: relative;
  display: none;
  &.on {
    display: block;
  }
} //탭 콘텐츠
// 주문하기
.order_wrap {
  padding-top: 120px;
}

.diabetes_guide {
  position: relative;
  text-align: center;
  font-family: "Noto Sans KR";
  &.diabetes_guide_v1 {
    background: #fff;
    &::after {
      height: 0;
    }
  }
  li {
    margin-top: 7px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-top: 0;
      color: #5a5a5a;
      font-size: 18px;
    }
    .guide_title {
      font-size: 25px;
      em {
        font-weight: 500;
      }
    }
  }
  .step {
    color: #85af4b;
    font-size: 25px;
  }
}

.program_option {
  position: relative;
  margin-top: 90px;
  text-align: center;
  font-family: "SDKukdetopokki";
  .early_serious_chronic {
    margin-top: 65px;
    text-align: center;
    li {
      display: inline-block;
      margin-left: 100px;
      &:first-child {
        margin-left: 0;
      }
    }
    input {
      display: none;
    }
    .symptom_button {
      display: inline-block;
      padding: 19px 66px;
      border: 1px solid #85af4b;
      background: #fff;
      border-radius: 40px;
      cursor: pointer;
      font-size: 25px;
    }
    .button_like:checked + .symptom_button {
      color: #fff;
      background: #85af4b;
    }
  }
}

.diabetes_option_box {
  width: 1400px;
  margin: 0 auto;
  padding-top: 134px;
  padding-bottom: 126px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #707070;
}

.diabetes_option {
  text-align: center;
  margin-top: 88px;
  margin-bottom: 155px;
  li {
    position: relative;
    display: inline-block;
    text-align: left;
    margin-left: 180px;
    &:first-child {
      margin-left: 0;
    }
    &:after {
      position: absolute;
      right: -50%;
      top: 0;
      content: "+";
      font-size: 30px;
    }
    &:last-child:after {
      font-size: 0;
    }
  }
  .diabetes_option_title {
    display: block;
    padding: 4px 55px;
    margin-bottom: 60px;
    color: #fff;
    font-size: 28px;
    background: #85af4b;
  }
}

.option_box {
  margin-top: 5px;
  text-align: center;
  img {
    display: block;
    margin-bottom: 38px;
  }
}

.option_selected {
  display: none;
}

.diabetes_radio_btn {
  font-size: 22px;
  text-align: center;
  cursor: pointer;
  span {
    display: inline-block;
    width: 29px;
    height: 29px;
    margin-top: 2px;
    margin-right: 15px;
    vertical-align: top;
    background: url("../assets/img/check.png") no-repeat;
  }
}

.option_selected:checked + .diabetes_radio_btn span {
  background: url("../assets/img/checked.png") no-repeat;
}

.main_menu_option {
  text-align: center;
  margin-top: 65px;
  margin-bottom: 170px;
  li {
    display: inline-block;
    margin-right: 220px;
    &:last-child {
      margin: 0;
    }
  }
}

.payment_box {
  overflow: hidden;
  display: inline-block;
  width: 1396px;
  margin-top: 53px;
  margin-bottom: 200px;
  background: #fff;
  border: 1px solid #85af4b;
  font-size: 20px;
  font-family: "Noto Sans KR";
  box-shadow: 0px 3px 8px 1px rgba(133, 175, 75, 0.2);
  .payment_text {
    overflow: hidden;
    padding: 25px 58px;
    border-bottom: 1px solid #d1d1d1;
    span {
      float: left;
    }
    .price {
      float: right;
    }
  }
  .payment_menu {
    padding: 25px 58px;
    text-align: right;
    .payment {
      li {
        display: inline-block;
        margin-right: 26px;
        &:last-child {
          margin-right: 0;
        }
        span {
          color: #000;
          cursor: pointer;
          &:hover {
            color: #85af4b;
          }
        }
      }
    }
  }
}

// //주문하기
#gallery {
  > li {
    display: none;
  }
}

#gallery > li:first-child {
  display: block;
}

#btn_gallery {
  position: absolute;
  top: 87px;
  left: 28%;
  text-align: center;
}

#btn_gallery a.off {
  cursor: default;
  opacity: 0.5;
  pointer-events: none;
  display: inline-block;
}

.btn_gallery_prev {
  margin-right: 800px;
}
</style>

<script>
export default {
  name: "DietOrder",
  data: function() {
    return {
      mealsPerDay: 0,
      daysPerWeek: 0,
      weeks: 0,
      mealOption: 0,
      deliveryDate: "",
      totalPrice: 0,
      mealsPerDayName: "",
      daysPerWeekName: "",
      weeksName: "",
      mealOptionName: "",
      productName: "맞춤당 정기 식단 프로그램",
      selectedOption: ""
    };
  },
  methods: {
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    getTotalPrice: function() {
      this.totalPrice = this.numberWithCommas(
        this.mealsPerDay * this.daysPerWeek * this.weeks * this.mealOption
      );
      return this.totalPrice;
    },

    getOrderItem: function() {
      if (this.mealsPerDay === 0) {
        alert("끼니 수를 선택해주세요.");
        return false;
      }
      if (this.daysPerWeek === 0) {
        alert("한 주에 몇 일 관리 받으실지를 선택해주세요.");
        return false;
      }
      if (this.weeks === 0) {
        alert("몇 주 동안 관리 받으실지를 선택해주세요.");
        return false;
      }
      if (this.mealOption === 0) {
        alert("식단의 옵션을 선택해주세요.");
        return false;
      }
      if (this.deliveryDate === "") {
        alert("배송받으실 요일을 선택해주세요.");
        return false;
      }
      if (!localStorage.getItem("sat")) {
        alert("로그인이 필요합니다.");
        this.$router.push("/login");
      } else {
        const data = [
          {
            productName: this.productName,
            qty: 1,
            totalPrice:
              this.mealsPerDay * this.daysPerWeek * this.weeks * this.mealOption
          }
        ];
        localStorage.setItem("order", JSON.stringify(data));
        this.$router.push("/order");
      }
    },
    setItemToBasket: function() {
      if (this.mealsPerDay === 0) {
        alert("끼니 수를 선택해주세요.");
        return false;
      }
      if (this.daysPerWeek === 0) {
        alert("한 주에 몇 일 관리 받으실지를 선택해주세요.");
        return false;
      }
      if (this.weeks === 0) {
        alert("몇 주 동안 관리 받으실지를 선택해주세요.");
        return false;
      }
      if (this.mealOption === 0) {
        alert("식단의 옵션을 선택해주세요.");
        return false;
      }
      if (this.deliveryDate === "") {
        alert("배송받으실 요일을 선택해주세요.");
        return false;
      }

      if (!localStorage.getItem("sat")) {
        alert("로그인이 필요합니다.");
        this.$router.push("/login");
      } else {
        const basket = localStorage.getItem("basket");
        const data = [
          {
            productName: this.productName,
            qty: 1,
            totalPrice:
              this.mealsPerDay *
              this.daysPerWeek *
              this.weeks *
              this.mealOption,
            checked: false
          },
          ...basket
        ];
        localStorage.setItem("basket", JSON.stringify(data));
        this.$router.push("/cart");
      }
    }
  }
};
</script>
