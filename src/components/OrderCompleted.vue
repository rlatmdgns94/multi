<template>
    <div class="cart_wrap">
        <div class="order_keyimg"></div>
        <div class="completed_box">
            <p class="completed_text">가상계좌가 발급되었습니다.</p>
            <p class="completed_caption">2019-03-26까지 농협은행 3560000000000 으로 입금을 완료해주세요.</p>
            <span><router-link to="/">주문내역 확인하기</router-link></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order_keyimg {
    height: 284px;
    background: url("../assets/img/order_bg.jpg") no-repeat center;
}
.completed_box{
    width: 853px;
    padding-top: 83px;
    padding-bottom: 62px;
    margin: 115px auto;
    border: 1px solid #85AF4B;
    text-align: center;
    .completed_text{
        font-size:26px;
        font-weight: 500;
    }
     .completed_caption{
        font-size: 18px;
        margin-top: 20px;
    }
    a{
        display: inline-block;
        width: 270px;
        color: #fff;
        padding: 13px 0;
        margin-top: 60px;
        background: #85AF4B;
    }
}

</style>

<script>
export default {
    name: "OrderCompleted",
};
</script>