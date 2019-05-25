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
            <router-link :to="{path: '/menu'}" class="on">식단표</router-link>
          </li>
          <li>
            <router-link :to="{path: '/dietOrder'}">주문하기</router-link>
          </li>
        </ul>
      </div>
      <!-- 탭메뉴 -->
    </div>
    <!-- 탭메뉴배경 -->
    <div class="diet_content_wrap">
      <!-- 식단표 -->
      <div class="diet_content on">
        <span class="month">
          <input type="month" id="currnetMonth" readonly>
        </span>
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
.month {
  position: absolute;
  left: 816px;
  top: 56px;
  input {
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
.detail_bar {
  &::after {
    display: inline-block;
    content: "/";
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
.no_dessert {
  width: 84px !important;
  height: 84px !important;
  border-radius: 43px;
  border: 1px solid #85af4b;
}
.food_text_v2 {
  margin-top: 14px;
}
// //식단표
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
    FourWeek
  },
  name: "Menu",
  mounted() {
    $(document).ready(function() {
      // $(".diet_tab>li>a").on("click", function() {
      //   var idx = $(this)
      //     .parent()
      //     .index();
      //   $(this)
      //     .parents("ul")
      //     .find("a")
      //     .removeClass("on");
      //   $(this).addClass("on");
      //   $(".diet_content").removeClass("on");
      //   $(".diet_content")
      //     .eq(idx)
      //     .addClass("on");
      // });
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
    document.getElementById(
      "currnetMonth"
    ).value = new Date().toISOString().slice(0, 7);
  }
};
</script>
