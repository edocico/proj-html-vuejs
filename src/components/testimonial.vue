<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="testimonial-section">
    <div class="citation">
      <h1>Investing for Your Future</h1>
      <p>
        It is no exaggeration to say this MasterStudy experience was
        transformative-both professionaly and personally. This workshop will
        long remain a high point of my life. Thanks again.... I am feeling
        energized and eager to start teaching my class next week. I can't wait
        to use all of my teaching tools. I will absolutely recommend this
        workshop to other educators
      </p>
      <h4>Linda Green</h4>
      <p>Product Manager, Apple Inc</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/colors.scss" as *;
.testimonial-section {
  padding-top: 70px;
  padding-bottom: 70px;
  background-image: url(/testimonial-1-1917x640-1-1914x639.jpg);
  padding-left: 370px;

  .citation {
    max-width: 735px;
    background-color: white;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 80px;
    padding-right: 85px;

    h1 {
      font-size: 40px;
      margin-bottom: 40px;
      color: $deep-blu;
    }

    h4 {
      font-size: 24px;
      margin-top: 45px;
      color: $deep-blu;
    }

    p {
      line-height: 1.5em;
      color: $darkgrey;
    }
  }
}
</style>
