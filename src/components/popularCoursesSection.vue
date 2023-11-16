<script>
import card from "./courseCard.vue";

export default {
  data() {
    return {};
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
        <card />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.courses-section {
  padding: 80px 0px;
}
</style>
