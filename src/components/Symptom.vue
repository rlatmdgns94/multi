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
          <div class="diabetes_option_box">
            <ul class="diabetes_guide diabetes_guide_v1">
                <li><span class="step">Step3</span></li>
                <li><p class="guide_title">고객님의 <em>식단 프로그램</em>을 확인해주세요.</p></li>
                <li><p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p></li>
            </ul>
            <ul class="diabetes_option">
                <li>
                    <span class="diabetes_option_title">하루에</span>
                    <div class="option_box">
                      <input type="radio" name="option_meals" value="a" id="option_meals" class="option_selected">
                      <label for="option_meals" class="diabetes_radio_btn"><span></span>1끼</label>
                    </div>
                    <div class="option_box">
                      <input type="radio" name="option_meals" value="a" id="option_meals2" class="option_selected">
                      <label for="option_meals2" class="diabetes_radio_btn"><span></span>2끼</label>
                    </div>
                </li>
                <li>
                    <span class="diabetes_option_title">한주에</span>
                    <div class="option_box">
                      <input type="radio" name="option_meals" value="a" id="option_meals" class="option_selected">
                      <label for="option_meals" class="diabetes_radio_btn"><span></span>3일</label>
                    </div>
                    <div class="option_box">
                      <input type="radio" name="option_meals" value="a" id="option_meals2" class="option_selected">
                      <label for="option_meals2" class="diabetes_radio_btn"><span></span>7일</label>
                    </div>
                </li>
                <li>
                    <span class="diabetes_option_title">총 몇주</span>
                    <div class="option_box">
                      <input type="radio" name="option_meals" value="a" id="option_meals" class="option_selected">
                      <label for="option_meals" class="diabetes_radio_btn"><span></span>4주</label>
                    </div>
                    <div class="option_box">
                      <input type="radio" name="option_meals" value="a" id="option_meals2" class="option_selected">
                      <label for="option_meals2" class="diabetes_radio_btn"><span></span>8주</label>
                    </div>
                </li>
            </ul>
            <ul class="diabetes_guide diabetes_guide_v1">
                <li><span class="step">Step4</span></li>
                <li><p class="guide_title">식단의 <em>옵션을</em>을 선택해주세요.</p></li>
                <li><p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p></li>
            </ul>
            <ul class="main_menu_option">
               <li>
                    <div class="option_box">
                      <img src="../assets/img/option1.png" alt="">
                      <input type="radio" name="option_meals" value="a" id="option_meals" class="option_selected">
                      <label for="option_meals" class="diabetes_radio_btn"><span></span>메인식단</label>
                    </div>
                </li>
                <li>
                    <div class="option_box">
                      <img src="../assets/img/option2.png" alt="">
                      <input type="radio" name="option_meals" value="a" id="option_meals" class="option_selected">
                      <label for="option_meals" class="diabetes_radio_btn"><span></span>메인+반찬</label>
                    </div>
                </li>
                <li>
                    <div class="option_box">
                      <img src="../assets/img/option3.png" alt="">
                      <input type="radio" name="option_meals" value="a" id="option_meals" class="option_selected">
                      <label for="option_meals" class="diabetes_radio_btn"><span></span>메인+반찬+간식</label>
                    </div>
                </li>
            </ul>
            <ul class="diabetes_guide diabetes_guide_v1">
                <li><span class="step">Step5</span></li>
                <li><p class="guide_title">매주 배송 받을 <em>요일</em>을 선택해주세요.</p></li>
                <li><p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p></li>
            </ul>
            <ul class="early_serious_chronic">
            <li>
              <label>
                <input type="radio" name="option_recommendation" value="early" class="button_like">
                <span class="symptom_button">매주 화요일</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="option_recommendation" value="early" class="button_like">
                <span class="symptom_button">매주 목요일</span>
              </label>
            </li>
          </ul>
          </div>
          <div>
            <p>일반당뇨 - 초기당뇨 맞춤당 프로그램</p><p>159,000 원</p>

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
  &.diabetes_guide_v1{
        background: #fff;
        &::after{
          height:0;
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
  padding: 60px 0;
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
 .diabetes_option_box{
        width: 1400px;
        margin: 0 auto;
        overflow: hidden;
        background: #fff;
        border: 1px solid #707070;
        margin-top: 100px;
        margin-bottom: 50px;
        padding-bottom: 100px;
    }
    .diabetes_option{
      text-align: center;
      li{
        position: relative;
        display: inline-block;
        text-align: left;
        margin-left: 180px;
        &:first-child{
          margin-left: 0;
        }
        &:after{
          position: absolute;
          right:-50%;
          top:0;
          content: "+";
          font-size:30px;
        }
        &:last-child:after{
          font-size: 0;
        }
      }
      .diabetes_option_title{
        display: block;
        padding: 4px 55px;
        margin-bottom: 60px;
        color:#fff;
        font-size:28px;
        background:#85AF4B;
      }
     
        
    }
     .option_box{
        margin-top:5px;
        text-align: center;
        img{display: block; margin-bottom:38px;}
      }
    .option_selected{
            display: none;
        }
     .diabetes_radio_btn{
          font-size:22px;
          text-align: center;
            span{
                display: inline-block;
                width: 29px;
                height:29px;
                margin-top: 2px;
                margin-right:15px;
                vertical-align: top;
                background: url('../assets/img/check.png') no-repeat;
            }
        }
        .option_selected:checked+.diabetes_radio_btn span{
            background: url('../assets/img/checked.png') no-repeat;
        }
    .main_menu_option{
      text-align: center;
      li{
        display: inline-block;
        margin-right:220px;
        &:last-child{
          margin:0;
        }
      }
    }
</style>

<script>
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