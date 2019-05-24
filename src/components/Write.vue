<template>
  <div class="login_wrap">
    <div class="board_keyimg"></div>
    <div class="content">
      <div class="write_wrap">
        <span class="writing">글쓰기</span>
        <form action>
          <table class="write_box">
            <colgroup>
              <col style="width:100px;">
              <col style="width:auto;">
            </colgroup>
            <tbody>
              <tr style="border-bottom: 1px solid #85AF4B">
                <th>제목</th>
                <td>
                  <input type="text" class="write_title" maxlength="40" v-model="title">
                </td>
              </tr>
              <tr>
                <th>작성자</th>
                <td>{{ userInfo.userName }}</td>
              </tr>
              <tr style="border:0;">
                <th>비밀번호</th>
                <td>
                  <input type="password" maxlength="10" class="write_password" v-model="password">
                </td>
              </tr>
              <tr style="border:0;">
                <td colspan="2">
                  <textarea class="memo" v-model="text"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="write_bottom">
            <span class="list_btn">
              <router-link to="/board">돌아가기</router-link>
            </span>
            <span class="write_submit" @click="handleOnSubmit">등록</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board_keyimg {
  height: 284px;
  background: url("../assets/img/board.jpg") no-repeat center;
}
.write_wrap {
  margin-top: 80px;
}
.writing {
  font-size: 19px;
}
.write_box {
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  border-top: 2px solid #85af4b;
  th {
    text-align: left;
    padding: 10px 0;
    padding-left: 25px;
    font-weight: 400;
  }
  tr {
    border-bottom: 1px solid #e1e1e1;
  }
  .write_title {
    width: 608px;
    height: 28px;
  }
  .write_password {
    width: 120px;
    height: 28px;
  }
}

.memo {
  width: 97.3%;
  height: 386px;
  background: #fff;
}
.write_bottom {
  overflow: hidden;
  margin-top: 38px;
  margin-bottom: 90px;
}
.list_btn {
  float: left;
  a {
    display: block;
    width: 84px;
    height: 37px;
    line-height: 37px;
    border: 1px solid #000;
    font-size: 15px;
    color: #707070;
    text-align: center;
  }
}
.write_submit {
  cursor: pointer;
  float: right;
  width: 170px;
  height: 39px;
  line-height: 39px;
  font-size: 15px;
  color: #fff;
  background: #85af4b;
  border: 0;
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  name: "Write",
  data: function() {
    return {
      userInfo: {},
      title: "",
      password: "",
      text: "",
      status: "actv"
    };
  },
  mounted() {
    if (localStorage.getItem("sat")) {
      this.getUserInfo();
    } else {
      alert("로그인이 필요합니다.");
      this.$router.push("/login");
    }
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
    handleOnSubmit: async function() {
      if (!this.title) {
        alert("제목을 입력해주세요.");
        return false;
      }

      if (!this.text) {
        alert("내용을 입력해주세요.");
        return false;
      }

      if (!this.password) {
        alert("비밀번호를 입력해주세요.");
        return false;
      }

      const data = {};
      data.inquiry = {
        title: this.title,
        userName: this.userInfo.userName,
        password: this.password,
        text: this.text,
        status: this.status
      };
      const createInquiry = await axios({
        url: "/v1/inquiries",
        method: "post",
        data: data,
        headers: { "x-sikguadang-token": localStorage.getItem("sat") }
      });
      alert("게시물이 등록되었습니다.");
      this.$router.push("/board");
    }
  }
};
</script>