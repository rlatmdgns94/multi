<template>
  <div class="login_wrap">
    <div class="board_keyimg"></div>
    <div class="content">
      <div class="board_view">
        <div class="view_top">
          <div class="view_title">{{ notice.title }}</div>
          <div class="view_list_btn">
            <router-link :to="{name: 'Notice'}">목록</router-link>
          </div>
        </div>
        <div class="view_content_box">
          <div class="writer_area">
            <div class="write_day">
              <span>{{ moment(notice.sdate).utcOffset(9).format('YYYY.MM.DD') }}</span>
            </div>
          </div>
          <div class="notice_content">
            <span v-for="line in lines" :key="line.index">
              {{line}}
              <br>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board_keyimg {
  height: 284px;
  background: url("../assets/img/notice.jpg") no-repeat center;
}
.board_view {
  margin-top: 112px;
  margin-bottom: 90px;
  border-top: 2px solid #85af4b;
}
.view_top {
  overflow: hidden;
  padding: 18px 23px 18px 60px;
  border-bottom: 1px solid #85af4b;
  .view_title {
    float: left;
    vertical-align: middle;
    font-size: 18px;
  }
  .view_list_btn {
    float: right;
    vertical-align: middle;
    a {
      display: block;
      padding: 4px 16px;
      background: #85af4b;
      color: #fff;
      font-size: 12px;
    }
  }
}
.view_content_box {
  padding: 18px 23px 0px 60px;
  font-size: 18px;
  .writer_area {
    overflow: hidden;
    font-size: 15px;
    .writer {
      float: left;
    }
    .write_day {
      float: right;
    }
    .write_icon {
      &::before {
        content: ":";
        margin: 0 5px;
      }
    }
  }
}
.notice_content {
  padding-bottom: 100px;
  border-bottom: 1px solid #85af4b;
}
</style>

<script>
import axios from "axios";
import moment from "moment";

import config from "../utils/config";
export default {
  name: "NoticeView",
  data: function() {
    return {
      cdn: config.cdn,
      moment: moment,
      notice: {},
      lines: []
    };
  },
  async mounted() {
    const getNoticeById = await axios({
      url: `/v1/notices/${this.$route.params.noticeId}`,
      method: "get"
    });
    this.notice = getNoticeById.data;
    this.lines = this.notice.text.split("\n");
  }
};
</script>