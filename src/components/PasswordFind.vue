<template>
  <div class="login_wrap">
    <div class="login_text">
      <h3 class="login_title">비밀번호 찾기</h3>
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
      <button v-on:click="findPassword" class="login_btn">확인</button>
      <ul class="login_menu">
        <li>
          <router-link to="/idfind">아이디 찾기</router-link>
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
  background: url("../assets/img/passwordFind.jpg") no-repeat center;
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
    border: 0;
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
  name: "Login",
  data: function() {
    return {
      userId: "",
      email: ""
    };
  },
  mounted() {
    if (localStorage.getItem("sat")) {
      window.location.href = "/";
    }
  },
  methods: {
    findPassword: function() {
      const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

      if (this.userId === "") {
        alert("아이디를 입력해주세요.");
        return false;
      }
      if (this.email === "") {
        alert("이메일을 입력해주세요.");
        return false;
      }

      if (emailRegExp.test(this.email) !== true) {
        alert("이메일 양식에 맞게 입력해주세요.");
        return false;
      }

      if (true) {
        const data = {
          userId: this.userId,
          email: this.email
        };
        const findPasswordByUserIdAndEmail = axios
          .post("/v1/users/findPassword", data)
          .then(function(response) {
            if (response.data.status === 404) {
              alert("아이디 또는 이메일 주소를 확인해주세요.");
            } else {
              alert(
                `비밀번호가 임시 비밀번호인 ${
                  response.data.userInfo.password
                }로 변경되었습니다.\n 반드시 비밀번호를 변경해주세요.`
              );
              console.log(response.data.userInfo);
            }
          })
          .catch(function(ex) {
            alert("비밀번호를 변경할 수 없습니다.");
          });
      }
    }
  }
};
</script>