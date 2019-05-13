<template>
  <div class="join_wrap">
    <div class="join_bg"></div>
    <div class="content join_box">
      <!-- <form onSubmit="postUser"> -->
      <div class="join_wirte">
        <table class="join_table">
          <caption>회원가입 기본정보</caption>
          <tbody>
            <tr>
              <th scope="row">
                <label for="id">
                  아이디
                  <img src="../assets/img/ico_required.gif" alt>
                </label>
              </th>
              <td>{{ userInfo.userId }}</td>
            </tr>
            <tr>
              <th scope="row">
                <label for="password">
                  비밀번호
                  <img src="../assets/img/ico_required.gif" alt>
                </label>
              </th>
              <td>
                <input
                  type="password"
                  id="password"
                  size="12"
                  maxlength="16"
                  style="margin-right:3px"
                  v-model="password"
                >(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label for="password2">
                  비밀번호 확인
                  <img src="../assets/img/ico_required.gif" alt>
                </label>
              </th>
              <td>
                <input type="password" id="password2" size="12" v-model="passwordCheck">
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label for="name">
                  이름
                  <img src="../assets/img/ico_required.gif" alt>
                </label>
              </th>
              <td>{{ userInfo.userName }}</td>
            </tr>
            <tr>
              <th scope="row">휴대전화</th>
              <td>
                <select v-model="phoneFirst">
                  <option value="010" selected>010</option>
                  <option value="011">011</option>
                  <option value="012">012</option>
                  <option value="013">013</option>
                </select>
                -
                <input type="text" size="4" maxlength="4" v-model="phoneMiddle">-
                <input type="text" size="4" maxlength="4" v-model="phoneLast">
              </td>
            </tr>
            <tr>
              <th scope="row">
                <label for="email1">
                  이메일
                  <img src="../assets/img/ico_required.gif" alt>
                </label>
              </th>
              <td>
                <input type="text" id="str_email01" size="12" v-model="emailId">@
                <input type="text" id="str_email02" size="12" v-model="domain">
                <select name="email2" id="selectEmail" class="selectEmail" v-model="domain">
                  <option value="naver.com">naver.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="yahoo.co.kr">yahoo.co.kr</option>
                  <option value="empas.com">empas.com</option>
                  <option value="dreamwiz.com">dreamwiz.com</option>
                  <option value="freechal.com">freechal.com</option>
                  <option value="lycos.co.kr">lycos.co.kr</option>
                  <option value="korea.com">korea.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hanmir.com">hanmir.com</option>
                  <option value="paran.com">paran.com</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="join_btn_area">
      <label for="join_submit" class="join_submit">수정완료</label>
      <input id="join_submit" value="회원가입" @click="postUser">
      <label for="join_reset" class="join_submit join_reset">취소</label>
      <input id="join_reset" type="reset" value="가입취소" @click="handleCancel">
      <span class="delete_member_btn">
        <button @click="handleDeleteUser" class="join_submit join_reset">회원탈퇴</button>
      </span>
    </div>
    <!-- </form> -->
  </div>
</template>
<style lang="scss" scoped>
.join_wrap {
  text-align: center;
  .join_bg {
    height: 284px;
    background: url("../assets/img/update.jpg") no-repeat center;
  }
  .join_box {
    margin-top: 98px;
    margin-bottom: 88px;
  }
}
.id_check {
  display: inline-block;
  padding: 2px 10px;
  margin: 0 3px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  vertical-align: middle;
  background: #85af4b;
  color: #fff;
}
.join_table {
  display: block;
  border-top: 2px solid #d7d5d5;
  font-size: 14px;
  th {
    width: 130px;
    padding-left: 20px;
    text-align: left;
    font-weight: 400;
    background: #f6f6f6;
    img {
      margin-top: 7px;
      margin-left: 4px;
    }
  }
  td {
    width: 88%;
    padding: 7px 10px;
    text-align: left;
    input {
      height: 23px;
    }
  }
  tr {
    border-bottom: 1px solid #dfdfdf;
  }
}
.selectEmail {
  margin-left: 5px;
}
// 이용약관
.agreement_wrap {
  overflow: hidden;
}
.join_agreement_column {
  float: left;
  width: 49%;
  vertical-align: top;
  text-align: left;
  margin-top: 60px;
  &:last-child {
    float: right;
  }
  h3 {
    font-size: 14px;
    padding: 0 5px;
  }
  .agreeArea {
    padding: 10px 10px 10px 10px;
    background: #fff;
    border: 1px solid #eaeaea;
    color: #747474;
    font-size: 11px;
  }
  .agree {
    overflow: auto;
    height: 110px;
    padding: 20px;
    border: 1px solid #eaeaea;
  }
  .check {
    padding: 7px 0 0 0;
    color: #202020;
    font-size: 12px;
  }
}
// 이용약관
.join_submit {
  display: inline-block;
  padding: 8px 42px;
  background: #85af4b;
  color: #fff;
  font-size: 19px;
  border: 1px solid #85af4b;
}
.join_reset {
  display: inline-block;
  border: 1px solid #727272;
  color: #727272;
  background: #fff;
  margin-left: 40px;
}
.join_btn_area {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;
  input {
    display: none;
  }
}
.delete_member_btn {
  position: absolute;
  right: 0;
  top: -3px;
}
</style>

<script>
import axios from "axios";
export default {
  name: "UpdateMember",
  data: function() {
    return {
      userInfo: {}
    };
  },
  async mounted() {
    $(document).ready(function() {
      $("#selectEmail").change(function() {
        $("#selectEmail option:selected").each(function() {
          if ($(this).val() == "1") {
            //직접입력일 경우
            $("#str_email02").val(""); //값 초기화
            $("#str_email02").attr("disabled", false); //활성화
          } else {
            //직접입력이 아닐경우
            $("#str_email02").val($(this).text()); //선택값 입력
            $("#str_email02").attr("disabled", true); //비활성화
          }
        });
      });
    });

    const getUserInfo = await axios({
      url: "/v1/users/profile_edit",
      method: "get",
      headers: { "x-sikguadang-token": localStorage.getItem("sat") }
    });
    this.userInfo = getUserInfo.data;
  },
  methods: {
    handleCancel: function() {
      this.$router.push("/mypage");
    },
    handleDeleteUser: async function() {
      const deleteUser = await axios({
        url: "/v1/users/delete_user",
        method: "delete",
        headers: { "x-sikguadang-token": localStorage.getItem("sat") }
      });
      if (deleteUser.data.code === "RC100200") {
        alert("회원 탈퇴가 완료되었습니다.");
        localStorage.removeItem("sat");
        localStorage.removeItem("sar");
        this.$router.push("/");
      }
    }
  }
};
</script>
