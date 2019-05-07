<template>
  <div class="jipijigi_detail">
    <div>
      <div class="title_img">
        <img
          :src="article.bannerUrl ? cdn + article.bannerUrl[0].imageUrl : null"
          alt="bannerImage"
        >
      </div>
      <div class="content_img">
        <img :src="article.imageUrl ? cdn + article.imageUrl[0].imageUrl : null">
      </div>
      <div class="source_area">
        <div class="source_content">
          <div class="info">
            <ul v-if="article.hashtag" class="tag">
              <li v-for="tags in article.hashTag.split(' ')" :key="tags">
                <span>{{ tags }}</span>
              </li>
            </ul>
            <p class="text">자세한 정보는 출처를 통해 확인하세요.</p>
            <ul class="article_area">
              <li>
                <span>출처</span>
                {{ article.source }}
              </li>
              <li>
                <span>링크</span>
                <a :href="article.sourceLink" target="_blank">{{ article.sourceLink }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="recommendation_area">
      <h2 class="recommendation_title">이런 당뇨 정보는 어떠세요?</h2>
      <div class="recommendation_content">
        <ul class="recommendation">
          <li v-for="article in filteredArticleList" :key="article.title">
            <router-link :to="{name: 'JipijigiDetail', params: {articleId: article.articleId}}">
              <div class="thumbnail">
                <img :src="cdn + article.thumbnailUrl[0].imageUrl">
              </div>
              <div class="thumbnail_text">
                <h3 class="thumnail_title">{{ article.title }}</h3>
                <p class="source">출처 - {{ article.source }}</p>
                <div class="thumbnail_text_bottom">
                  <ul v-for="tags in article.hashTag.split(' ')" :key="tags" class="tag">
                    <li>{{ tags }}</li>
                  </ul>
                  <span class="date">2019.04.01</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content_img {
  width: 1000px;
  margin: 0 auto;
  img {
    margin-top: 100px;
    margin-bottom: 150px;
  }
}
.source_area {
  background: #fbfbfb;
  padding: 22px 0;
}
.source_img {
  width: 1000px;
  margin: 0 auto;
}
.source_content {
  width: 1000px;
  margin: 0 auto;
  font-size: 10px;
  .tag {
    overflow: hidden;
    li {
      float: left;
      margin-left: 15px;
      &:first-child {
        margin: 0;
      }
      span {
        display: inline-block;
        padding: 3px 16px;
        border: 1px solid #4c4c4c;
        border-radius: 30px;
      }
    }
  }
  .text {
    margin-top: 23px;
  }
  .article_area {
    margin-top: 33px;
    li {
      span {
        &::after {
          display: inline-block;
          content: "-";
          margin: 0 5px;
          margin-top: -1px;
          vertical-align: top;
        }
      }
      a {
        color: #000;
      }
    }
  }
}
.recommendation_area {
  text-align: center;
  .recommendation_title {
    display: inline-block;
    font-size: 17px;
    margin-bottom: 46px;
    &::before {
      display: block;
      width: 100%;
      height: 2px;
      margin-top: 68px;
      margin-bottom: 15px;
      content: "";
      background: #85af4b;
    }
  }
}
.recommendation_content {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 93px;
}
.recommendation {
  overflow: hidden;
  margin-left: -19px;
  > li {
    float: left;
    margin-left: 17px;
    margin-bottom: 22px;
    a {
      display: block;
      width: 235px;
      color: #000;
      border: 1px solid #d6d6d6;
      .thumbnail {
        width: 235px;
        height: 235px;
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
    font-size: 16px;
  }
  .source {
    margin-top: 3px;
    color: #767676;
    font-size: 9px;
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
      font-size: 9px;
    }
  }
  .date {
    float: right;
    font-size: 10px;
  }
}
</style>

<script>
import axios from "axios";

import config from "../utils/config";
export default {
  name: "JipijigiDetail",
  data: function() {
    return {
      cdn: config.cdn,
      article: {},
      filteredArticleList: []
    };
  },
  async mounted() {
    const getArticleById = await axios({
      url: `/v1/articles/${this.$route.params.articleId}`,
      method: "get"
    });
    this.article = getArticleById.data;

    const getArticleListByCategory = await axios({
      url: `/v1/articles/${getArticleById.data.category}`,
      method: "get"
    });
    this.filteredArticleList = getArticleListByCategory.data;
  },
  watch: {
    async $route(to, from) {
      const id = to.params.articleId;
      const getArticleById = await axios({
        url: `/v1/articles/${id}`,
        method: "get"
      });
      this.article = getArticleById.data;
    }
  }
};
</script>