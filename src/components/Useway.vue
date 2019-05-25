<template>
  <!-- eslint-disable -->
  <div class="diet_wrap">
    <div class="diet_tab_area">
      <div class="diet_tab_menu">
        <h3 class="blind">맞춤당 식단 탭메뉴</h3>
        <ul class="diet_tab">
          <li>
            <router-link :to="{path: '/useway'}" class="on">이용방법</router-link>
          </li>
          <li>
            <router-link :to="{path: '/menu'}">식단표</router-link>
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
      <!-- //이용방법 -->
      <div class="diet_content on">
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
</style>

<script>
export default {
  name: "Useway"
};
</script>
