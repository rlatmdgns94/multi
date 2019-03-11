<template>
<div class="container">
    <div class="content">
        <ul class="diabetes_guide">
            <li><span><img src="../assets/img/cutlery.png" alt=""></span></li>
            <li><span class="step">step1</span></li>
            <li><p class="guide_title">고객님의 당뇨 유형을 선택해주세요.</p></li>
            <li><p>당뇨인들도 부담없이 맛있게 식단을 시작할 수 있습니다.</p></li>
        </ul>
    </div>
    <div class="diabetes_program_area">
        <ul class="diabetes_program content">
            <li>
                <router-link to="/">
                    <div class="diabetes_img_box"><img src="../assets/img/diabetes1.jpg" alt="일반 당뇨"></div>
                    <h4 class="diabetes_title">일반 당뇨</h4>
               </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div class="diabetes_img_box"><img src="../assets/img/diabetes2.jpg" alt="임신성 당뇨"></div>
                    <h4 class="diabetes_title">임신성 당뇨</h4>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div class="diabetes_img_box"><img src="../assets/img/diabetes3.jpg" alt="당뇨 전 단계"></div>
                    <h4 class="diabetes_title">당뇨 전 단계</h4>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<style lang="scss" scoped>

.diabetes_guide{
    padding: 56px 0px;
    text-align: center;
    li{
        margin-top:10px;
        &:first-child{
            margin-top:0;
        }
        &:last-child{
            margin-top:0;
            color:#5A5A5A;
            font-size:18px;
        }
        .guide_title{
            font-size:25px;
            font-weight: 500;
        }
    }
    .step{
        color: #85AF4B;
        font-size:25px; 
    }
}
.diabetes_program_area{
    padding: 87px 0;
    text-align: center;
    background: #FCF9ED;
    .diabetes_program{
        overflow: hidden;
        li{
            display: inline-block;
            margin-left: 110px;
            a{
                display: block;
                .diabetes_img_box{
                    width: 270px;
                    height:270px;
                    border-radius: 135px;
                    overflow: hidden;
                }
                .diabetes_title{
                    margin-top:50px;
                    color:#000;
                    font-size:23px;
                    font-weight: 300;
                }
                &.fade{
                    transition: opacity .3s ease-out;
                    opacity: 0.4;
                }
                
            }
            &:first-child{
                margin-left: 0;
            }
            
        }
    }
}
</style>

<script>
    export default {
        name: 'Diabetes',
    }
    $(document).ready(function(){
	  $('.diabetes_program>li>a').on('mouseover focus',function(){
          $('.diabetes_program>li>a').addClass('fade');
			$(this).removeClass('fade');
         });
         $('.diabetes_program>li>a').on('mouseleave focusout',function(){
             $('.diabetes_program>li>a').removeClass('fade');
         });
  });
</script>