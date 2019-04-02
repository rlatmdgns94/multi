<template>
    <div class="market">
        <div class="keyimg"></div>
        <div class="content">
            <div class="market_top">
                <div class="market_menu_area">
                    <h3 class="blind">마켓메뉴</h3>
                    <ul  class="market_menu">   
                        <li>   
                            <router-link to="#" class="on">전체</router-link>
                        </li>
                        <li>   
                            <router-link to="#">체험식</router-link>
                        </li>
                        <li>   
                            <router-link to="#">반찬</router-link>
                        </li>
                        <li>   
                            <router-link to="#">간식</router-link>
                        </li>
                    </ul>
                </div>
                <div class="market_seach">
                    <input type="text" placeholder="찾으시는 상품이 있으신가요?">
                </div>
            </div>
            <div class="market_bottom">
               <div class="product_category_area">
                    <ul class="product_category">
                        <li>
                            <router-link to="/" class="active">인기순</router-link>
                        </li>
                        <li>
                            <router-link to="/">높은가격순</router-link>
                        </li>
                        <li>
                            <router-link to="/">낮은가격순</router-link>
                        </li>
                        <li>
                            <router-link to="/">등록일순</router-link>
                        </li>
                    </ul>
               </div>
                <ul class="market_product">
                    <li>
                        <router-link to="/marketdetail">
                            <div class="market_product_img">
                                
                            </div>
                            <dl class="market_text">
                                <dt><strong>[체험식] 당뇨 체험식 1주일</strong></dt>
                                <dd>#체험식 #당뇨 #일주일</dd>
                                <dd class="market_price"><strong>9,900원</strong></dd>
                            </dl>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <div class="market_product_img">
                                
                            </div>
                            <dl class="market_text">
                                <dt><strong>[체험식] 당뇨 체험식 1주일</strong></dt>
                                <dd>#체험식 #당뇨 #일주일</dd>
                                <dd class="market_price"><strong>9,900원</strong></dd>
                            </dl>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <div class="market_product_img">
                                
                            </div>
                            <dl class="market_text">
                                <dt><strong>[체험식] 당뇨 체험식 1주일</strong></dt>
                                <dd>#체험식 #당뇨 #일주일</dd>
                                <dd class="market_price"><strong>9,900원</strong></dd>
                            </dl>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <div class="market_product_img">
                                
                            </div>
                            <dl class="market_text">
                                <dt><strong>[체험식] 당뇨 체험식 1주일</strong></dt>
                                <dd>#체험식 #당뇨 #일주일</dd>
                                <dd class="market_price"><strong>9,900원</strong></dd>
                            </dl>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <div class="market_product_img">
                                
                            </div>
                            <dl class="market_text">
                                <dt><strong>[체험식] 당뇨 체험식 1주일</strong></dt>
                                <dd>#체험식 #당뇨 #일주일</dd>
                                <dd class="market_price"><strong>9,900원</strong></dd>
                            </dl>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <div class="market_product_img">
                                
                            </div>
                            <dl class="market_text">
                                <dt><strong>[체험식] 당뇨 체험식 1주일</strong></dt>
                                <dd>#체험식 #당뇨 #일주일</dd>
                                <dd class="market_price"><strong>9,900원</strong></dd>
                            </dl>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.keyimg {
    height: 284px;
    background: url("../assets/img/market1.jpg") no-repeat center;
}
.market_top{
    position: relative;
    text-align: center;
    margin-top: 66px;
    .market_menu{
        li{
            display: inline-block;
            margin-left: 12px;
            &:first-child{
                margin: 0;
            }
            a{
                display: block;
                width: 95px;
                padding: 8px 0;
                color: #7E7E7E;
                font-size:14px;
                border: 1px solid #C5C5C5;
                &.on{
                    background: #86B14B;
                    color:#fff;
                    border: 1px solid #86B14B;
                }
            }
        }
    }
}
.market_seach{
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    border-bottom: 1px solid #85AF4B;
    input{
        border: 0;
        padding: 0;
        background: url("../assets/img/search.png") no-repeat left center;
        padding-left: 26px;
    }
}
.market_bottom{
    overflow: hidden;
    margin-top: 42px;
    margin-bottom: 90px;
    .product_category_area{
        overflow: hidden;
    }
    .product_category{
        float: right;
        margin-right: 5px;
        margin-bottom: 10px;    
        li{
            float: left;
            margin-left: 18px;
            &:first-child{
                margin-left: 0;
            }
            a{
                display: block;
                color: #000;
                font-size: 12px;
                &.active{
                    padding-left: 18px;
                    background: url("../assets/img/tick.png") no-repeat left;
                }
            }
        }
    }
    .market_product{
        overflow: hidden;
        li{
            display: inline-block;
            width: 32.5%;
            margin: 0 5px;
            padding-bottom: 50px;
            a{
                .market_product_img{
                    height:391px;
                    background: red;
                }
            }
        }
    }
    .market_text{
        padding-left: 19px;
        padding-top: 24px;
        dt{
            font-size:18px;
            color: #000;
        }
        dd{
            font-size:14px;
            color: #656565;
        }
        .market_price{
            margin-top: 16px;
            font-size: 20px;
            color: #85AF4B;
        }
    }
}
</style>

<script>
// import Header from "../components/Header.vue";
export default {
    //  components: {
    // Header
    // },
    name: "Market",
};
</script>