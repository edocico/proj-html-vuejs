<script>
export default {
  data() {},
};
</script>

<template>
  <section class="hero">
    <div class="bg-color">
      <h1>Udemy Affiliate Sales</h1>
      <p>Monetize your audiance and attarct new customers with Udemy!</p>
    </div>
    <div class="bg-image">
      <img src="../assets/slide-1.jpg" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/colors.scss" as *;
.hero {
  display: flex;
  padding-top: 30px;

  .bg-color {
    background-color: $red;
    display: flex;
    flex-basis: calc(100% / 2);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    h1 {
      color: white;
      font-size: 48px;
    }

    p {
      color: white;
      font-size: 22px;
    }
  }
}
</style>
