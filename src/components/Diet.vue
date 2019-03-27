<template>
<div class="diet_wrap">
	<div class="diet_tab_area">
		<div class="diet_tab_menu">
			<h3 class="blind">맞품당 식단 탭메뉴</h3>
			<ul class="diet_tab">
				<li>
					<router-link to="#" class="on">이용방법</router-link>				
				</li>
				<li>
					<router-link to="#">식단표</router-link>
				</li>
				<li>
					<router-link to="#">주문하기</router-link>												
				</li>
				<li>
					<router-link to="#">레시피</router-link>				
				</li>
			</ul>
		</div>	
		<!-- 탭메뉴 -->
	</div>
	<!-- 탭메뉴배경 -->
	<div class="diet_content_wrap">
		<!-- //이용방법 -->
		<div class="diet_content on">
			<div>
				<img src="../assets/img/use1.png" alt="">
			</div>
			<div class="useway1">
				<ul class="merit">
					<li>
						<img src="../assets/img/use2_1.png" alt="">
					</li>
					<li>
						<img src="../assets/img/use2_2.png" alt="">
					</li>
					<li>
						<img src="../assets/img/use2_3.png" alt="">
					</li>
				</ul>
			</div>
			<div class="useway2">
				<ul class="faith">
					<li>
						<img src="../assets/img/use3_1.png" alt="">
					</li>
					<li>
						<img src="../assets/img/use3_2.png" alt="">
					</li>
				</ul>
			</div>
			<div>
				<img src="../assets/img/use4.png" alt="">
			</div>
		</div>
		<!-- 이용방법 -->
		<!-- 식단표 -->
		<div class="diet_content">
			<img src="../assets/img/use.png" alt="">			
		</div>
		<!-- //식단표 -->
		<!-- 주문하기 -->
		<div class="diet_content">
			<div class="order_wrap">
				<ul class="diabetes_guide">
					<li>
						<span>
							<img src="../assets/img/check-form.png" alt>
						</span>
					</li>
					<li>
						<span class="step">Step1</span>
					</li>
					<li>
						<p class="guide_title">
							고객님의 식단 프로그램을 설계해주세요.
						</p>
					</li>
					<li>
						<p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
					</li>
				</ul>
				<div class="program_option">
					<form action>
						<div class="diabetes_option_box">
							<ul class="diabetes_guide diabetes_guide_v1">
								<li>
									<span class="step">Step2</span>
								</li>
								<li>
									<p class="guide_title">식단의 횟수를 선택해주세요.</p>
								</li>
								<li>
									<p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
								</li>
							</ul>
							<ul class="diabetes_option">
							<li>
								<span class="diabetes_option_title">하루에</span>
								<div class="option_box">
									<input
										type="radio"
										name="meal_qty_of_the_day"
										value="1meal"
										id="option_meal_qty"
										class="option_selected"
										:checked="mealsQty === '1meal'"
									>
									<label for="option_meal_qty" class="diabetes_radio_btn">
										<span></span>2끼
									</label>
								</div>
								<div class="option_box">
									<input
										type="radio"
										name="meal_qty_of_the_day"
										value="2meal"
										id="option_meal_qty2"
										class="option_selected"
										:checked="mealsQty === '2meal'"
									>
									<label for="option_meal_qty2" class="diabetes_radio_btn">
										<span></span>3끼
									</label>
								</div>
							</li>
							<li>
								<span class="diabetes_option_title">한 주에</span>
								<div class="option_box">
									<input
										type="radio"
										name="option_days_of_week"
										value="3days"
										id="option_days_of_week"
										class="option_selected"
										:checked="days === '3days'"
									>
									<label for="option_days_of_week" class="diabetes_radio_btn">
										<span></span>3일
									</label>
								</div>
								<div class="option_box">
									<input
										type="radio"
										name="option_days_of_week"
										value="7days"
										id="option_days_of_week2"
										class="option_selected"
										:checked="days === '7days'"
									>
									<label for="option_days_of_week2" class="diabetes_radio_btn">
										<span></span>5일
									</label>
								</div>
							</li>
							<li>
								<span class="diabetes_option_title">총 몇 주</span>
								<div class="option_box">
									<input
										type="radio"
										name="option_weeks"
										value="4weeks"
										id="option_weeks"
										class="option_selected"
										:checked="weeks === '4weeks'"
									>
									<label for="option_weeks" class="diabetes_radio_btn">
										<span></span>1주
									</label>
									</div>
									<div class="option_box">
									<input
										type="radio"
										name="option_weeks"
										value="8weeks"
										id="option_weeks2"
										class="option_selected"
										:checked="weeks === '8weeks'"
									>
									<label for="option_weeks2" class="diabetes_radio_btn">
										<span></span>2주
									</label>
								</div>
							</li>
							</ul>
							<ul class="diabetes_guide diabetes_guide_v1">
								<li>
									<span class="step">Step3</span>
								</li>
								<li>
									<p class="guide_title">
									식단의 옵션을 선택해주세요.
									</p>
								</li>
								<li>
									<p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
								</li>
							</ul>
							<ul class="main_menu_option">
							<li>
								<div class="option_box">
									<img src="../assets/img/option1.png" alt>
									<input
										type="radio"
										name="option_meals"
										value="option1"
										id="option_meals"
										class="option_selected"
										:checked="options === 'option1'"
									>
									<label for="option_meals" class="diabetes_radio_btn">
										<span></span>메인식단
									</label>
								</div>
							</li>
							<li>
								<div class="option_box">
								<img src="../assets/img/option2.png" alt>
								<input
									type="radio"
									name="option_meals"
									value="option2"
									id="option_meals2"
									class="option_selected"
									:checked="options === 'option2'"
								>
								<label for="option_meals2" class="diabetes_radio_btn">
									<span></span>메인+반찬
								</label>
								</div>
							</li>
							<li>
								<div class="option_box">
								<img src="../assets/img/option3.png" alt>
								<input
									type="radio"
									name="option_meals"
									value="option3"
									id="option_meals3"
									class="option_selected"
									:checked="options === 'option3'"
								>
								<label for="option_meals3" class="diabetes_radio_btn">
									<span></span>메인+반찬+간식
								</label>
								</div>
							</li>
							</ul>
							<ul class="diabetes_guide diabetes_guide_v1">
								<li>
									<span class="step">Step5</span>
								</li>
								<li>
									<p class="guide_title">
									매주 배송 받을 요일을 선택해주세요.
									</p>
								</li>
								<li>
									<p>당뇨는 적절한 식사요법이 치료의 기본 요소입니다.</p>
								</li>
							</ul>
							<ul class="early_serious_chronic">
							<li>
								<label>
								<input
									type="radio"
									name="day_of_the_week"
									value="tuesday"
									class="button_like"
									:checked="delivery === 'tuesday'"
								>
								<span class="symptom_button">매주 화요일</span>
								</label>
							</li>
							<li>
								<label>
								<input
									type="radio"
									name="day_of_the_week"
									value="thursday"
									class="button_like"
									:checked="delivery === 'thursday'"
								>
								<span class="symptom_button">매주 목요일</span>
								</label>
							</li>
							</ul>
						</div>
						<div class="payment_box">
							<div class="payment_text"><span>하루 2끼, 주 3일, 1주 메인+반찬 식단 프로그램</span><span class="price">159,000 원</span></div>
							<div class="payment_menu">
								<ul class="payment">
									<li>
										<router-link to="/order">바로 결제하기</router-link>
									</li>
									<li>
										<router-link to="/">관심상품</router-link>
									</li>
									<li>
										<router-link to="/">장바구니</router-link>
									</li>
								</ul>
							</div>
						</div> 
					</form>
				</div>
			</div>
		</div>
		<!-- //주문하기 -->
		<div class="diet_content">
			<img src="../assets/img/use.png" alt="">
		</div>
		<!-- 레시피 -->
	</div>
	<!-- 탭 콘텐츠 -->
