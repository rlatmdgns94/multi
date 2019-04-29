<template>
    <div class="cart_wrap">
        <div class="cart_keyimg"></div>
        <div class="content">
            <form action="" class="cart_box">
                <table class="cart">
                    <thead>
                        <tr>
                            <th scope="col" class="check"><input type="checkbox"></th>
                            <th scope="col" class="product_name">상품명 / 옵션</th>
                            <th scope="col" class="product">수량</th>
                            <th scope="col" class="product">상품금액</th>
                            <th scope="col" class="">배송비</th>
                            <th scope="col" class="quantity">합계</th>
                            <th scope="col" class="charge">선택</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="check"><input type="checkbox"></td>
                            <td>
                                <div class="cart_product">
                                    <div class="cart_product_img">
                                       <router-link to="/"><img src="../assets/img/cart1.png" alt=""></router-link>
                                    </div>
                                    <div class="cart_product_text">
                                        <p class="cart_product_name">맞춤당 정기 식단 프로그램</p>
                                        <p class="cart_product_option">[옵션 : 하루 2끼, 주 3일, 1주 메인+반찬]</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <input type="text" name="num" value="1" id="" class="num" readonly/>
                                    <div class="bt_box">
                                        <div class="bt_up"><img src="../assets/img/btn_up.jpg" alt=""></div>
                                        <div class="bt_down"><img src="../assets/img/btn_down.jpg" alt=""></div>
                                    </div>
                                </div> 
                            </td>
                            <td>120,000 원</td>
                            <td>무료</td>
                            <td>120,000 원</td>
                            <td>
                                <ul class="cart_menu">
                                    <li>
                                        <router-link to="#" class="cart_order_btn">주문하기</router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">삭제</router-link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="7">
                                <span class="total">총 주문금액 : <strong>170,000 원</strong></span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <ul class="cart_text">
                    <li>식과당은 전체 상품 무료배송입니다.</li>
                    <li>[쇼핑 계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.</li>
                    <li>배송에 관한 문의사항은 고객센터로 문의바랍니다.</li>
                </ul>
                <div class="cart_bottom_area">
                    <span class="product_clear">
                        <router-link to="#">전체삭제</router-link>
                    </span>
                    <ul class="cart_menu cart_all_menu">
                        <li>
                            <router-link to="#" class="">쇼핑 계속하기</router-link>
                        </li>
                        <li>
                            <router-link to="#">선택상품 주문</router-link>
                        </li>
                        <li>
                            <router-link to="#" class="cart_order_btn">전체상품 주문</router-link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cart_keyimg {
    height: 284px;
    background: url("../assets/img/cart_bg.jpg") no-repeat center;
}

.cart_explanation_box {
    overflow: hidden;
}

.cart_explanation {
    margin-top: 60px;
    margin-bottom: 36px;
    overflow: hidden;
    float: right;
    li {
        float: left;
        font-size: 18px;
        &::after {
            display: inline-block;
            content: ">";
            margin-left: 34px;
            margin-right: 34px;
        }
        &:last-child::after {
            content: ">";
            margin-right: -34px;
        }
    }
}
.cart_box{
    margin-top: 87px;
    margin-bottom: 113px;
}
.cart {
    width: 100%;
    border-top: 2px solid #85AF4B;
    thead,
    tfoot {
        background: #F9F9F9;
    }
    thead {
        th {
            padding: 16px 0;
            font-weight: 500;
        }
    }
    tbody {
        text-align: center;
        tr {
            height: 117px;
            border-bottom: 1px solid #F0F0F0;
            &:last-child {
                border: 0;
            }
        }
    }
    tfoot {
        text-align: right;
        td {
            padding: 25px 0;
        }
        .total {
            margin-right: 30px;
            font-size: 18px;
        }
    }
    .check {
        width: 82px;
        text-align: center
    }
    .product_name {
        width: 600px;
    }
}

.cart_product {
    overflow: hidden;
    text-align: left;
    .cart_product_img {
        float: left;
        width: 58px;
        overflow: hidden;
        margin-right: 20px;
    }
    .cart_product_text {
        float: left;
        .cart_product_name {
            font-size: 17px;
            font-weight: 600;
        }
        .cart_product_option {
            font-size: 14px;
            color: #777;
        }
    }
}
.cart_menu{
    margin: 8px 0;
    >li{
        margin-top: 5px;
        &:first-child{margin-top: 0;}
        a{
            display: inline-block;
            width: 93px;
            padding:7px 0px;
            border: 1px solid #9A9A9A;
            color: #000;
            font-size:10px;
        }
    }
}
.cart_all_menu{
    float:right;
    margin: 0px;
    li{
        float: left;
        margin-top: 0;
        margin-left:14px;
        &:first-child{margin-left: 0;}
        a{
            display: inline-block;
            padding: 7px 37px;
            border: 1px solid #5B5B5B;
            color: #000;
            font-size:15px;
            text-align: center;
        }
    }
}
.cart_bottom_area{
    overflow: hidden;
    margin-top: 50px;
}
.product_clear {
    float:left;
    a{
        display: inline-block;
        padding: 7px 37px;
        border: 1px solid #85AF4B;
        color: #000;
        font-size:15px;
        text-align: center;
    }
    
}
.cart_order_btn{
    border: 1px solid #85AF4B !important;
    background: #85AF4B;
    color: #fff !important;
}
.cart_text{
    margin-top:26px;
    li{
        color: #000;
        font-size: 12px;
        &::before{
            content:"※";
        }
    }
}
// 수량 카운트
.num{
    display: inline-block;
    width: 16px;
    height: 20px;;
    border: 1px solid #acacac;
    text-align: center;
}
.bt_box{
    display: inline-block;
    text-align: center;
    font-size:1px;
    color:#787878;
    vertical-align: middle;
    img{display: block;}
}
</style>

<script>
export default {
    name: "Cart",
};
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
</script>