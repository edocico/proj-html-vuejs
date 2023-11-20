<script>
import { store } from "../store";
import Card from "./courseCard.vue";

export default {
  emits: ["open", "close"],
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
  <section class="recent-courses">
    <div class="top">
      <h1>Recent courses</h1>
      <ul>
        <li v-for="(directory, index) in store.coursesDirectories" :key="index">
          <a href="#"> {{ directory }}</a>
        </li>
      </ul>
    </div>
    <div class="container-m">
      <div class="row">
        <Card
          v-for="(course, index) in store.recentCourses"
          :key="index"
          :item="course"
          class="card-box"
        />
      </div>
    </div>
    <div class="btn">
      <button
        @click="$emit('open')"
        class="button"
        v-if="store.showAllOpen === false"
      >
        Show all
      </button>
    </div>
    <div class="container-m" v-if="store.showAllOpen === true">
      <div class="row">
        <Card
          v-for="(course, index) in store.recentCourses"
          :key="index"
          :item="course"
          class="card-box"
        />
      </div>
    </div>
    <div class="btn">
      <button
        @click="$emit('close')"
        class="button"
        v-if="store.showAllOpen === true"
      >
        Close
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/colors.scss" as *;
.recent-courses {
  padding-top: 115px;
  padding-bottom: 115px;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 65px;

  h1 {
    font-size: 42px;
    color: $deep-blu;
  }

  ul {
    display: flex;
    gap: 40px;

    li {
      color: $darkgrey;
      line-height: 1.5em;
      padding: 5px 15px;
      border-radius: 20px;

      &:hover {
        background-color: $grey;
      }
    }
  }
}
.row {
  flex-wrap: wrap;
  row-gap: 50px;

  .card-box {
    flex-basis: calc(100% / 6);
  }
}

.container-m {
  margin-bottom: 80px;
}

.btn {
  display: flex;
  justify-content: center;
}

.button {
  line-height: 2.5em;
  padding: 10px 30px;
  background-color: $red;
  border: transparent;
  border-radius: 25px;
  text-transform: uppercase;
  color: white;

  &:hover {
    background-color: $green;
  }
}
</style>
