<template>
  <div class="container mx-auto max-w-7xl px-5">
    <NavBar />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as metaData from "@/plugins/metaData";
import NavBar from "../../../components/nav-bar.vue";
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
  components: { NavBar },
});
</script>
