<template>
  <!-- eslint-disable -->
  <div class="diet_wrap">
    <div class="diet_tab_area">
      <div class="diet_tab_menu">
        <h3 class="blind">맞춤당 식단 탭메뉴</h3>
        <ul class="diet_tab">
          <li>
            <router-link to>이용방법</router-link>
          </li>
          <li>
            <router-link to class="on">식단표</router-link>
          </li>
          <li>
            <router-link to>주문하기</router-link>
          </li>
        </ul>
      </div>
      <!-- 탭메뉴 -->
    </div>
    <!-- 탭메뉴배경 -->
    <div class="diet_content_wrap">
      <!-- //이용방법 -->
      <div class="diet_content">
        <div>
          <img src="../assets/img/use1.png" alt>
        </div>
        <div class="useway1">
          <ul class="merit">
            <li>
              <img src="../assets/img/use2_1.png" alt>
            </li>
            <li>
              <img src="../assets/img/use2_2.png" alt>
            </li>
            <li>
              <img src="../assets/img/use2_3.png" alt>
            </li>
          </ul>
        </div>
        <div class="useway2">
          <ul class="faith">
            <li>
              <img src="../assets/img/use3_1.png" alt>
            </li>
            <li>
              <img src="../assets/img/use3_2.png" alt>
            </li>
          </ul>
        </div>
        <div>
          <img src="../assets/img/use4.png" alt>
        </div>
      </div>
      <!-- 이용방법 -->
      <!-- 식단표 -->
      <div class="diet_content on">
        <span class="month"><input type='month' id='currnetMonth' readonly></span>
        <ul id="gallery">
          <li>
            <OneWeek/>
          </li>
          <li>
            <TwoWeek/>            
          </li>
          <li>
            <ThreeWeek/>            
          </li>
          <li>
            <FourWeek/>            
          </li>
        </ul>
        <div id="btn_gallery">
          <router-link to="#none" class="btn_gallery_prev off">
            <img src="../assets/img/btn_prev.png" alt="이전버튼">
          </router-link>
          <router-link to="#none" class="btn_gallery_next">
            <img src="../assets/img/btn_next.png" alt="다음버튼">
          </router-link>
        </div>
      </div>
      <!-- //식단표 -->
      <!-- 주문하기 -->
      <div class="diet_content">
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
                      <router-link to="/">장바구니</router-link>
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
// 이용방법
.useway1 {
  height: 620px;
  background: url("../assets/img/use2.png") no-repeat center;
  padding-top: 353px;
  .merit {
    text-align: center;
    li {
      display: inline-block;
      margin-left: 129px;
      overflow: hidden;
      border-radius: 157px;
      &:first-child {
        margin: 0;
      }
      img {
        &:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition: transform 0.35s;
        }
      }
    }
  }
}

.useway2 {
  height: 709px;
  background: url("../assets/img/use3.png") no-repeat center;
  padding-top: 279px;
  .faith {
    margin-left: -2px;
    text-align: center;
    li {
      display: inline-block;
      overflow: hidden;
      margin-left: 60px;
      &:first-child {
        margin-left: 0;
      }
      img {
        &:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition: transform 0.35s;
        }
      }
    }
  }
}

// 이용방법
// 식단표
.week_diet_wrap {
  margin: 120px auto;
  border: 1px solid #85af4b;
}

.week_diet_top {
  padding: 56px 0;
  text-align: center;
  .week_diet_title {
    font-size: 30px;
    padding-left: 160px;
    font-weight: 600;
  }
  .week_diet_text {
    font-size: 16px;
  }
}
.month{
    position: absolute;
   left: 816px;
    top: 56px;
  input{
      border: 0;
      font-size: 30px;
      font-weight: 600;
      width: 252px;
      vertical-align: top;
      background: transparent;
      letter-spacing: normal;
    }
}
.week_diet {
  width: 100%;
  thead {
    background: #95b965;
    th {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 0;
      text-align: center;
    }
  }
  tbody {
    td {
      padding: 22px 25px;
      border-right: 1px solid #ebebeb;
      &:last-child {
        border: 0;
      }
    }
  }
}

.menu_detail {
  display: none;
  position: absolute;
  top: 0%;
  left: 24%;
  width: 1010px;
  background: #fff;
  z-index: 100;
  border-radius: 10px;
  &.on {
    display: block;
  }
}

