<template>
  <div>
    <DaumPostCode :on-complete="handleAddress"/>
  </div>
</template>

<script>
import DaumPostCode from "vuejs-daum-postcode";
export default {
  name: "PostCode",
  components: {
    DaumPostCode
  },
  props: ["handleAddress"]
};
</script>
