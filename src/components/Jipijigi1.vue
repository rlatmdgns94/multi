<template>
  <div class="jipijigi_wrap">
    <div class="jipijigi_keyimg"></div>
    <div class="content">
      <div class="jipijigi_nav">
        <h2 class="blind">지피지기 메뉴</h2>
        <ul class="jipijigi_gnb">
          <li>
            <router-link :to="{path: '/jipijigi', query: {limit: 8, offset: 0}}">전체</router-link>
          </li>
          <li>
            <router-link :to="{path: '/jipijigi/1'}" class="on">당뇨란?</router-link>
          </li>
          <li>
            <router-link :to="{path: '/jipijigi/2'}">당뇨 음식</router-link>
          </li>
          <li>
            <router-link :to="{path: '/jipijigi/3'}">당뇨 운동</router-link>
          </li>
        </ul>
      </div>
      <div class="jpjigi_slide">
        <ul class="slide">
          <li>
            <img src="../assets/img/jipijigi_slide1.jpg" alt>
            <div class="slide_text">
              <span>당뇨 음식 - 지피지기 당뇨</span>
              <h2 class="text_title">
                <strong>당뇨에 좋은 음식은?</strong>
              </h2>
              <p class="text_explanation">
                당뇨병이란 혈액중의 포도당(혈당)이 높아서 소변으로 포도당이 넘쳐
                나오는데서 지어진 이름입니다. 포도당은 우리가 먹는 음식물 중 탄수
                화물의 기본 구성성분입니다. 탄수화물은 위장에서 소화효소에 의해
                포도당으로 변한 다음 혈액으로 흡수됩니다. 흡수된 포도당이 우리 몸
                의 세포들에서 이용되기 위해서는 …
              </p>

              <router-link
                :to="{name: 'JipijigiDetail', params: {articleId: '5cd186e7f7590fc34b847f1a'}}"
                class="slide_more"
              >더 보기</router-link>
            </div>
          </li>
          <li>
            <img src="../assets/img/jipijigi_slide2.jpg" alt>
            <div class="slide_text">
              <span>당뇨 운동 - 지피지기 당뇨</span>
              <h2 class="text_title">
                <strong>당뇨병 환자를 위한 운동</strong>
              </h2>
              <p class="text_explanation">
                당뇨병 환자는 운동습관을 잘 들여야 한다. 제대로 운동하면 혈당 저하
                나 병 진행을 더디게 하지만, 잘못 운동하면 오히려 저혈당이나 혼수상
                태 등을 유발할 수 있다. 당뇨병 환자를 위한 운동수칙 3가지를 알아보
                자. 1. 시간 및 강도 매일 규칙적으로 할 수 있는 가벼운 전신운동이 좋
                다. 유산소운동은 적어도 20분 이상~1시간 미만으로 하고 …
              </p>
              <router-link
                :to="{name: 'JipijigiDetail', params: {articleId: '5cd18600f7590fc34b847f16'}}"
                class="slide_more"
              >더 보기</router-link>
            </div>
          </li>
          <li>
            <img src="../assets/img/jipijigi_slide3.jpg" alt>
            <div class="slide_text">
              <span>당뇨란? - 지피지기 당뇨</span>
              <h2 class="text_title">
                <strong>당뇨병의 종류에 대해서</strong>
              </h2>
              <p class="text_explanation">
                제 1형 당뇨병 - 소아 당뇨병 또는 인슐린 의존성 당뇨병이라고 알려진
                제1 형 당뇨병은우리 몸에서 인슐린이 분비되지 않기 때문에 발생합니
                다. 당뇨병 환자의5~10% 정도가 제1형 당뇨병이며 대개 어린이나 청
                소년이지만 모든 연령층에서도 발병될 수 있습니다. 또한 마른 사람이
                나 정상 체중인 사람들 도 발병될 수 있습니다. …
              </p>
              <router-link
                :to="{name: 'JipijigiDetail', params: {articleId: '5cd18552f7590fc34b847f12'}}"
                class="slide_more"
              >더 보기</router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="information_box">
        <ul class="jipijigi_information">
          <li v-for="article in articleList" :key="article.title">
            <router-link :to="{name: 'JipijigiDetail', params: {articleId: article.articleId}}">
              <div class="jipijigi_category">{{ categorySwitch(article.category) }}</div>
              <div class="thumbnail">
                <img :src="cdn + article.thumbnailUrl[0].imageUrl">
              </div>
              <div class="thumbnail_text">
                <h3 class="thumnail_title">{{ article.title }}</h3>
                <p class="source">출처 - {{ article.source }}</p>
                <div class="thumbnail_text_bottom">
                  <ul class="tag">
                    <li v-for="tags in article.hashTag.split(' ')" :key="tags">{{tags}}</li>
                  </ul>
                  <span class="date">{{ moment(article.sdate).utcOffset(9).format('YYYY.MM.DD') }}</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content_pager">
        <ul class="pager">
          <li>
            <router-link to class="active">1</router-link>
          </li>
          <li>
            <router-link to>2</router-link>
          </li>
          <li>
            <router-link to>3</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jipijigi_keyimg {
  height: 284px;
  background: url("../assets/img/jipijigi_key.jpg") no-repeat center;
}
.jipijigi_nav {
  text-align: center;
}
.jipijigi_gnb {
  margin-top: 43px;
  li {
    display: inline-block;
    margin-left: 19px;
    &:first-child {
      margin-left: 19px;
    }
    a {
      display: block;
      width: 120px;
      height: 33px;
      font-size: 15px;
      line-height: 33px;
      color: #85af4b;
      border: 1px solid #85af4b;
      border-radius: 60px;
      &.on {
        background: #85af4b;
        color: #fff;
      }
    }
  }
}
.jpjigi_slide {
  margin-top: 80px;
  border: 12px solid #85af4b;
}
.slide {
  overflow: hidden;
  img {
    float: left;
  }
  .slide_text {
    float: left;
    padding-left: 24px;
    margin-top: 60px;
    font-size: 12px;
    .text_title {
      font-size: 26px;
      margin-bottom: 18px;
    }
    .text_explanation {
      max-width: 370px;
      max-height: 500px;
      line-height: 24px;
      color: #adadad;
    }
  }
}
.slide_more {
  margin-top: 32px;
  display: inline-block;
  padding: 10px 30px;
  color: #fff;
  font-size: 13px;
  border-radius: 30px;
  background: #85af4b;
}
.information_box {
  border-top: 1px solid #d4d4d4;
  margin-top: 58px;
  padding-top: 56px;
}
.jipijigi_information {
  overflow: hidden;
  margin-left: -20px;
  > li {
    float: left;
    margin-left: 20px;
    margin-bottom: 24px;
    a {
      position: relative;
      display: block;
      width: 283px;
      color: #000;
      border: 1px solid #d6d6d6;
      .thumbnail {
        width: 283px;
        height: 283px;
        overflow: hidden;
      }
    }
  }
}
.thumbnail_text {
  padding: 20px 20px;
  .thumnail_title {
    max-width: 245px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
  }
  .source {
    margin-top: 3px;
    color: #767676;
    font-size: 12px;
    max-width: 245px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.thumbnail_text_bottom {
  overflow: hidden;
  margin-top: 22px;
  .tag {
    float: left;
    max-width: 180px;
    li {
      float: left;
      margin-right: 5px;
      font-size: 11px;
    }
  }
  .date {
    float: right;
    font-size: 14px;
  }
}
.content_pager {
  text-align: center;
}
.pager {
  margin-top: 29px;
  margin-bottom: 96px;
  li {
    display: inline-block;
    a {
      display: block;
      width: 31px;
      height: 31px;
      line-height: 31px;
      font-size: 15px;
      color: #7b7b7b;
      &.active {
        background: #85af4b;
        border-radius: 16px;
        color: #fff;
      }
    }
  }
}
.jipijigi_category {
  position: absolute;
  top: 17px;
  left: 15px;
  display: inline-block;
  background: rgba(133, 175, 75, 0.6);
  padding: 5px 11px;
  font-size: 9px;
  color: #fff;
  border-radius: 30px;
}
</style>

<script>
import axios from "axios";
import moment from "moment";

import config from "../utils/config";
export default {
  name: "Jipijigi1",
  data: function() {
    return {
      cdn: config.cdn,
      articleList: [],
      moment: moment
    };
  },
  async mounted() {
    $(document).ready(function() {
      $(".slide").bxSlider({
        pager: "true",
        auto: "true",
        controls: "true",
        touchEnabled: navigator.maxTouchPoints > 0
      });
    });
    const getArticleList = await axios({
      url: "/v1/articles/1",
      method: "get"
    });
    this.articleList = getArticleList.data;
  },
  methods: {
    categorySwitch: function(categoryNumber) {
      switch (categoryNumber) {
        case 1:
          return "당뇨란?";
        case 2:
          return "음식";
        case 3:
          return "운동";
        default:
          return null;
      }
    }
  }
};
</script>