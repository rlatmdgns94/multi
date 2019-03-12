<template>
  <div class="container">
    <img src="../assets/img/diabetes_keyimg.png" alt="당뇨 식단 프로그램">
    <div class="content">
      <ul class="menu_view">
        <li>홈</li>
        <li>></li>
        <li>맞춤당 식단</li>
        <li>></li>
        <li>식단 시작하기</li>
      </ul>
    </div>
    <div>
      <ul class="diabetes_guide">
        <li>
          <span>
            <img src="../assets/img/check-form.png" alt>
          </span>
        </li>
        <li>
          <span class="step">Step2</span>
        </li>
        <li>
          <p class="guide_title">
            고객님의
            <em>당뇨 유형</em>을 선택해주세요.
          </p>
        </li>
        <li>
          <p>당뇨인들도 부담없이 맛있게 식단을 시작할 수 있습니다.</p>
        </li>
      </ul>
      <!-- 증상 선태 폼 -->
      <div class="program_option">
        <form action>
          <ul class="early_serious_chronic">
            <li>
              <label>
                <input type="radio" name="option_recommendation" value="early" class="button_like">
                <span class="symptom_button">초기 당뇨</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="option_recommendation" value="early" class="button_like">
                <span class="symptom_button">중증 당뇨</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="option_recommendation" value="early" class="button_like">
                <span class="symptom_button">만성 당뇨</span>
              </label>
            </li>
          </ul>
          <div>
            <ul class="diabetes_guide">
              <li>
                <span class="step">Step3</span>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu_view {
  float: right;
  padding: 13px 0px;
  li {
    display: inline-block;
    margin-right: 7px;
    font-size: 12px;
    &:last-child {
      color: #85af4b;
      margin-right: 0;
    }
  }
}
.diabetes_guide {
  position: relative;
  padding-top: 70px;
  text-align: center;
  background: #fcf9ed;
  &::after {
    display: inline-block;
    content: "";
    width: 29px;
    height: 15px;
    background: url("../assets/img/diabetes_guide_arrow.png") no-repeat;
    margin-top: 62px;
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
  padding-top: 60px;
  background: #fcf9ed;
  font-family: "SDKukdetopokki";
  .early_serious_chronic {
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
</style>

<script>
import $ from "jquery";

export default {
  name: "Symptom",
  mounted() {
    $(document).ready(function() {
      $(".diabetes_program>li>a").on("mouseover focus", function() {
        $(".diabetes_program>li>a").addClass("fade");
        $(this).removeClass("fade");
      });
      $(".diabetes_program>li>a").on("mouseleave focusout", function() {
        $(".diabetes_program>li>a").removeClass("fade");
      });
    });
  }
};
</script>