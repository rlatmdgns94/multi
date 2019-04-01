<template>
    <div class="market">
        <div class="keyimg"></div>
        <div class="content">
            <div class="market_top">
                <div class="market_menu_area">
                    <h3 class="blind">마켓메뉴</h3>
                    <ul  class="market_menu">   
                        <li>   
                            <router-link to="/cart" class="on">전체</router-link>
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
                <div>
                    <input type="text" placeholder="찾으시는 상품이 있으신가요?">
                    <button></button>
                </div>
            </div>
            <router-view/>
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