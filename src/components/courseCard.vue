<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="box">
    <div class="card">
      <figure class="card-img">
        <img :src="`${item.image}`" alt="course image" />
      </figure>
      <div class="card-bottom">
        <div class="bottom-top">
          <p class="theme">
            <a href="#">{{ item.theme }}</a>
          </p>
          <p class="description">{{ item.description }}</p>
        </div>
        <div class="bottom-down">
          <span class="star">
            <font-awesome-icon
              v-for="n in item.rating"
              :key="n"
              :icon="['fas', 'star']"
              class="star-icon"
            />
          </span>
          <div class="price">
            <span class="price1"> {{ item.price }}</span>
            <span class="price2"> {{ item.discountedPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/colors.scss" as *;
.box {
  padding: 0px 9px;

  .card {
    border: 1px solid $grey;

    .bottom-top {
      border-bottom: 1px solid $grey;
      padding-bottom: 20px;

      .theme {
        margin-bottom: 20px;
      }
    }
  }
}

.card-bottom {
  padding: 20px 18px;

  .theme {
    font-size: 12px;
    color: $darkgrey;
  }

  .bottom-down {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    align-items: center;

    .star-icon {
      color: $darkyellow;
      font-size: 14px;
    }

    .price {
      display: flex;
      flex-direction: column;

      .price2 {
        align-self: flex-end;
      }

      .price1 {
        color: $darkgrey;
        text-decoration: line-through;
      }
    }
  }
}
</style>
