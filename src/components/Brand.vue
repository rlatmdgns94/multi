<template>
	<div class="brand_wrap">
		<div class="section1">
			<div class="width_fix">
				<h1 class="title">
					당뇨인의<br>식을 담는<br>푸드 식과당
				</h1>
				<p class="section1_text">Sikguadang Beliefs and Values</p>
			</div>
		</div>
		<div class="section2">
			<ul class="trust">
				<li>
					<p>자연을<br>추구하는<br>푸드</p>
					<router-link to="/none" class="ico_plus"></router-link>
                    <p class="sub_txt">
                        “영양식단의 생명은 신선함”
                        깨끗하고 신선한 식재료는 
                        매우 중요합니다. 채소는 무
                        농약 엽채소 재배 농장에서, 
                        나물은 태백산 나물로 해발
                        1,000m 이상의 야산에서
                        직접 가져옵니다. 
                    </p>
				</li>
				<li>
					<p>식단의<br>믿음을<br>전합니다</p>
					<router-link to="/none" class="ico_plus"></router-link>
                    <p class="sub_txt">
                        당뇨인들을 위한 맞춤 당뇨
                        식단을 만들며 식단은 대한
                        당뇨협회에서 제공하는  믿
                        을 수 있는  식단표로  만듭
                        니다.  매 달 정기적으로 식
                        단표를 업데이트 해 고객님
                        들이 확인할 수 있습니다.
                    </p>
				</li>
				<li>
					<p>당뇨의<br>필요한<br>정보 제공</p>
					<router-link to="/none" class="ico_plus"></router-link>
                    <p class="sub_txt">
                        매번 찾아보기 번거로운 당
                        뇨인들이 궁금한 정보나 뉴
                        스들을 모아 편리하게 카테
                        고리별로  나눠  고객님들이  
                        찾아보실 수 있도록  정리했
                        습니다. 
                    </p>
				</li>
			</ul>
			<div class="naming naming1"></div>
			<div class="naming naming2"></div>
			<div class="naming naming3"></div>
		</div>
        <div class="section3">
            <div class="section3_text"></div>
        </div>
        <div class="section4">
            <p class="section4_text"></p>
            <p class="blind">Share for a better life for diabetics. <br> 식과당의 믿음과 가치들<br>당뇨인들의 삶의 질에 대한 고민들을 같이 공감하고 오래도록 건강하게 더 나은 삶을 위해 노력하겠습니다.</p>            
        </div>
	</div>
</template>

<style lang="scss" scoped>
// @import url(http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
.brand_wrap {
	color: #fff;
}
.width_fix {
	position: relative;
	width: 1255px;
	margin: 0 auto;
}
.section1 {
    height: 966px;
    background: url("../assets/img/brand1.jpg") no-repeat center;
	background-size: cover;
	.title {
		position: absolute;
		left: 0;
		top: 370px;
		font-size: 60px;
		line-height: normal;
		font-weight: 200;
	}
	.section1_text {
		position: absolute;
		right: 0;
        top: 400px;
        width: 691px;
        height: 198px;
        text-indent: -99999px;
        background: url("../assets/img/Sikguadang.png") no-repeat;
	}
}
.section2{
	position: relative;
	height: 966px;
	background: url("../assets/img/brand2.jpg") no-repeat center;
	background-size: cover;
	.naming{
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: cover;	
		opacity: 0;
		transition: all 1s;

	}
	.naming1{
		background: url("../assets/img/naming1.jpg") no-repeat center;
	}
	.naming2{
		background: url("../assets/img/naming2.jpg") no-repeat center;
	}
	.naming3{
		background: url("../assets/img/naming3.jpg") no-repeat center;
	}
	.active{
		opacity: 1;
	}
}
.trust{
    display: none;
    position: absolute;
    left:360px;
    top:180px;
    z-index: 100;
    font-weight: 200;
    li{
        float: left;
        margin-left:300px;
        font-size:50px;
        line-height: 70px;
		transition: all 0.3s;
        &:first-child{
            margin: 0;
        }
        &.on{
            opacity: 1;            
        }
        &.focus_out{
            opacity: 0.5;   
        }
        .sub_txt{
            position: absolute;
            top:300px;
            width: 340px;
            display: none;
            font-size:28px;
            line-height: normal;
        }
    }
	.ico_plus{
        display: block;
        margin-top: 80px;
		width: 76px;
		height: 76px;
		background: url("../assets/img/ico_plus.png") no-repeat;
		transition: all 0.3s;
		&:hover{
			background: url("../assets/img/ico_plus_hover.png") no-repeat;
		}
	}
}
.section3{
    position: relative;
    height: 966px;
	background: url("../assets/img/brand3.jpg") no-repeat center;
    background-size: cover;
    .section3_text{
        display: none;
        position: absolute;
        left: 360px;
        top: 206px;
        width: 1200px;
        height: 621px;
        background: url("../assets/img/brand3_1.png") no-repeat;
    }
}
.section4{
    position: relative;
	height: 966px;
	background: url("../assets/img/brand4.jpg") no-repeat center;
    background-size: cover;
    .section4_text{
        display: none;
        position: absolute;
        left:360px;
        top:252px;
        width: 1196px;
        height: 529px;
        background: url("../assets/img/section4_text.png") no-repeat;
    }
}
</style>

<script>
export default {
	name: "Brand",
	mounted() {
    $(document).ready(function() {
        $(".trust>li").on("mouseover focus", function() {
            $(".trust>li").addClass("focus_out");
            $(this).removeClass("focus_out");
           $(this).addClass("on");   
      });
      $(".trust>li>a").on("mouseover focus", function() {
          var idx = $(this).parent().index();
           $(".trust>li>a").css("display","block");
           $(this).css("display","none");
           $(".sub_txt").css("display","none"); 
           $(this).next(".sub_txt").css("display","block");   
		   $(".naming").removeClass("active");
		  $(".naming").eq(idx).addClass("active");
      });
      $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
          $(".trust").fadeIn();
        }
        if ($(this).scrollTop() > 1400) {
          $(".section3_text").fadeIn();
        }
        if ($(this).scrollTop() > 2500) {
          $(".section4_text").fadeIn();
        }
      });
    });
  }
};
</script>