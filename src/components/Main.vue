<template>
  <div class="container">
    <div class="visual">
      <ul class="slider">
        <li>
          <img src="../assets/img/visual1.jpg" alt>
          <router-link to="/" class="visual_btn">
            <img src="../assets/img/visual_btn.png">
          </router-link>
        </li>
        <li>
          <img src="../assets/img/visual1.jpg" alt>
          <router-link to="/" class="visual_btn">
            <img src="../assets/img/visual_btn.png">
          </router-link>
        </li>
        <li>
          <img src="../assets/img/visual1.jpg" alt>
          <router-link to="/" class="visual_btn">
            <img src="../assets/img/visual_btn.png">
          </router-link>
        </li>
      </ul>
      <div id="bx-pager" class="main_slide_pager">
        <router-link data-slide-index="0" to="/">
          <i></i>
          <span>01</span>
          <p>당뇨 맞춤 식단 프로그램</p>
        </router-link>
        <router-link data-slide-index="1" to="/">
          <i></i>
          <span>02</span>
          <p>신선한 유기농 재료</p>
        </router-link>
        <router-link data-slide-index="2" to="/">
          <i></i>
          <span>03</span>
          <p>편리한 반조리 배송</p>
        </router-link>
      </div>
    </div>
    <div class="main_story">
      <div class="main_title_box">
        <h3 class="main_title">식과당 소개</h3>
        <p class="main_title_caption">식과당은 신뢰할 수 있는 당뇨 식단을 위해 노력하고 연구합니다.</p>
        <i class="ico_bar"></i>
      </div>
      <ul class="story_list">
        <li>
          <router-link to="/">
            <img src="../assets/img/Introduce1.jpg" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../assets/img/Introduce2.jpg" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../assets/img/Introduce3.jpg" alt>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 식과당 소개 -->
    <div class="main_program">
      <div class="main_title_box white">
        <h3 class="main_title">맞춤당 식단 프로그램</h3>
        <p class="main_title_caption">라이프 스타일과 당뇨 유형에 따라 식단을 구성했습니다.</p>
        <i class="ico_bar"></i>
      </div>
      <div class="program_box_area">
        <ul class="program_box">
          <li>
            <div class="program program_v1">
              <h4 class="program_title">일반 당뇨</h4>
              <p class="program_text">당뇨 1형, 당뇨 2형
                <br>당뇨 확진 식단
              </p>
              <router-link to="/" class="program_more">자세히 보기</router-link>
            </div>
          </li>
          <li>
            <img src="../assets/img/program1.jpg" alt>
          </li>
          <li>
            <div class="program program_v2">
              <h4 class="program_title">당뇨 전 일반인</h4>
              <p class="program_text">증상이 없는
                <br>전당뇨, 내당능, 공복혈당
              </p>
              <router-link to="/" class="program_more">자세히 보기</router-link>
            </div>
          </li>
        </ul>
        <ul class="program_box">
          <li>
            <img src="../assets/img/program2.jpg" alt>
          </li>
          <li>
            <div class="program program_v3">
              <h4 class="program_title">임신성 당뇨</h4>
              <p class="program_text">산전 검사 후,
                <br>안전한 출산을 위해
              </p>
              <router-link to="/" class="program_more">자세히 보기</router-link>
            </div>
          </li>
          <li>
            <img src="../assets/img/program3.jpg" alt>
          </li>
        </ul>
      </div>
    </div>
    <!-- //식과당 프로그램-->
    <!-- 지피지기 당뇨 정보 -->
    <div class="content">
      <div class="main_title_box">
        <h3 class="main_title">지피지기 당뇨 정보</h3>
        <p class="main_title_caption">지피지기 백전백승! 당뇨에 대해 더 자세히 알려드립니다.</p>
        <i class="ico_bar"></i>
      </div>
      <ul class="main_information">
        <li>
          <div class="information_box">
            <div class="information_img">
              <img src="../assets/img/information1.jpg" alt>
            </div>
            <h4 class="information_title">당뇨에 좋은 음식은?</h4>
            <p class="information_text">당뇨의 좋은 음식과 안 좋은 음식
              <br>어떤 것들이 있을까요?
            </p>
            <router-link to="/" class="information_more">자세히 보기</router-link>
          </div>
        </li>
        <li>
          <div class="information_box">
            <div class="information_img">
              <img src="../assets/img/information2.jpg" alt>
            </div>
            <h4 class="information_title">당뇨에 운동이 필요한 이유</h4>
            <p class="information_text">ㄹㅁ이나러어미럼렁미럼 음식을
              <br>힐링푸드를 통해 알아보세요.
            </p>
            <router-link to="/" class="information_more">자세히 보기</router-link>
          </div>
        </li>
        <li>
          <div class="information_box">
            <div class="information_img">
              <img src="../assets/img/information3.jpg" alt>
            </div>
            <h4 class="information_title">당뇨 합병증 종류에 대해서</h4>
            <p class="information_text">ㄹㅁ이나러어미럼렁미럼 음식을
              <br>힐링푸드를 통해 알아보세요.
            </p>
            <router-link to="/" class="information_more">자세히 보기</router-link>
          </div>
        </li>
      </ul>
    </div>
    <!-- 지피지기 당뇨 -->
  </div>
