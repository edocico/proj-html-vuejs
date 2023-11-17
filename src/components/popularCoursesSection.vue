<script>
import card from "./courseCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
  components: {
    card,
  },
};
</script>

<template>
  <section class="courses-section">
    <div class="container-m">
      <h1>Popular Development Courses</h1>
      <div class="row">
        <card
          v-for="(course, index) in this.store.popularCourses"
          :key="index"
          :item="course"
          class="card-box"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.courses-section {
  padding: 80px 0px;

  h1 {
    margin-bottom: 40px;
    padding-left: 9px;
  }

  .card-box {
    flex-basis: calc(100% / 6);
  }
}
</style>
