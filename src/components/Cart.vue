<template>
    <div class="cart_wrap">
        <div class="cart_keyimg"></div>
        <div class="content">
            <form action="">
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
                                    <img src="../assets/img/cart1.png" alt="">
                                </div>
                                <div class="cart_product_text">
                                    <p class="cart_product_name">맞춤당 정기 식단 프로그램</p>
                                    <p class="cart_product_option">[옵션 : 하루 2끼, 주 3일, 1주 메인+반찬]</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="text" name="count" value="1">
                            <div>
                                <router-link to="#" onclick="change(1);">ㅁ</router-link>
                                <router-link to="#" onclick="change(-1);">ㅁ</router-link>
                            </div>
                        </td>
                        <td>120,000 원</td>
                        <td>무료</td>
                        <td>120,000 원</td>
                        <td>
                            <ul>
                                <li>
                                    <router-link to="/">주문하기</router-link>
                                </li>
                                <li>
                                    <router-link to="/">관심상품</router-link>
                                </li>
                                <li>
                                    <router-link to="/">삭제</router-link>
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

.cart {
    width: 100%;
    margin-top: 87px;
    border-top: 2px solid #85AF4B;
    thead,
    tfoot {
        background: #F9F9F9;
    }
    thead {
        th {
            padding: 16px 0;
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
        height: 56px;
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
</style>

<script>
export default {
    name: "Cart",
};
function change(num){
    var x = documet.form;
    var y = Number(count.value)+num;
    if(y<1) y=1;
    x.count.value=y;
}
</script>