</template>
<style lang="scss" scoped>
.main_title_box {
  margin-top: 83px;
  text-align: center;
  .main_title {
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 300;
  }
  .main_title_caption {
    font-size: 15px;
  }
  .ico_bar {
    display: inline-block;
    margin-top: 10px;
    width: 33px;
    height: 5px;
    background: #85af4b;
  }
}
.main_story {
  width: 1125px;
  margin: 0 auto;
  .story_list {
    overflow: hidden;
    margin-top: 30px;
    li {
      float: left;
      width: 33%;
    }
  }
}
// 식과당 소개
.main_program {
  height: 794px;
  overflow: hidden;
  margin-top: 133px;
  background: url("../assets/img/program_bg.jpg") no-repeat center;
  .program_box_area {
    width: 822px;
    margin: 0 auto;
    margin-top: 30px;
    .program_box {
      li {
        float: left;
        .program {
          position: relative;
          width: 274px;
          height: 208px;
          padding-top: 66px;
          background: #fff;
          text-align: center;
        }
      }
    }
  }
  .program_title {
    font-size: 18px;
    font-weight: 400;
  }
  .program_text {
    margin-top: 19px;
  }
  .program_more {
    margin-top: 33px;
    display: inline-block;
    padding: 3px 12px;
    font-size: 12px;
    color: #000;
    border: 1px solid #707070;
    border-radius: 16px;
  }
}
.white {
  color: #fff;
}
.program_v1 {
  &::after {
    position: absolute;
    right: -16px;
    top: 121px;
    width: 16px;
    height: 32px;
    rotate: 50%;
    content: "";
    background: url("../assets/img/program_arrow_right.png") no-repeat;
  }
}
.program_v2 {
  &::after {
    position: absolute;
    bottom: -16px;
    left: 121px;
    width: 32px;
    height: 16px;
    content: "";
    background: url("../assets/img/program_arrow_down.png") no-repeat;
  }
}
.program_v3 {
  &::after {
    position: absolute;
    left: -15px;
    top: 121px;
    width: 16px;
    height: 32px;
    content: "";
    background: url("../assets/img/program_arrow_left.png") no-repeat;
  }
}
//<!-- 식과당 프로그램-->
.main_information {
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 250px;
  li {
    float: left;
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
    .information_box {
      display: inline-block;
      border: 1px solid #707070;
      padding-bottom: 24px;
      .information_img {
        width: 380px;
        height: 404px;
        overflow: hidden;
        img {
          display: block;
        }
      }
      .information_title {
        margin-top: 35px;
        font-size: 25px;
        font-weight: 400;
      }
      .information_text {
        margin-top: 29px;
        margin-bottom: 30px;
        font-size: 18px;
      }
      .information_more {
        display: inline-block;
        padding: 7px 38px;
        color: #000;
        font-size: 15px;
        border: 1px solid #85af4b;
        &:hover {
          color: #fff;
          background: #85af4b;
        }
      }
      .information_title,
      .information_text,
      .information_more {
        margin-left: 35px;
      }
    }
  }
}
// 지피지기 당뇨 정보
// 밑은 슬라이드 페이저 커스텀
.visual {
  position: relative;
  .slider {
    li {
      position: relative;
      .visual_btn {
        position: absolute;
        top: 43%;
        left: 19%;
      }
    }
  }
}
.main_slide_pager {
  position: absolute;
  bottom: 67px;
  left: 380px;
  z-index: 100;
}
.main_slide_pager a {
  display: inline-block;
  margin-left: 52px;
  color: #fff;
  font-size: 25px;
  &:first-child {
    margin-left: 0;
  }
  i {
    display: block;
    width: 348px;
    height: 2px;
    background: #fff;
  }
  &.active {
    i {
      background: #85af4b;
    }
    span,
    p {
      color: #85af4b;
    }
  }
  p {
    margin-left: 15px;
  }
}
</style>

<script>
import $ from "jquery";

export default {
  name: "Main",
  mounted() {
    $(document).ready(function() {
      $(".slider").bxSlider({
        pagerCustom: "#bx-pager",
        auto: "ture"
        // mode: 'fade'
      });
    });
  }
};
</script>