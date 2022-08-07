<template>
  <h1>Profile</h1>
</template>
<script lang="ts">
import Vue from "vue";
import * as metaData from "@/plugins/metaData";

export default Vue.extend({
  name: "Profile",
  metaInfo: {
    title: metaData.profile.title,
    meta: [
      {
        name: "description",
        content: metaData.profile.description,
      },
    ],
  },
});
</script>
