<template>
  <div class="login_wrap">
    <div class="login_text">
      <h3 class="login_title">로그인</h3>
      <p class="login_greetings">식과당에 오신 것을 환영합니다.<br>당뇨 맞춤 식단과 신선한 유기농 재료로 준비합니다.</p>
    </div>
    <div class="login_box">
    <from>
      <input type="text" class="text" id="loginId" name="loginId" value="" placeholder="아이디를 입력해주세요." title="아이디 입력" required="true" aria-required="true">
      <input type="password" class="text" id="loginPwd" name="loginPwd" value="" placeholder="비밀번호를 입력해주세요." title="비밀번호 입력" required="true" aria-required="true">
      <input type="submit" value="로그인" class="login_btn">
    </from>
    <ul class="login_menu">
      <li><router-link to="/">아이디 찾기</router-link></li>
      <li><router-link to="/">비밀번호 찾기</router-link></li>
      <li><router-link to="/">회원가입</router-link></li>
    </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login_wrap{
  height:730px;
  padding-top: 200px;
  background: url('../assets/img/login_bg.png') no-repeat center;
  text-align: center;
}
.login_text{
  color: #fff;
  .login_title{
    font-family: "SDKukdetopokki";
    font-size:45px;
    margin-bottom: 25px;
  }
  .login_greetings{
    font-size:18px;
  }
}
.login_box{
  display: inline-block;
  margin-top:67px;
  padding:36px 80px;
  border-radius: 15px;
   background-color: rgba( 255, 255, 255, 0.8 );
   form{
     display: block;
   }
 
  input{
    width:100%;
    height:40px;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #C1C1C1;
    background: transparent;
    &:first-child{
      margin-bottom:18px;
    }
  }
  .login_btn{
    margin-top:30px;
    height:48px;
    background: #85AF4B;
    color: #fff;
    font-size:17px;
    border-radius: 25px;
  }
  .login_menu{
    margin-top: 20px;
    li{
      display: inline-block;
      &::after{
        display: inline-block;
        content: "";
        width: 1px;
        height:11px;
        margin: 0 15px;
        background: #D5D5D5;
      }
      &:last-child::after{
        width: 0;
      }
      a{
        color: #8E8E8E;
        font-size:12px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Login",
};
</script>