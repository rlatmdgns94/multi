<template>
    <div class="market">
        <div class="keyimg"></div>
        <div class="content market_detail_wrap">
            <div class="market_detail_top">
                <div class="market_detail_img">
    
                </div>
                <div class="detail_info">
                    <span class="info_caption">체험식/Experience</span>
                    <dl class="item">
                        <dt class="title"><strong>[체험식] 당뇨 체험식 일주일</strong></dt>
                        <dd class="pirce"><strong>판매가 : </strong><em class="price_num">9,900원</em></dd>
                        <dd>
                            <strong>중량 : </strong>
                            <span class="weight_text">1,450 g(셀프부대찌개재료:662 g,사골육수:650 g,신라면:120 g,체다슬라이스치즈:18 g)</span>
                        </dd>
                        <dd class="expiration_date">
                            <strong>유통기한 : </strong>
                            <span class="weight_text weight_text_v1">
                                셀프부대찌개재료 : 제조일로부터 냉장 4일, 사골육수 : 제조일로부터 냉동 180일<br>신라면 : 제조일로부터 6개월, 체다슬라이스치즈 : 제조일로부터 6개월</span>
                        </dd>
                        <dd class="shipping_guide">
                            <strong>배송안내 : </strong>
                            <span class="free_delivery">무료배송</span>
                        </dd>
                        <dd>
                            <strong>수량 : </strong>
                            <div class="quantity">
                                <span class="bt_up"><img src="../assets/img/minus.png" alt="빼기 버튼"></span>
                                <input type="text" name="num" value="1" id="" class="num" title="상품수량" readonly/>
                                <span class="bt_down"><img src="../assets/img/plus.png" alt="더하기 버튼"></span>
                            </div> 
                        </dd>
                    </dl>
                    <div class="detail_info_bottom">
                        <div class="total_price"><strong>총 판매금액 : <span class="price_num">9,900원</span></strong></div>
                        <ul class="market_detail_btn">
                            <li>
                                <router-link to="" class="buy">바로 구매</router-link>
                            </li>
                            <li>
                                <router-link to="">장바구니</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 상세정보 상단-->
            <div class="market_detail_bottom">
                <ul class="market_detail_tab">
                    <li>
                        <router-link to="" class="on">제품정보</router-link>
                    </li>
                    <li>
                        <router-link to="">제품정보고시</router-link>
                    </li>
                    <li>
                        <router-link to="">주의사항</router-link>
                    </li>
                </ul>
                <div class="detail_tab_content on">
                    <h4 class="blind">제품정보</h4>
                    <div class="detail_information">
    
                    </div>
                </div>
                <div class="detail_tab_content">
                        <h4 class="blind">제품정보고시</h4>
                </div>
                <div class="detail_tab_content">
                    <h4 class="blind">배송안내</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.keyimg {
    height: 284px;
    background: url("../assets/img/market1.jpg") no-repeat center;
}

.market_detail_wrap {
    margin-top: 102px;
    margin-bottom: 122px;
}

.market_detail_top {
    overflow: hidden;
    .market_detail_img {
        float: left;
        width: 521px;
        height: 523px;
        overflow: hidden;
        background: green;
    }
    .detail_info {
        float: left;
        margin-left: 64px;    
    }
    .info_caption{
        color: #85AF4B;
        font-size:13px;
        text-decoration: underline;
     }
    .total_price{
        margin-top: 24px;
        font-size: 20px;
        strong{
            font-weight: 500;
        }
        span{
            font-size:22px;
        }
    }
    .item{
        border-bottom: 1px solid #E5E5E5;
        padding-bottom: 26px;
        dd{
            margin-top:23px;
            font-size: 20px;
            strong{
                font-weight: 300;
                margin-right: 5px;
            }
        }
        .title{
            font-size:26px;
            margin-bottom: 35px;
            strong{
                font-weight: 500;
            }
        }
        .expiration_date{
            margin-top:12px;
        }
        .shipping_guide{
            margin-top: 15px;
        }
        .weight_text{
            font-size:15px;
        }
        .weight_text_v1{
            display: inline-block;
            vertical-align: top;
            margin-top: 5px;
        }
        .free_delivery{
            font-size:17px;
        }
    }
}
.price_num{
            color: #85AF4B;
            font-weight: 400;
        }
.quantity{
    display: inline-block;
    .num{
        width: 26px;
        height: 24px;
        padding: 0;
        font-size: 14px;
        border: 1px solid #BDBDBD;
        text-align: center;
    }
    .bt_up, .bt_down{
        text-align: center;
        padding-top: 7px;
        display: inline-block;
        width: 26px;
        height: 17px;
        font-size: 20px;
        border: 1px solid #BDBDBD;
        vertical-align: middle;
    }
    .bt_up{
        border-right: 0;
    }
    .bt_down{
        border-left: 0;
    }
}
.market_detail_bottom {
    margin-top: 140px;
}
.market_detail_btn{
    margin-top: 35px;
    li{
        display: inline-block;
        margin-right: 15px;
        &:last-child{
            margin-right: 0;
        }
        a{
            display: inline-block;
            border: 1px solid #009D54;
            color: #009D54;
            padding: 10px 85px;
            font-size:16px;
            border-radius: 30px;
            &.buy{
                background: #85AF4B;
                color: #fff;
                border: 1px solid #85AF4B;
            }
        }
    }
}
.market_detail_tab {
    li {
        display: inline-block;
        width: 33%;
        text-align: center;
        a {
            display: block;
            padding: 15px 0;
            color: #7B7B7B;
            background: #FCFCFC;
            border-bottom: 1px solid #85AF4B;
            &.on {
                background: #fff;
                border: 1px solid #85AF4B;
                border-top: 2px solid #85AF4B;
                border-bottom: 0;
            }
        }
    }
}
.detail_tab_content{
    display: none;
    &.on{
        display: block;
    }
    .detail_information {
        margin-top: 100px;
        height: 800px;
        background: greenyellow;
    }
}
</style>

<script>
export default {
    name: "MarketDetail",
    mounted() {
        $(document).ready(function() {
            $(".market_detail_tab>li>a").on("click", function() {
                var idx = $(this).parent().index();
                $(this).parents("ul").find("a").removeClass("on");
                $(this).addClass("on");
                $(".detail_tab_content").removeClass("on");
                $(".detail_tab_content").eq(idx).addClass("on");
            });
        });
        $(function(){ 
        $('.bt_up').click(function(){ 
            var n = $('.bt_up').index(this);
            var num = $(".num:eq("+n+")").val();
            num = $(".num:eq("+n+")").val(num*1+1); 
        });
        $('.bt_down').click(function(){ 
            var n = $('.bt_down').index(this);
            var num = $(".num:eq("+n+")").val();
            num = $(".num:eq("+n+")").val(num*1-1); 
        });
        }) 
    }
}
</script>