<template>
  <div class="market">
    <div class="keyimg"></div>
    <div class="content">
      <div class="market_top">
        <div class="market_menu_area">
          <h3 class="blind">마켓메뉴</h3>
          <ul class="market_menu">
            <li>
              <router-link :to="{path: '/market', query: {sort: '-cdate'}}">전체</router-link>
            </li>
            <li>
              <router-link :to="{path: '/market/1', query: {sort: '-cdate'}}">반찬</router-link>
            </li>
            <li>
              <router-link :to="{path: '/market/2', query: {sort: '-cdate'}}" class="on">간식</router-link>
            </li>
            <li>
              <router-link :to="{path: '/market/3', query: {sort: '-cdate'}}">영양제</router-link>
            </li>
          </ul>
        </div>
        <div class="market_seach">
          <input type="text" placeholder="찾으시는 상품이 있으신가요?" v-model="search">
        </div>
      </div>
      <div class="market_bottom">
        <div class="product_category_area">
          <ul class="product_category">
            <!-- <li>
              <router-link :to="{name: 'Market', query: {sort: ''}}" exact-active-class="active">인기순</router-link>
            </li>-->
            <li>
              <router-link
                :to="{name: 'Market2', query: {sort: 'price'}}"
                exact-active-class="active"
              >낮은가격순</router-link>
            </li>
            <li>
              <router-link
                :to="{name: 'Market2', query: {sort: '-price'}}"
                exact-active-class="active"
              >높은가격순</router-link>
            </li>
            <li>
              <router-link
                :to="{name: 'Market2', query: {sort: '-cdate'}}"
                exact-active-class="active"
              >등록일순</router-link>
            </li>
          </ul>
        </div>
        <ul class="market_product">
          <li v-for="storeItem in paginatedData" :key="storeItem.title">
            <router-link
              :to="{name: 'MarketDetail', params: {storeItemId: storeItem.storeItemId}, query: {content: 'detail'}}"
            >
              <div class="market_product_img">
                <img :src="cdn + storeItem.thumbnailUrl[0].imageUrl">
              </div>
              <dl class="market_text">
                <dt>
                  <strong>{{ storeItem.title }}</strong>
                </dt>
                <dd>{{ storeItem.description }}</dd>
                <dd class="market_price">
                  <strong>{{ numberWithCommas(storeItem.price) }}원</strong>
                </dd>
              </dl>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content_pager">
        <ul class="pager">
          <li>
            <button
              v-for="page in pageCount"
              :key="page"
              @click="changePage(page)"
              v-bind:class="{active: pageNum === page - 1}"
            >{{ page }}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keyimg {
  height: 284px;
  background: url("../assets/img/market1.jpg") no-repeat center;
}
.market_top {
  position: relative;
  text-align: center;
  margin-top: 66px;
  .market_menu {
    li {
      display: inline-block;
      margin-left: 12px;
      &:first-child {
        margin: 0;
      }
      a {
        display: block;
        width: 95px;
        padding: 8px 0;
        color: #7e7e7e;
        font-size: 14px;
        border: 1px solid #c5c5c5;
        &.on {
          background: #86b14b;
          color: #fff;
          border: 1px solid #86b14b;
        }
      }
    }
  }
}
.market_seach {
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  border-bottom: 1px solid #85af4b;
  input {
    width: 200px;
    border: 0;
    padding: 0;
    background: url("../assets/img/search.png") no-repeat left center;
    padding-left: 26px;
  }
}
.market_bottom {
  overflow: hidden;
  margin-top: 42px;
  margin-bottom: 90px;
  .product_category_area {
    overflow: hidden;
  }
  .product_category {
    float: right;
    margin-right: 5px;
    margin-bottom: 10px;
    li {
      float: left;
      margin-left: 28px;
      &:first-child {
        margin-left: 0;
      }
      a {
        position: relative;
        display: block;
        color: #000;
        font-size: 12px;
        &.active::before {
          position: absolute;
          left: -15px;
          top: 2px;
          content: "";
          display: block;
          width: 14px;
          height: 14px;
          background: url("../assets/img/tick.png") no-repeat left;
        }
      }
    }
  }
  .market_product {
    overflow: hidden;
    li {
      display: inline-block;
      width: 32.5%;
      margin: 0 5px;
      padding-bottom: 50px;
      a {
        display: block;
        .market_product_img {
          overflow: hidden;
          height: 391px;
        }
      }
    }
  }
  .market_text {
    padding-left: 19px;
    padding-top: 24px;
    dt {
      font-size: 18px;
      color: #000;
    }
    dd {
      font-size: 14px;
      color: #656565;
    }
    .market_price {
      margin-top: 16px;
      font-size: 20px;
      color: #85af4b;
    }
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
    button {
      display: inline-block;
      width: 31px;
      height: 31px;
      line-height: 31px;
      font-size: 15px;
      color: #7b7b7b;
      background: none;
      border: none;
      outline: none;
      &.active {
        background: #85af4b;
        border-radius: 16px;
        color: #fff;
      }
    }
    span {
      padding: 0 1rem;
    }
  }
}
</style>

<script>
import axios from "axios";

import config from "../utils/config";
export default {
  name: "Market2",
  data: function() {
    return {
      cdn: config.cdn,
      pageNum: 0,
      pageSize: 9,
      search: "",
      storeItemList: [],
      searchData: [],
      pages: []
    };
  },
  created() {
    this.getStoreItemList();
  },
  watch: {
    async $route(to, from) {
      const sort = to.query.sort;
      const getStoreItemListWithQuery = await axios({
        url: `/v1/store/2?sort=${sort}`,
        method: "get"
      });
      this.storeItemList = getStoreItemListWithQuery.data;
    }
  },
  methods: {
    getStoreItemList: async function() {
      const sort = this.$route.query.sort;
      const response = await axios({
        url: `/v1/store/2?sort=${sort}`,
        method: "get"
      });
      this.storeItemList = response.data;
    },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    pageCount() {
      let listLeng = this.searchData.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;

      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      this.searchData = this.storeItemList
        .filter(data => {
          return data.title.toLowerCase().includes(this.search.toLowerCase());
        })
        .slice(0);
      return this.searchData.slice(start, end);
    }
  }
};
</script>