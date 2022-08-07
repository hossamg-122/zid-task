<template>
  <h1>Home</h1>
</template>
<script lang="ts">
import Vue from "vue";
import * as metaData from "@/plugins/metaData";
export default Vue.extend({
  name: "Home",
  metaInfo: {
    title: metaData.home.title,
    meta: [
      {
        name: "description",
        content: metaData.home.description,
      },
    ],
  },
});
</script>
