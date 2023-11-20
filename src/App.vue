<script>
import { store } from "./store";
import pageHeader from "./components/pageHeader.vue";
import pageHero from "./components/pageHero.vue";
import devCourses from "./components/popularCoursesSection.vue";
import recCourses from "./components/RecentCourses.vue";
import popCourses from "./components/popCourses.vue";
import testimonial from "./components/testimonial.vue";
import footerSec from "./components/footer.vue";

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
    testimonial,
    footerSec,
  },
  methods: {
    openOther() {
      this.store.showAllOpen = true;
    },
    closeOther() {
      this.store.showAllOpen = false;
    },
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
  <recCourses @open="openOther" @close="closeOther" />
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
  <section class="big-card-section">
    <div class="container-m">
      <div class="row">
        <div class="big-card-left">
          <figure>
            <img src="/image_box_1-221x231.png" alt="img" />
          </figure>
          <div>
            <h1>Become an Instructor</h1>
            <p>
              Teach what you love. Masterstudy gives you <br />the tools to
              create a course
            </p>
            <button>start teaching</button>
          </div>
        </div>
        <div class="big-card-right">
          <figure>
            <img src="/image_box_2-234x231.png" alt="" />
          </figure>
          <div>
            <h1>Access For Business</h1>
            <p>Get unlimited access to 2500 of top courses for your team.</p>
            <button>doing business</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <testimonial />
  <footerSec />
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
    color: $deep-blu;
  }

  p {
    margin-bottom: 55px;
    font-size: 18px;
    color: $deep-blu;
  }

  button {
    line-height: 2.5em;
    padding: 10px 30px;
    background-color: $red;
    border: transparent;
    border-radius: 25px;
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

.big-card-section {
  padding-top: 80px;
  padding-bottom: 80px;

  .row {
    justify-content: space-between;
    gap: 30px;
  }

  .big-card-left {
    border: 1px solid $darkgrey;
    padding-left: 40px;
    padding-top: 75px;
    padding-bottom: 75px;
    padding-right: 150px;

    display: flex;
    gap: 45px;

    img {
      width: 230px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 30px;

      justify-content: center;

      h1 {
        font-size: 40px;
        color: $deep-blu;
      }

      p {
        color: $darkgrey;
      }

      button {
        align-self: flex-start;
        line-height: 2.5em;
        padding: 10px 30px;
        background-color: $red;
        border: transparent;
        border-radius: 25px;
        text-transform: uppercase;
        color: white;
      }
    }
  }

  .big-card-right {
    border: 1px solid $darkgrey;
    padding-left: 40px;
    padding-top: 75px;
    padding-bottom: 75px;
    padding-right: 150px;

    display: flex;
    gap: 45px;

    img {
      width: 230px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 30px;

      justify-content: center;

      h1 {
        font-size: 40px;
      }

      p {
        color: $darkgrey;
      }

      button {
        align-self: flex-start;
        line-height: 2.5em;
        padding: 10px 30px;
        background-color: $red;
        border: transparent;
        border-radius: 25px;
        text-transform: uppercase;
        color: white;
      }
    }
  }
}
</style>
