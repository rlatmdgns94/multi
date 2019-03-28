<template>
  <div class="login_wrap">
    <div class="login_text">
      <h3 class="login_title">로그인</h3>
      <p class="login_greetings">
        식과당에 오신 것을 환영합니다.
        <br>당뇨 맞춤 식단과 신선한 유기농 재료로 준비합니다.
      </p>
    </div>
    <div class="login_box">
      <input
        type="text"
        class="text"
        id="loginId"
        name="loginId"
        v-model="userId"
        placeholder="아이디를 입력해주세요."
        title="아이디 입력"
        required="true"
        aria-required="true"
      >
      <input
        type="password"
        class="text"
        id="loginPwd"
        name="loginPwd"
        v-model="password"
        placeholder="비밀번호를 입력해주세요."
        title="비밀번호 입력"
        required="true"
        aria-required="true"
      >
      <button v-on:click="postSignin" class="login_btn">로그인</button>
      <ul class="login_menu">
        <li>
          <router-link to="/">아이디 찾기</router-link>
        </li>
        <li>
          <router-link to="/">비밀번호 찾기</router-link>
        </li>
        <li>
          <router-link to="/">회원가입</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login_wrap {
  height: 730px;
  padding-top: 200px;
  background: url("../assets/img/login_bg.png") no-repeat center;
  text-align: center;
}
.login_text {
  color: #fff;
  .login_title {
    font-family: "SDKukdetopokki";
    font-size: 45px;
    margin-bottom: 25px;
  }
  .login_greetings {
    font-size: 18px;
  }
}
.login_box {
  display: inline-block;
  margin-top: 67px;
  padding: 36px 80px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  form {
    display: block;
  }

  input {
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
    margin-top: 30px;
    width: 200px;
    height: 48px;
    background: #85af4b;
    color: #fff;
    font-size: 17px;
    border-radius: 25px;
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
  name: "Login",
  data: function() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    postSignin: async function() {
      try {
        if (this.userId === "") {
          alert("아이디를 입력해주세요.");
          return false;
        }
        if (this.password === "") {
          alert("비밀번호를 입력해주세요.");
          return false;
        }

        if (true) {
        const data = {
          userId: this.userId,
          password: this.password
        };
        const response = await axios.post("/v1/users/sign_in", data);
        localStorage.setItem('sat', response.headers['x-sikguadang-token']);
        localStorage.setItem('sar', response.headers['x-sikguadang-restore']);
        this.$router.push('/');
        }
      } catch (error) {
        throw Error(error);
      }
    }
  }
};
</script>