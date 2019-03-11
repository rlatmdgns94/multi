<template>
<div class="container">
    <div class="content">
        <div class="diabetes">
            <h3 class="diabetes_title"><em>당뇨 식단 프로그램</em> </h3>
            <p class="diabetes_caption">설탕 걱정없이 안심하고 먹을 수 있는 식단 프로그램입니다. <br>맛있으면서도 안전한 식이요법을 시작해보세요.</p>
        </div>
    </div>
    <div class="diabetes_program_area">
        <p class="diabetes_program_text">고객님의 유형을 선택해 주세요</p>
        <ul class="diabetes_program content">
            <li>
                <router-link to="/">
                    <h4>일반 당뇨</h4>
                    <div>#당뇨 확진 #1,2형 당뇨</div>
               </router-link>
            </li>
            <li>
                <router-link to="/">
                    <h4>임신성 당뇨</h4>
                    <div># 안전한 출산 #태아 건강</div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <h4>당뇨 전 단계</h4>
                    <div>#일반인 #건강관리</div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<style lang="scss" scoped>

.diabetes{
    padding: 78px 0px;
    text-align: center;
    .diabetes_title{
        display: inline-block;
        margin-right: 100px;
        font-size:24px;
        font-weight: 400;
        vertical-align: top;
    }
    .diabetes_caption{
        position: relative;
        display: inline-block;
        font-size:14px;
        text-align: left;
        color:#424242;
        &::before{
            position: absolute;
            left: -50px;
            display: inline-block;
            content: "";
            width: 2px;
            height:48px;
            opacity: 0.5;
            background: #99ce66;
        }
    }
}
.diabetes_program_area{
    padding: 70px 0;
    text-align: center;
    background: #99ce66;
    .diabetes_program_text{
        margin-bottom: 30px;
        font-size:20px;
    }
    .diabetes_program{
        overflow: hidden;
        li{
            display: inline-block;
            margin-left: 20px;
            a{
                display: block;
                width: 300px;
                height:350px;
                background: green;
                &.fade{
                    transition: opacity .25s ease-out;
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