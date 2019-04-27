<template>
	<div class="login_wrap">
		<div class="board_keyimg"></div>
		<div class="content">
			<div class="write_wrap">
				<span class="writing">글쓰기</span>
				<form action="">
					<table class="write_box">
						<colgroup>
							<col style="width:100px;">
							<col style="width:auto;">
						</colgroup>
						<tbody>
							<tr style="border-bottom: 1px solid #85AF4B">
								<th>제목</th>
								<td><input type="text" class="write_title" maxlength="40"></td>
							</tr>
							<tr>
								<th>작성자</th>
								<td>지수빈</td>
							</tr>
							<tr style="border:0;">
								<th>비밀번호</th>
								<td><input type="password" maxlength="10" class="write_password"></td>
							</tr>
							<tr style="border:0;">
								<td colspan="2"><textarea name="memo" class="memo"></textarea></td>
							</tr>
						</tbody>
					</table>
					<div class="write_bottom">
						<span class="list_btn"><router-link to="/board">돌아가기</router-link></span> 
						<button class="write_submit">등록</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board_keyimg {
	height: 284px;
	background: url("../assets/img/board.jpg") no-repeat center;
}
.write_wrap{
	margin-top: 80px;
}
.writing{
	font-size:19px;
}
.write_box {
	width: 100%;
	margin-top: 10px;
	font-size: 14px;
	border-top: 2px solid #85AF4B;
	th {
		text-align: left;
		padding: 10px 0;
		padding-left: 25px;
		font-weight: 400;
	}
	tr {
		border-bottom: 1px solid #E1E1E1;
	}
	.write_title {
		width: 608px;
		height: 28px;
	}
	.write_password {
		width: 120px;
		height: 28px;
	}
}

.memo{
	width: 97.3%;
	height:386px;
	background: #F0F0F0;
}
.write_bottom{
	overflow: hidden;
	margin-top:38px;
	margin-bottom: 90px;
}
.list_btn{
	float:left;
	a{
		display:block;
		width:84px;
		height:37px;
		line-height:37px;
		border:1px solid #000;
		font-size: 15px;
		color:#707070;
		text-align: center;

	}
}
.write_submit{
	float:right;
	width: 170px;
	height:39px;
	line-height: 39px;
	font-size:15px;
	color:#fff;
	background:#85AF4B;
	border:0;
}
</style>

<script>
export default {
	name: "Board",
};
$(document).ready(function() {
	var $fileBox = $('.filetype');

	$fileBox.each(function() {
		var $fileUpload = $(this).find('.input-file'),
			$fileText = $(this).find('.file-text')
		$fileUpload.on('change', function() {
			var fileName = $(this).val();
			$fileText.attr('disabled', 'disabled').val(fileName);
		})
	})
});
</script>