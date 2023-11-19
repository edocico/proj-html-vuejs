<script>
import { store } from "../store";
import Card from "./courseCard.vue";

export default {
  data() {
    return {
      store: store,
    };
  },
  components: {
    Card,
  },
};
</script>

<template>
  <section class="popular-section">
    <div class="title">
      <h1>Popular Courses</h1>
      <h4>Discover our most popular courses for self laerning</h4>
    </div>
    <div class="container-m">
      <div class="row">
        <Card
          v-for="(course, index) in store.popCourses"
          :key="index"
          :item="course"
          class="card-box"
        />
      </div>
    </div>
    <div class="buttons">
      <button class="left">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </button>
      <button class="right">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/colors.scss" as *;

.popular-section {
  padding-top: 110px;
  padding-bottom: 75px;
  background-color: #f0f4fa;

  .card-box {
    flex-basis: calc(100% / 6);
  }

  .title {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    h1 {
      font-size: 42px;
    }

    h4 {
      color: $darkgrey;
      font-size: 18px;
    }
  }

  .buttons {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 45px;
      aspect-ratio: 1;
    }
    .left {
      border: 1px solid $darkgrey;
      background-color: white;

      &:hover {
        background-color: $light-blu;
        color: white;
      }
    }

    .right {
      background-color: white;
      border: 1px solid $darkgrey;

      &:hover {
        background-color: $light-blu;
        color: white;
      }
    }
  }
}
</style>
