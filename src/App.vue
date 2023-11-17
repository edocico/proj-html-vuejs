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
  <section class="bg-section">
    <h1>
      Limitless learning,<br />
      more possibilities
    </h1>
    <p>
      Online courses open the opportunity for learning to almost anyone,<br />
      regardless of their scheduling commitments.
    </p>
    <button>Read More</button>
  </section>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/colors.scss" as *;

.bg-section {
  background-image: url("/bg.png");
  padding-top: 150px;
  padding-bottom: 110px;
  padding-left: 380px;
  min-height: 535px;

  h1 {
    margin-bottom: 40px;
    font-size: 46px;
  }

  p {
    margin-bottom: 55px;
    font-size: 20px;
  }

  button {
    line-height: 2.5em;
    padding: 5px 20px;
    background-color: $red;
    border: transparent;
    border-radius: 20px;
    text-transform: uppercase;
    color: white;
  }
}
</style>
