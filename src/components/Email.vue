<template>
  <div class="email_wrap">
    <div class="content">
      <div class="email_top">
        <h2 class="unauthorized">이메일무단수집거부</h2>
        <span class="right_text">HOME<span class="unauthorized_2">이메일무단수집거부</span></span>
      </div>
      <div class="email_content">
        E-Mail 주소 무단수집거부<br>
        <br>
        E-Mail 주소 무단수집거부 식과당 서비스 내 E-Mail 주소가 전자우편주소 수집 프로그램 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 행위 및 사전동의 없는 영리 목적의 광고성 정보 게시 행위를 거부합니다. <br>
        위 사항에 위배되는 행위 시 아래 법률 등에 의거 형사처벌 됨을 유념하시길 바랍니다. - 정보통신망이용촉진 및 정보보호 등에 관한 법률 제 50조의 2 (전자우편주소의 무단 수집행위 등 금지)
        <br><br>
        ① 누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
        <br><br>
        ② 누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매, 유통하여서는 아니된다.
        <br><br>
        ③ 누구든지 제1항 및 제2항의 규정에 의하여 수집, 판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.
        <br>
        <br>
        제 50조의 7 (영리목적의 광고성 정보 게시의 제한)
        <br><br>
        ① 누구든지 인터넷 홈페이지 운영자 또는 관리자의 명시적인 거부 의사에 반하여 영리목적의 광고성 정보를 인터넷 홈페이지에 게시하여서는 아니된다.
        <br>
        <br>
        ② 인터넷 홈페이지 운영자 또는 관리자는 제1항의 규정을 위반하여 게시된 영리목적의 광고성 정보에 대하여 삭제하는 등의 조치를 할 수 있다.
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.email_wrap{
  margin-top: 43px;
  margin-bottom: 115px;
}
.email_top{
  overflow: hidden;
  border-bottom: 2px solid #85AF4B;
  padding: 13px 0;
}
.unauthorized{
  float: left;
  font-size: 17px;
  color: #85AF4B;
  font-weight: 500;
}
.right_text{
  float: right;
  color: #707070;
  font-size: 13px;
  margin-top: 7px;
  &::before{
    display: inline-block;
    content: "";
    width: 14px;
    height: 14px;
    background: url("../assets/img/home.png") no-repeat;
    margin-right: 7px;
  }
  .unauthorized_2{
      &::before{
      display: inline-block;
      content: ">";
      margin: 0 8px;
    }
  }
}
.email_content{
  overflow: hidden;
  margin-top: 25px;
  padding: 43px 36px 80px 36px;
  border: 1px solid #E1E1E1;
  font-size: 13px;
}
</style>

<script>
export default {
  name: "Email",
};
</script>