<script>
import { store } from "./store";
import pageHeader from "./components/pageHeader.vue";
import pageHero from "./components/pageHero.vue";
import popCourses from "./components/popularCoursesSection.vue";

export default {
  data() {
    return {
      store: store,
    };
  },
  components: {
    pageHeader,
    pageHero,
    popCourses,
  },
};
</script>

<template>
  <pageHeader />
  <pageHero />
  <popCourses />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/colors.scss" as *;
</style>
