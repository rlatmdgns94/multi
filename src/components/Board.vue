<template>
	<div class="login_wrap">
		<div class="board_keyimg"></div>
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
						<tr>
							<td>4</td><td class="board_list_title"><router-link to="/boardview">문의드립니다.</router-link></td><td>김승훈</td><td>2019.04.01</td>
						</tr>
						<tr>
							<td>3</td><td class="board_list_title"><span class="answer_icon">re</span><router-link to="">문의드립니다.</router-link></td><td>식과당</td><td>2019.04.01</td>
						</tr>
						<tr>
							<td>2</td><td class="board_list_title"><router-link to="">문의드립니다.</router-link></td><td>김승훈</td><td>2019.04.01</td>
						</tr>
						<tr>
							<td>1</td><td class="board_list_title"><span class="answer_icon">re</span>문의드립니다.</td><td>식과당</td><td>2019.04.01</td>
						</tr>
					</tbody>
				</table>
				<div class="board_btn_area">
					<div class="board_search_area">
						<form>
							<select id="search_key" name="search_key"  class="search_key">
								<option value="subject">제목</option>
								<option value="content">내용</option>
								<option value="writer_name">글쓴이</option>
								<option value="member_id">아이디</option>
							</select>
							<input type="text" title="게시판 검색" class="search_text">
							<button class="board_search_btn">검색</button>
						</form>
					</div>
					<div class="board_write_area"><router-link to="/write" class="board_write_btn">글쓰기</router-link></div>
				</div>		
			</div>
			<div class="content_pager">
				<ul class="pager">
					<li>
						<router-link to="" class="active">1</router-link>
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
	border-top: 2px solid #85AF4B;
	width: 100%;
	table{
		width: 100%;
		font-size: 15px;
	}
	thead{
		border-bottom: 1px solid #85AF4B;
		th{
			font-weight: 400;
			padding :17px 0;
		}
	}
	tbody{
		td{
			text-align: center;
			padding: 22px 0;
			border-bottom: 1px solid #BABABA;
			a{
				color:#000;
			}
		}
		.board_list_title{
			text-align: left;
			padding-left:70px;
		}
	}
	.answer_icon{
		padding: 2px 14px;
		color: #fff;
		background: #85AF4B;
		font-size: 13px;
		margin-right: 17px;
	}
}
.board_btn_area{
	overflow: hidden;
	margin-top: 40px;
}
.search_key{
	height: 39px;
}
.search_text{
	width: 160px;
	height: 37px;
	margin-left: 10px;
}
.board_search_area{
	float:left;
	.board_search_btn{
		margin-left:10px;
		border: 0;
		background: #85AF4B;
		color: #fff;
		padding: 0 20px	;
		height: 39px;
	}
}

.board_write_area{
	float: right;
	.board_write_btn{
		display: block;
		width: 170px;
		height:39px;
		line-height: 39px;
		color: #fff;
		background: #85AF4B;
		font-size: 15px;
		text-align: center;
	}
}
.content_pager{
    text-align: center
}
.pager{
    margin-top: 70px;
    margin-bottom: 76px;
    li{
        display: inline-block;
        a{
            display: block;
            width: 31px;
            height: 31px;
            line-height: 31px;
            font-size: 15px;
            color: #7B7B7B;
            &.active{
                background: #85AF4B;
                border-radius: 16px;
                color: #fff;
            }
        }
    }
}
</style>

<script>
export default {
	name: "Board",
};
</script>