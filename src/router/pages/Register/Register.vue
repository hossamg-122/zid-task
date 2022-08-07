<template>
  <h1>Register</h1>
</template>
<script lang="ts">
import Vue from "vue";
import * as metaData from "@/plugins/metaData";

export default Vue.extend({
  name: "Register",
  metaInfo: {
    title: metaData.register.title,
    meta: [
      {
        name: "description",
        content: metaData.register.description,
      },
    ],
  },
});
</script>
