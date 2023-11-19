<script>
import { store } from "./store";
import pageHeader from "./components/pageHeader.vue";
import pageHero from "./components/pageHero.vue";
import devCourses from "./components/popularCoursesSection.vue";
import recCourses from "./components/RecentCourses.vue";
import popCourses from "./components/popCourses.vue";

export default {
  data() {
    return {
      store: store,
    };
  },
  components: {
    pageHeader,
    pageHero,
    devCourses,
    recCourses,
    popCourses,
  },
};
</script>

<template>
  <pageHeader />
  <pageHero />
  <devCourses />
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
  <recCourses />
  <section class="subscribe-section">
    <div class="container-s">
      <div class="row">
        <div class="sub-left">
          <h4>Subscribe our newsletter</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <br />
            alteration in some form, by injected humour, or randomised words
          </p>
        </div>
        <div class="sub-right">
          <h4>your e-mail address</h4>
          <div>
            <input type="text" placeholder="Enter your E-mail" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <popCourses />
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

.subscribe-section {
  background-color: $red;
  padding-top: 40px;
  padding-bottom: 60px;

  .row {
    justify-content: center;
    gap: 30px;

    .sub-left {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: white;

      h4 {
        font-size: 24px;
      }
    }

    .sub-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

      h4 {
        text-transform: uppercase;
        color: white;
      }

      input {
        border: transparent;
        height: 50px;
        width: 330px;
        padding-left: 15px;
        font-size: 14px;

        &:focus {
          outline: none;
        }
      }

      button {
        border: transparent;
        height: 50px;
        width: 120px;
        background-color: $light-blu;
        color: white;
        text-transform: uppercase;
      }
    }
  }
}
</style>
