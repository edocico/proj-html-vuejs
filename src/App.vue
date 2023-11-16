<script>
import { store } from "./store";
import pageHeader from "./components/pageHeader.vue";

export default {
  data() {
    return {
      store: store,
    };
  },
  components: {
    pageHeader,
  },
};
</script>

<template>
  <pageHeader />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
