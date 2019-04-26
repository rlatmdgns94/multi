<template>
	<div class="login_wrap">
		<div class="board_keyimg"></div>
		<div class="content">
			<div class="board_view">
				<div class="view_top">
					<div class="view_title">문의드립니다.</div>
					<div class="view_list_btn"><router-link to="">목록</router-link></div>
				</div>
				<div class="view_content_box">
					<div class="writer_area">
						<div class="writer">
							<span>이름</span>
							<span class="write_icon">지수빈</span>
						</div>
						<div class="write_day">
							<span>날짜</span>
							<span class="write_icon">2019.04.01</span>
						</div>
					</div>
					<div class="view_content">배송지 변경 문의드립니다.</div>
				</div>
				<div class="board_write_area">
					<router-link to="/write" class="board_write_btn">글쓰기</router-link>
					<router-link to="" class="board_modify_btn">수정</router-link>
					<router-link to="" class="board_modify_btn">삭제</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board_keyimg {
	height: 284px;
	background: url("../assets/img/board.jpg") no-repeat center;
}
.board_view{
	overflow: hidden;
	margin-top:112px;
	margin-bottom: 90px;
	border-top: 2px solid #85AF4B;
	
}
.view_top{
	overflow: hidden;
	padding: 18px 23px 18px 60px;
	border-bottom: 1px solid #85AF4B;
	.view_title{
		float: left;
		vertical-align: middle;
		font-size: 18px;	
	}
	.view_list_btn{
		float:right;
		vertical-align: middle;
		a{
			display: block;
			padding: 4px 16px;
			background: #85AF4B;
			color: #fff;
			font-size: 12px;
		}
	}
}
.view_content_box{
	padding: 18px 23px 0px 60px;
	.writer_area{
		overflow: hidden;
		font-size: 15px;
		.writer{
			float: left;
		}
		.write_day{
			float: right;
		}
		.write_icon{
			&::before{
				content: ":";
				margin: 0 5px;
			}
		}
	}
}
.view_content{
	margin-top:40px;
}
.board_write_area{
	float: right;
	margin-top: 90px;
	.board_write_btn{
		display: inline-block;
		width: 170px;
		height:39px;
		line-height: 39px;
		color: #fff;
		background: #85AF4B;
		font-size: 15px;
		text-align: center;
		vertical-align: top;
	}
	.board_modify_btn{
		display: inline-block;
		width: 84px;
		height: 37px;
		margin-left: 13px;
		line-height: 39px;
		border: 1px solid #000;
		background: #fff;
		text-align: center;
		color: #535353;
		vertical-align: top;
	}
}
</style>

<script>
export default {
	name: "BoardView",
};
</script>