<template>
<div class="container">
    <img src="../assets/img/diabetes_keyimg.png" alt="당뇨 식단 프로그램">
    <div class="content">
        <ul class="menu_view">
        <li>홈</li>
        <li>></li>
        <li>맞춤당 식단</li>
        <li>></li>
        <li>식단 시작하기</li>
    </ul>
    </div>
    <div>
        <ul class="diabetes_guide">
            <li><span><img src="../assets/img/cutlery.png" alt=""></span></li>
            <li><span class="step">Step1</span></li>
            <li><p class="guide_title">고객님의 <em>당뇨 유형</em>을 선택해주세요.</p></li>
            <li><p>당뇨인들도 부담없이 맛있게 식단을 시작할 수 있습니다.</p></li>
        </ul>
    </div>
    <div class="diabetes_program_area">
        <ul class="diabetes_program content">
            <li>
                <router-link to="/symptom">
                    <div class="diabetes_img_box">
                        <div class="diabetes_bg"></div>
                        <p class="diabetes_caption">당뇨 1형, 당뇨 2형<br>당뇨 확진 식단</p>
                        <img src="../assets/img/diabetes1.jpg" class="diabetes_img" alt="일반 당뇨">
                    </div>
                    <h4 class="diabetes_title">일반 당뇨</h4>
               </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div class="diabetes_img_box">
                        <div class="diabetes_bg"></div>
                        <p class="diabetes_caption">태아 건강, 안전한 출산</p>
                        <img src="../assets/img/diabetes2.jpg" class="diabetes_img" alt="임신성 당뇨">
                    </div>
                    <h4 class="diabetes_title">임신성 당뇨</h4>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div class="diabetes_img_box">
                        <div class="diabetes_bg"></div>
                        <p class="diabetes_caption">일반인, 건강관리</p>
                        <img src="../assets/img/diabetes3.jpg" class="diabetes_img" alt="당뇨 전 단계">
                    </div>
                    <h4 class="diabetes_title">당뇨 전 단계</h4>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<style lang="scss" scoped>
.menu_view{
    float: right;
    padding: 13px 0px;
    li{
        display: inline-block;
        margin-right:7px;
        font-size: 12px;
        &:last-child{
            color: #85AF4B;
            margin-right: 0;
        }
    }
}
.diabetes_guide{
    position: relative;
    padding-top:70px;
    text-align: center;
    background: #FCF9ED;
    &::after{
        display: inline-block;
        content: "";
        width:29px;
        height:15px;
        background: url('../assets/img/diabetes_guide_arrow.png') no-repeat;
        margin-top:62px;    
    }
    li{
        margin-top:7px;
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
            em{
                font-weight: 500;
            }
        }
    }
    .step{
        color: #85AF4B;
        font-size:25px; 
    }
}
.diabetes_program_area{
    position: relative;
    padding-top: 58px;
    padding-bottom: 140px;
    text-align: center;
    background: url('../assets/img/line.jpg') repeat-x;
    .diabetes_program{
        overflow: hidden;
        li{
            display: inline-block;
            margin-left: 110px;
            a{
                display: block;
                .diabetes_img_box{
                    position: relative;
                    width: 250px;
                    height:250px;
                    padding: 10px;
                    border-radius: 135px;
                    border:1px solid #FCF9ED;
                    overflow: hidden;
                    img{
                        display:block;
                        width: 250px;
                        height:250px;
                        border-radius: 125px;
                        overflow: hidden;
                    }
                }
                .diabetes_title{
                    margin-top:50px;
                    color:#000;
                    font-size:23px;
                    font-weight: 300;
                    font-family: 'SDKukdetopokki';
                    &::before{
                        display:inline-block;
                        content: '';
                        width: 24px;
                        height:2px;
                        background: #85AF4B;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    &::after{
                        display:inline-block;
                        content: '';
                        width: 24px;
                        height:2px;
                        background: #85AF4B;
                        vertical-align: middle;
                        margin-left: 5px;
                    }
                }
                &.fade{
                    transition: opacity .3s ease-out;
                    opacity: 0.4;
                }
                &:hover .diabetes_caption{
                    display:block;
                }
                &:hover .diabetes_bg{
                    opacity: 0.3;
                    transition: opacity .3s ease-out;
                }
                &:hover .diabetes_img_box{
                    border:1px solid #85AF4B;
                }   
            }
            &:first-child{
                margin-left: 0;
            }
            
        }
    }
}
.diabetes_bg{
    position: absolute;
    width: 250px;
    height:250px;
    border-radius: 125px;
    overflow: hidden;
    background:#000;
    opacity: 0;
 
}
.diabetes_caption{
    display:none;
    position: absolute;
    top:100px;
    left:75px;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    
    
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