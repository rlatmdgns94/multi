<template>
  <div class="cart_wrap">
    <div class="order_keyimg"></div>
    <div class="completed_box">
      <p class="completed_text">{{ completedText }}</p>
      <p class="completed_caption">{{completedSectionText}}</p>
      <span @click="routeToOrderList">주문내역 확인하기</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order_keyimg {
  height: 284px;
  background: url("../assets/img/order_bg.jpg") no-repeat center;
}
.completed_box {
  width: 853px;
  padding-top: 83px;
  padding-bottom: 62px;
  margin: 115px auto;
  border: 1px solid #85af4b;
  text-align: center;
  .completed_text {
    font-size: 26px;
    font-weight: 500;
  }
  .completed_caption {
    font-size: 18px;
    margin-top: 20px;
  }
  span {
    display: inline-block;
    width: 270px;
    color: #fff;
    padding: 13px 0;
    margin-top: 60px;
    background: #85af4b;
    cursor: pointer;
  }
}
</style>

<script>
export default {
  name: "OrderCompleted",
  data: function() {
    return {
      completedText: "",
      completedSectionText: "",
      orderResult: {}
    };
  },
  mounted() {
    localStorage.removeItem("basket");
    if (!localStorage.getItem("sat")) {
      this.$router.push("/login");
    }
    const result = JSON.parse(localStorage.getItem("paymentsResult"));
    this.orderResult = result;
    if (result.success === true && result.pay_method === "card") {
      this.completedText = "결제가 정상적으로 처리되었습니다.";
      this.completedSectionText =
        "주문내역을 확인하기 원하시면, 주문내역 확인하기 버튼을 눌러주세요.";
    }
    if (result.success === true && result.pay_method === "vbank") {
      this.completedText = "가상계좌가 발급되었습니다.";
      this.completedSectionText = `${result.vbank_date}까지 ${
        result.vbank_name
      } ${result.vbank_num}으로 입금을 완료해주세요.`;
    }
    if (result.success === false) {
      this.completedText = "위조 또는 변조된 결제입니다.";
      this.completedSectionText =
        "가상계좌 결제의 경우, 발급된 가상계좌는 자동으로 말소됩니다.";
    }
  },
  methods: {
    routeToOrderList() {
      localStorage.removeItem("paymentsResult");
      this.$router.push("/orderlist");
    }
  }
};
</script>