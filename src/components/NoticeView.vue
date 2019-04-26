<template>
	<div class="login_wrap">
		<div class="board_keyimg"></div>
		<div class="content">
			<div class="board_view">
				<div class="view_top">
					<div class="view_title">교환/반품 관련 안내</div>
					<div class="view_list_btn"><router-link to="">목록</router-link></div>
				</div>
				<div class="view_content_box">
					<div class="writer_area">
						<div class="write_day">
							<span>2019.04.01</span>
						</div>
					</div>
					<div class="notice_content">
						안녕하세요 식과당입니다.<br>
						<br>
						식과당에서는 고객님의 만족을 위해 상품 수령 이후에도 후속처리를 해드리고 있습니다. <br>
						이와 관련하여 상품 환불, 교환, 주문취소 정책을 안내 드립니다.<br>
						상품 수령 후 환불, 교환, 재발송 등 처리를 위해 다음의 절차대로 접수를 받고 있습니다.<br>
						<br>
						<br>
						수령하신 상품에 문제가 있는 경우<br>
						<br>
						- 상품을 받은 날부터 3개월 이내 또는 문제가 있다는 사실을 알았거나 알 수 있었던 날부터 30일 이내에 상품의 상태를 확인할 수 있는 사진을 첨부하여 1:1문의로 성함/연락처와 함께 문의 주시면 신청이 가능합니다.<br>
						(- 상품에 문제가 있는 것으로 확인될 시 배송비는 식과당이 부담합니다.)
						<br>
						<br>
						<br>
						단순 변심, 주문 실수의 경우
						<br>
						<br>
						- 상품을 수령한 날부터 7일 이내에 교환/반품 신청을 할 수 있습니다.<br>
						- 단순 변심, 고객님의 실수에 의해 교환/반품을 요청하실 경우 발생되는 배송비는 고객님 부담이며, 실물 확인 후 추가로 청구가 될 수 있습니다.
						
						<br>
						<br>
						교환/반품 불가 안내
						<br>
						<br>
						아래에 해당하는 교환/반품 신청은 처리가 어려울 수 있으니 이점 양해 부탁드립니다.
						<br>
						- 고객님의 책임이 있는 사유로 상품이 멸실 또는 훼손된 경우<br>
						(상품 포장을 개봉 또는 훼손으로 인해 재판매가 불가능한 상품의 경우에는 단순 변심에 의한 반품이 어렵습니다)<br>
						- 고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우<br>
						- 시간 경과에 따라 상품의 가치가 현저히 감소하여 재판매가 불가능한 경우<br>
						- 고객님의 주문에 따라 개별적으로 생산되는 상품이 이미 제작이 진행된 경우 (반찬, 당일 도계 닭 상품 등)<br>
						- 고객님의 단순변심으로 인한 교환/반품 신청이 상품 수령한 날로부터 7일이 경과한 경우<br>
						- 고객센터 접수 없이 수취거부, 반송한 경우 (반송된 상품은 확인이 불가하며 상품 변질이 더 진행되어 정확한 처리가 불가합니다. 꼭 접수 후 진행해 주세요.)<br>
						- 구매한 상품의 구성품이 누락된 경우<br>
						- 기타, 상품의 교환, 환불 및 상품 결함 등의 보상은 소비자분쟁해결기준 (공정거래위원회 고시)에 의함

					</div>
				</div>
			
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board_keyimg {
	height: 284px;
	background: url("../assets/img/notice.jpg") no-repeat center;
}
.board_view{
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
	font-size: 18px;
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
.notice_content{
	padding-bottom: 100px;
	border-bottom: 1px solid #85AF4B;
}
</style>

<script>
export default {
	name: "BoardView",
};
</script>