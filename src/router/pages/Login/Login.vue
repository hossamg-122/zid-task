<template>
  <h1>Login</h1>
</template>
<script lang="ts">
import Vue from "vue";
import * as metaData from "@/plugins/metaData";
export default Vue.extend({
  name: "Login",
  metaInfo: {
    title: metaData.login.title,
    meta: [
      {
        name: "description",
        content: metaData.login.description,
      },
    ],
  },
});
</script>
