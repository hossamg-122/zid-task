<template>
  <h1>Payment</h1>
</template>
<script lang="ts">
import Vue from "vue";
import * as metaData from "@/plugins/metaData";

export default Vue.extend({
  name: "Payment",
  metaInfo: {
    title: metaData.payment.title,
    meta: [
      {
        name: "description",
        content: metaData.payment.description,
      },
    ],
  },
});
</script>
