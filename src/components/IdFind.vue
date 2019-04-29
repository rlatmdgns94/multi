<template>
  <div class="login_wrap">
    <div class="login_text">
      <h3 class="login_title">아이디 찾기</h3>
      <p class="login_greetings">
        식과당에 오신 것을 환영합니다.
        <br>당뇨 맞춤 식단과 신선한 유기농 재료로 준비합니다.
      </p>
    </div>
    <div class="login_box">
      <input
        type="text"
        class="text"
        id="idFindName"
        name="idFindName"
        v-model="userName"
        placeholder="이름을 입력해주세요."
        title="이름 입력"
        required="true"
        aria-required="true"
      >
      <input
        type="text"
        class="text"
        id="idFindMail"
        name="idFindMail"
        v-model="email"
        placeholder="가입 메일 주소를 입력해주세요."
        title="이메일 입력"
        required="true"
        aria-required="true"
      >
      <button v-on:click="postSignin" class="login_btn">확인</button>
      <ul class="login_menu">
        <li>
          <router-link to="/passwordfind">비밀번호 찾기</router-link>
        </li>
        <li>
          <router-link to="/join">회원가입</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login_wrap {
  height: 730px;
  padding-top: 200px;
  background: url("../assets/img/idFind.jpg") no-repeat center;
  text-align: center;
}
.login_text {
  color: #fff;
  .login_title {
    font-family: "SDKukdetopokki";
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  .login_greetings {
    font-size: 18px;
  }
}
.login_box {
  display: inline-block;
  width: 440px;
  margin-top: 67px;
  padding: 38px 80px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  form {
    display: block;
  }

  input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #c1c1c1;
    background: transparent;
    &:first-child {
      margin-bottom: 18px;
    }
  }
  .login_btn {
    display: block;
    width: 100%;
    margin-top: 30px;
    padding: 11px 0;
    border:0;
    background: #85af4b;
    color: #fff;
    font-size: 17px;
    border-radius: 25px;
    cursor: pointer;
  }
  .login_menu {
    margin-top: 20px;
    li {
      display: inline-block;
      &::after {
        display: inline-block;
        content: "";
        width: 1px;
        height: 11px;
        margin: 0 15px;
        background: #d5d5d5;
      }
      &:last-child::after {
        width: 0;
        margin: 0;
      }
      a {
        color: #8e8e8e;
        font-size: 12px;
      }
    }
  }
}
</style>

<script>
import axios from "axios";
export default {
  name: "IdFind",
  data: function() {
    return {
      userName: "",
      email: ""
    };
  },
  mounted() {
    if (localStorage.getItem("sat")) {
      window.location.href = "/";
    }
  },
  methods: {
    postSignin: async function() {
      try {
        if (this.userName === "") {
          alert("이름을 입력해주세요.");
          return false;
        }
        if (this.email === "") {
          alert("이메일을 입력해주세요.");
          return false;
        }

        if (true) {
          const data = {
            userId: this.userName,
            password: this.email
          };
          const response = await axios.post("/v1/users/sign_in", data);
          localStorage.setItem("sat", response.headers["x-sikguadang-token"]);
          localStorage.setItem("sar", response.headers["x-sikguadang-restore"]);
          window.location.href = "/";
        }
      } catch (error) {
        throw Error(error);
      }
    }
  }
};
</script>