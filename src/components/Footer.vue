<template>
<div class="footer">
    <div class="footer_top">
        <div class="content">
            <div class="footer_top_inner">
                <h3 class="blind">하단메뉴</h3>
                <ul class="footer_menu">
                    <li><router-link to="/">개인정보취급방침</router-link></li>
                    <li><router-link to="/">이메일무단수집거부</router-link></li>
                    <li><router-link to="/notice">공지사항</router-link></li>
                    <li><router-link to="/board">1:1문의</router-link></li>
                </ul> 
                <div class="footer_top_right">
                    <router-link to="/">HACCP 인증 기업</router-link>
                </div>   
            </div>
        </div>
    </div>
    <!-- //footer_top -->
    <div class="footer_bottom">
        <div class="content">
            <h4 class="footer_logo"><img src="../assets/img/footer_logo.png" alt=""></h4>
            <div class="company_information_area">
                <div class="company_information_box">
                    <ul class="company_information">
                        <li><div><b class="information_title">사업자등록번호</b>123-45-6789</div></li>
                        <li><div><b class="information_title">대표자</b>남서울대 멀티미디어학과</div></li>
                    </ul>
                    <ul class="company_information company_information2">
                        <li><div><b class="information_title">통신판매업 신고</b>123-45-6789</div></li>
                        <li><div><b class="information_title">주소</b>남서울대 멀티미디어학과</div></li>
                    </ul>
                    <p class="copyright">Copyrightⓒ 2019 sikguadang.  All right reserved.</p>
                </div>
                
                <div class="sevice_center">
                    <dl>
                        <dt>고객센터 문의</dt>
                        <dd><strong>1588-1234</strong></dd>
                        <dd>평일 9:00~18:00 / 점심시간 12:00~13:00</dd>
                    </dl>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.footer{
    margin-top: auto;
    .footer_top{
        padding:12px 0;
        background: #85af4b;
        a{
            color:#fff;
            }
        .footer_menu{
            float: left;
            li{
                position: relative;
                float:left;
                margin-right: 35px;
                &:last-child{
                    margin-right: 0;
                    &:after{
                        width: 0;
                    }
                }
                &:after{
                    position: absolute;
                    top: 7px;
                    right: -17px;
                    display: block;
                    content:"";
                    width: 1px;
                    height:12px;
                    background:#fff;
                    
                }
            }
        }
        .footer_top_right{
            float: right;
        }
    }
   
    .footer_bottom{
        padding: 50px 0;
        .footer_logo{
            float:left;
            margin-right:45px;
        }
        .company_information_area{
            overflow: hidden;
        }
        .company_information_box{
            float: left;
            overflow: hidden;
            .company_information{
            display:inline-block;
            font-size: 15px;
            color:#7C7C7C;
            &:first-child{
                margin-right: 35px;
            }
                .information_title{
                    color:#000;
                    font-weight: 300;
                    margin-right: 15px;
                }
            }
            .company_information2{
                li{
                    position: relative;
                    &::before{
                        position: absolute;
                        top:8px;
                        left:-10px;
                        width: 5px;
                        height: 5px;
                        border-radius: 2.5px;
                        display:inline-block;
                        content: "";
                        background: #BFBFBF;
                    }
                }
            }
            .copyright{
                margin-top: 35px;
            }
        }
        .sevice_center{
            float: right;
            color: #747474
            dt{
                font-size: 16px;
            }
            dd{
                strong{
                    font-size: 24px;
                    font-weight: 500;
                    color: #000;
                }
                font-size: 12px;
            }
        }
    }
}
</style>
<script>
    export default {
        name: 'Footer',
    }
</script>
