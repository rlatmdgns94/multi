<template>
  <div class="login_wrap">
    <div class="board_keyimg"></div>
    <div class="content">
      <div class="board_view">
        <div class="view_top">
          <div class="view_title">{{ inquiry.title }}</div>
          <div class="view_list_btn">
            <router-link to="/board">목록</router-link>
          </div>
        </div>
        <div class="view_content_box">
          <div class="writer_area">
            <div class="writer">
              <span>이름</span>
              <span class="write_icon">{{ inquiry.userName }}</span>
            </div>
            <div class="write_day">
              <span>날짜</span>
              <span class="write_icon">{{ moment(inquiry.cdate).utcOffset(9).format('YYYY.MM.DD') }}</span>
            </div>
          </div>
          <div class="view_content">
            <span v-for="line in lines" :key="line.index">
              {{ line }}
              <br>
            </span>
          </div>
        </div>
        <div class="board_write_area">
          <router-link
            v-if="userInfo.userId === inquiry.userId"
            v-cloak
            :to="{name: 'Modify', params: {inquiryId: inquiry.inquiryId}}"
            class="board_modify_btn"
          >수정</router-link>
          <button
            v-if="userInfo.userId === inquiry.userId"
            v-cloak
            @click="deleteInquiry"
            class="board_modify_btn"
          >삭제</button>
        </div>
      </div>
      <div v-if="inquiry.answer.text" class="board_view">
        <div class="view_top">
          <div class="view_title">답변</div>
        </div>
        <div class="view_content_box">
          <div class="writer_area">
            <div class="writer">
              <span>이름</span>
              <span class="write_icon">{{ inquiry.answer.authorName }}</span>
            </div>
            <div class="write_day">
              <span>날짜</span>
              <span
                class="write_icon"
              >{{ moment(inquiry.answer.answerDate).utcOffset(9).format('YYYY.MM.DD') }}</span>
            </div>
          </div>
          <div class="view_content">
            <span v-for="answerLine in answerLines" :key="answerLine.index">
              {{ answerLine }}
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
  background: url("../assets/img/board.jpg") no-repeat center;
}
.board_view {
  overflow: hidden;
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
.view_content {
  margin-top: 40px;
}
.board_write_area {
  float: right;
  margin-top: 90px;
  .board_write_btn {
    display: inline-block;
    width: 170px;
    height: 39px;
    line-height: 39px;
    color: #fff;
    background: #85af4b;
    font-size: 15px;
    text-align: center;
    vertical-align: top;
  }
  .board_modify_btn {
    display: inline-block;
    width: 84px;
    height: 37px;
    margin-left: 13px;
    line-height: 39px;
    border: 1px solid #000;
    background: #fff;
    text-align: center;
    color: #535353;
    vertical-align: top;
  }
}
[v-cloak] {
  display: none;
}
</style>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "BoardView",
  data: function() {
    return {
      moment: moment,
      userInfo: {},
      inquiry: {},
      lines: [],
      answerLines: []
    };
  },
  created() {
    if (localStorage.getItem("sat")) {
      this.getUserInfo();
    }
    this.getInquiry();
  },
  methods: {
    getUserInfo: async function() {
      const getUserInfoByToken = await axios({
        url: "/v1/users/profile_edit",
        method: "get",
        headers: { "x-sikguadang-token": localStorage.getItem("sat") }
      });
      this.userInfo = getUserInfoByToken.data;
    },
    getInquiry: async function() {
      const getInquiryById = await axios({
        url: `/v1/inquiries/${this.$route.params.inquiryId}`,
        method: "get"
      });
      this.inquiry = getInquiryById.data;
      this.lines = this.inquiry.text.split("\n");
      this.answerLines = this.inquiry.answer.text.split("\n");
    },
    deleteInquiry: async function() {
      const deleteInquiryByTokenAndTitle = await axios({
        url: `/v1/inquiries/${this.inquiry.title}`,
        method: "delete",
        headers: { "x-sikguadang-token": localStorage.getItem("sat") }
      });
      if ((deleteInquiryByTokenAndTitle.data.code = "RC100200")) {
        alert("삭제되었습니다.");
        window.location.href = "/board";
      }
    }
  }
};
</script>