.detail_top {
  overflow: hidden;
  padding: 27px;
  border-bottom: 1px solid #d3d3d3;
  .top_title {
    float: left;
    font-size: 19px;
    font-weight: 500;
  }
  .detail_close {
    display: block;
    float: right;
  }
}
.detail_bar{
  &::after{
    display: inline-block;
    content:"/";
    margin: 0 15px;
  }
}
.detail_bottom {
  overflow: hidden;
  padding: 29px 36px;
  .detail_title {
    position: relative;
    font-size: 22px;
    &::before {
      content: "*";
      display: inline-block;
      margin-top: 2px;
      vertical-align: top;
      margin-right: 10px;
      font-weight: 600;
    }
    &::after {
      position: absolute;
      left: 0;
      top: 20px;
      display: inline-block;
      content: "";
      width: 97px;
      height: 7px;
      background: #85af4b;
      z-index: -10;
    }
  }
  .food_list {
    width: 50%;
    float: left;
    margin-top: 22px;
    li {
      overflow: hidden;
      margin-top: 30px;
      &:first-child {
        margin-top: 0;
      }
      .food_img {
        float: left;
        overflow: hidden;
        width: 86px;
        height: 86px;
        img {
          display: block;
        }
      }
      .food_text {
        float: left;
        margin-top: 17px;
        margin-left: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        max-width: 330px;
        max-height: 49px;
        line-height: 24px;
        p {
          font-size: 18px;
        }
      }
    }
  }
}

.detail_bg {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  &.on {
    display: block;
  }
}

.menu_box {
  cursor: pointer;
  font-size: 14px;
  color: #656565;
  dt,
  em {
    color: #000;
  }
  dt {
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    text-underline-position: under;
  }
  em {
    display: block;
    margin: 5px 0;
    font-weight: 600;
  }
}
.no_dessert{
	width: 84px !important;
	height: 84px !important;
	border-radius: 43px;
	border: 1px solid #85AF4B;
}
.food_text_v2{
	margin-top :14px;
}
// //식단표
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
          &:hover {
            color: #85af4b;
          }
        }
        a {
          color: #000;
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
import OneWeek from "./OneWeek.vue";
import TwoWeek from "./TwoWeek.vue";
import ThreeWeek from "./ThreeWeek.vue";
import FourWeek from "./FourWeek.vue";
export default {
  components: {
    OneWeek,
    TwoWeek,
    ThreeWeek,
    FourWeek,
  },
  name: "Diet",
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
  mounted() {
    $(document).ready(function() {
      $(".diet_tab>li>a").on("click", function() {
        var idx = $(this)
          .parent()
          .index();
        $(this)
          .parents("ul")
          .find("a")
          .removeClass("on");
        $(this).addClass("on");
        $(".diet_content").removeClass("on");
        $(".diet_content")
          .eq(idx)
          .addClass("on");
      });
      // 식단표 스크립트
      $(".menu_box").on("click", function() {
        $(this)
          .next(".menu_detail")
          .addClass("on");
        $(".detail_bg").addClass("on");
      });
      $(".detail_close").on("click", function() {
        $(".menu_detail").removeClass("on");
        $(".detail_bg").removeClass("on");
      });
      $(".detail_bg").on("click", function() {
        $(".menu_detail").removeClass("on");
        $(this).removeClass("on");
      });
      $(".btn_gallery_prev").click(function() {
        if (
          !$("#gallery > li")
            .first()
            .is(":visible")
        ) {
          $("#gallery > li:visible")
            .hide()
            .prev("li")
            .fadeIn("80");
          $(".btn_gallery_next").removeClass("off");
        }
        if (
          $("#gallery > li")
            .first()
            .is(":visible")
        ) {
          $(this).addClass("off");
        }
      });
      $(".btn_gallery_next").click(function() {
        if (
          !$("#gallery > li")
            .last()
            .is(":visible")
        ) {
          $("#gallery li:visible")
            .hide()
            .next("li")
            .fadeIn("80");
          $(".btn_gallery_prev").removeClass("off");
        }
        if (
          $("#gallery > li")
            .last()
            .is(":visible")
        ) {
          $(this).addClass("off");
        }
      });
    });
    document.getElementById('currnetMonth').value= new Date().toISOString().slice(0, 7);
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
        localStorage.setItem("basket", JSON.stringify(data));
        this.$router.push("/order");
      }
    }
  }
};
</script>
