<template>
  <div class="login_wrap">
    <div class="board_keyimg"></div>
    <div class="content">
      <div class="boardList">
        <div class="board_search_area">
          <form>
            <select id="search_key" name="search_key" class="search_key">
              <option value="subject">제목</option>
              <option value="content">내용</option>
              <option value="writer_name">글쓴이</option>
              <option value="member_id">아이디</option>
            </select>
            <input type="text" title="게시판 검색" class="search_text">
            <button class="board_search_btn">검색</button>
          </form>
        </div>
        <table>
          <caption>
            <strong>1:1 문의 게시물</strong>'
            <p>번호, 제목, 등록일, 이름, 정보를 포함하는 표</p>
          </caption>
          <colgroup>
            <col style="width:95px" class="m_blind">
            <col>
            <col style="width:84px">
            <col style="width:120px" class="t_blind">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">이름</th>
              <th scope="col">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="inquiry in inquiryList" :key="inquiry.number">
              <td>{{ inquiry.number }}</td>
              <td class="board_list_title">
                <router-link
                  :to="{name: 'BoardView', params: {inquiryId: inquiry.inquiryId}}"
                >{{ inquiry.title }}</router-link>
                <span v-if="inquiry.answer.text" class="answer_icon">답변</span>
              </td>
              <td>{{ inquiry.userName }}</td>
              <td>{{ moment(inquiry.cdate).utcOffset(9).format('YYYY.MM.DD') }}</td>
            </tr>
          </tbody>
        </table>
        <div class="board_btn_area">
          <div class="board_write_area">
            <router-link to="/write" class="board_write_btn">글쓰기</router-link>
          </div>
        </div>
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
.board_keyimg {
  height: 284px;
  background: url("../assets/img/board.jpg") no-repeat center;
}

.boardList {
  overflow: hidden;
  margin-top: 113px;
  width: 100%;
  table {
    border-top: 2px solid #85af4b;
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
  .answer_icon {
    padding: 2px 14px;
    color: #fff;
    background: #85af4b;
    font-size: 13px;
    margin-left: 17px;
  }
}
.board_btn_area {
  overflow: hidden;
  margin-top: 40px;
}
.search_key {
  height: 39px;
}
.search_text {
  width: 160px;
  height: 37px;
  margin-left: 10px;
}
.board_search_area {
  float: right;
  margin-bottom: 20px;
  .board_search_btn {
    margin-left: 10px;
    border: 0;
    background: #85af4b;
    color: #fff;
    padding: 0 20px;
    height: 39px;
  }
}

.board_write_area {
  float: right;
  .board_write_btn {
    display: block;
    width: 170px;
    height: 39px;
    line-height: 39px;
    color: #fff;
    background: #85af4b;
    font-size: 15px;
    text-align: center;
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
import moment from "moment";

export default {
  name: "Board",
  data: function() {
    return {
      moment: moment,
      inquiryList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList: async function() {
      const getInquiryList = await axios({
        url: "/v1/inquiries",
        method: "get"
      });
      this.inquiryList = getInquiryList.data;
      console.log(getInquiryList.data);
    }
  }
};
</script>