</div>
</template>
<style lang="scss" scoped>
.diet_wrap{
	overflow: hidden;
}
.diet_tab_area{
	position: relative;
	height:350px;
	background: url('../assets/img/diet_bg.jpg') no-repeat;
}
// 탭메뉴 배경이미지
// 탭메뉴 시작
.diet_tab_menu{
	position: absolute;
	bottom: 0;
	left:0;
	right:0;
	height:66px;
	background-color: rgba( 0, 0, 0, 0.2 );
	.diet_tab{
		width: 1000px;
		margin:0 auto;
		li{
			position: relative;
			display: inline-block;
			width: 25%;
			line-height: 66px;
			&::after{
				position: absolute;
				top:23px;
				right:0;
				display: block;
				content: "";
				width: 1px;
				height:20px;
				background: #000;
			}
			a{
				position: relative;
				display: block;
				color: #fff;
				text-align: center;
				font-size:18px;
				&.on{
					color:#538700;
					&::after{
						position: absolute;
						left:120px;
						bottom:0;
						display: block;
						content: "";
						width: 0;
						height:0;
						border-bottom:7px solid #fff;
						border-right: 7px solid transparent;
						border-left: 7px solid  transparent;
					}
				}
			}
		}
	}
}// 탭메뉴
.diet_content{
	display: none;
	&.on{
		display: block;
	}
}//탭 콘텐츠
// 이용방법
.useway1{
height: 620px;
background: url("../assets/img/use2.png") no-repeat center;
padding-top:353px;
	.merit{
		text-align: center;
		li{
			display: inline-block;
			margin-left: 129px;
			overflow: hidden;
			border-radius: 157px;
			&:first-child{
				margin: 0;
			}
			img{
				&:hover{
					cursor: pointer;
					transform:scale(1.2np);
					transition: transform .35s;
				}
			}
		}
	}
}
.useway2{
height: 709px;
background: url("../assets/img/use3.png") no-repeat center;
padding-top:279px;
	.faith{
		margin-left: -2px;
		text-align: center;
		li{
			display: inline-block;
			overflow: hidden;
			margin-left: 60px;
			&:first-child{
				margin-left: 0;
			}
			img{
				&:hover{
					cursor: pointer;
					transform:scale(1.2);
           			transition: transform .35s;
				}
			}
		}
	}
}
// 이용방법
// 주문하기
.order_wrap{
	padding-top: 120px;
}
.diabetes_guide {
  position: relative;
  text-align: center;
  font-family: "Noto Sans KR";
  &.diabetes_guide_v1 {
    background: #fff;
    &::after {
      height: 0;
    }
  }
  li {
    margin-top: 7px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-top: 0;
      color: #5a5a5a;
      font-size: 18px;
    }
    .guide_title {
      font-size: 25px;
      em {
        font-weight: 500;
      }
    }
  }
  .step {
    color: #85af4b;
    font-size: 25px;
  }
}
.program_option {
  position: relative;
  margin-top:90px;
  text-align: center;
  font-family: "SDKukdetopokki";
  .early_serious_chronic {
	  margin-top: 65px;
    text-align: center;
    li {
      display: inline-block;
      margin-left: 100px;
      &:first-child {
        margin-left: 0;
      }
    }
    input {
      display: none;
    }
    .symptom_button {
      display: inline-block;
      padding: 19px 66px;
      border: 1px solid #85af4b;
      background: #fff;
      border-radius: 40px;
      font-size: 25px;
    }
    .button_like:checked + .symptom_button {
      color: #fff;
      background: #85af4b;
    }
  }
}
.diabetes_option_box {
  width: 1400px;
  margin: 0 auto;
    padding-top:134px;
  padding-bottom: 126px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #707070;
}
.diabetes_option {
  text-align: center;
  margin-top: 88px;
  margin-bottom: 155px;
  li {
    position: relative;
    display: inline-block;
    text-align: left;
    margin-left: 180px;
    &:first-child {
      margin-left: 0;
    }
    &:after {
      position: absolute;
      right: -50%;
      top: 0;
      content: "+";
      font-size: 30px;
    }
    &:last-child:after {
      font-size: 0;
    }
  }
  .diabetes_option_title {
    display: block;
    padding: 4px 55px;
    margin-bottom: 60px;
    color: #fff;
    font-size: 28px;
    background: #85af4b;
  }
}
.option_box {
  margin-top: 5px;
  text-align: center;
  img {
    display: block;
    margin-bottom: 38px;
  }
}
.option_selected {
  display: none;
}
.diabetes_radio_btn {
  font-size: 22px;
  text-align: center;
  span {
    display: inline-block;
    width: 29px;
    height: 29px;
    margin-top: 2px;
    margin-right: 15px;
    vertical-align: top;
    background: url("../assets/img/check.png") no-repeat;
  }
}
.option_selected:checked + .diabetes_radio_btn span {
  background: url("../assets/img/checked.png") no-repeat;
}
.main_menu_option {
  text-align: center;
  margin-top: 65px;
  margin-bottom: 170px;
  li {
    display: inline-block;
    margin-right: 220px;
    &:last-child {
      margin: 0;
    }
  }
}
.payment_box{
  overflow: hidden;
  display: inline-block;
  width: 1396px;
  margin-top: 53px;
  margin-bottom: 200px;
  background: #fff;
  border: 1px solid #85AF4B;
  font-size:20px;
  font-family: "Noto Sans KR";
  box-shadow: 0px 3px 8px 1px rgba(133, 175, 75, 0.2);
  .payment_text{
	  overflow: hidden;
		padding: 25px 58px;
		border-bottom: 1px solid #D1D1D1;
	span{
		float: left;
	}
    .price{
      float: right;
    }
  }
  .payment_menu{
    padding: 25px 58px;
    text-align: right;
		.payment{
			li{
				display: inline-block;
				margin-right: 26px;
				&:last-child{margin-right: 0;}
				a{
					color:#000;
					&:hover{
						color:#85AF4B;
					}
				}
			}
		}
  }
}
// //주문하기
</style>
<script>
export default {
  name: "Diet",
  mounted() {
    $(document).ready(function(){
		$('.diet_tab>li>a').on('click', function(){
			var idx = $(this).parent().index();
			$(this).parents('ul').find('a').removeClass('on');
			$(this).addClass('on');
			$('.diet_content').removeClass('on');
			$('.diet_content').eq(idx).addClass('on');
		});
	})
  }
};
</script>