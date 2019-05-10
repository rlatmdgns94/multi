<template>
  <div class="login_wrap">
    <div class="notice_keyimg"></div>
    <div class="content">
      <div class="boardList">
        <table>
          <caption>
            <strong>1:1 문의 게시물</strong>'
            <p>번호, 제목, 등록일, 이름, 정보를 포함하는 표</p>
          </caption>
          <colgroup>
            <col style="width:95px" class="m_blind">
            <col>
            <col style="width:120px" class="t_blind">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="notice in noticeList" :key="notice.title">
              <td>1</td>
              <td class="board_list_title">
                <router-link
                  :to="{name: 'NoticeView', params: {noticeId: notice.noticeId}}"
                >{{ notice.title }}</router-link>
              </td>
              <td>2019.04.01</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content_pager">
        <ul class="pager">
          <li>
            <router-link to class="active">1</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice_keyimg {
  height: 284px;
  background: url("../assets/img/notice.jpg") no-repeat center;
}

.boardList {
  overflow: hidden;
  margin-top: 113px;
  border-top: 2px solid #85af4b;
  width: 100%;
  table {
    width: 100%;
    font-size: 15px;
  }
  thead {
    border-bottom: 1px solid #85af4b;
    th {
      font-weight: 400;
      padding: 17px 0;
    }
  }
  tbody {
    td {
      text-align: center;
      padding: 22px 0;
      border-bottom: 1px solid #bababa;
      a {
        color: #000;
      }
    }
    .board_list_title {
      text-align: left;
      padding-left: 70px;
    }
  }
}
.content_pager {
  text-align: center;
}
.pager {
  margin-top: 70px;
  margin-bottom: 76px;
  li {
    display: inline-block;
    a {
      display: block;
      width: 31px;
      height: 31px;
      line-height: 31px;
      font-size: 15px;
      color: #7b7b7b;
      &.active {
        background: #85af4b;
        border-radius: 16px;
        color: #fff;
      }
    }
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "Notice",
  data: function() {
    return {
      noticeList: []
    };
  },
  async mounted() {
    const getNoticeList = await axios({
      url: "/v1/notices",
      method: "get"
    });
    this.noticeList = getNoticeList.data;
  }
};
</script>