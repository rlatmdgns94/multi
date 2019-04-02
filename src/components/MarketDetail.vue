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
                        <dd>
                            <strong>유통기한 : </strong>
                            <span class="weight_text weight_text_v1">
                                셀프부대찌개재료 : 제조일로부터 냉장 4일, 사골육수 : 제조일로부터 냉동 180일<br>신라면 : 제조일로부터 6개월, 체다슬라이스치즈 : 제조일로부터 6개월</span>
                        </dd>
                        <dd>
                            <strong>배송안내 : </strong>
                            <span class="free_delivery">무료배송</span>
                        </dd>
                        <dd><strong>수량 : </strong></dd>
                    </dl>
                    <div class="detail_info_bottom">
                        <div class="total_price"><strong>총 판매금액 : <span class="info_caption">9,900원</span></strong></div>
                        <ul class="market_detail_btn">
                            <li>
                                <router-link to="">바로구매</router-link>
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
                        <router-link to="">배송안내</router-link>
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
        font-size: 20px;
        strong{
            font-weight: 500;
        }
        span{
            font-size:20px;
        }
    }
    .item{
        dd{
            font-size: 20px;
            strong{
                font-weight: 300;
            }
        }
        .title{
            font-size:26px;
            strong{
                font-weight: 500;
            }
        }
        .price_num{
            color: #85AF4B;
            font-weight: 400;
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

.market_detail_bottom {
    margin-top: 140px;
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
    }
}
</script>