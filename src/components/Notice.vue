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
						<tr>
							<td>3</td><td class="board_list_title"><router-link to="">고객센터 이용시간 안내</router-link></td><td>2019.04.01</td>
						</tr>
						<tr>
							<td>2</td><td class="board_list_title"><router-link to="">1:1 문의 이용방법</router-link></td><td>2019.04.01</td>
						</tr>
						<tr>
							<td>1</td><td class="board_list_title"><router-link to="/noticeview">교환/반품 관련 안내</router-link></td><td>2019.04.01</td>
						</tr>
					</tbody>
				</table>
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
.notice_keyimg {
	height: 284px;
	background: url("../assets/img/notice.jpg") no-repeat center;
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
	name: "Notice",
};
</script>