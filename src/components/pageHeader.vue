<script>
import { store } from "../store";

export default {
  data() {
    return {
      store: store,
    };
  },
};
</script>
<template>
  <header>
    <!--header top-->
    <div class="header-top">
      <div class="container-m">
        <div class="row">
          <div class="top-1">
            <span>English</span>
            <span>
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </span>
          </div>
          <div class="top-2">
            <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>Course Formats</li>
              <li>Courses</li>
              <li>Demos</li>
            </ul>
          </div>
          <div class="top-3">
            <ul>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-facebook"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-twitter"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-instagram"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-linkedin"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-google-plus"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><font-awesome-icon icon="fa-brands fa-youtube"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--header-mid-->
    <div class="header-mid">
      <div class="container-m">
        <div class="row">
          <div class="mid-1">
            <img src="/MasterStudy.svg" alt="logo" />
          </div>
          <div class="mid-2">
            <div>
              <span class="icon"
                ><font-awesome-icon icon="fa-solid fa-bars" /></span
              ><span class="cat">CATEGORY</span>
            </div>
            <input type="text" placeholder="Search courses" />
            <button>
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
          <div class="mid-3">
            <div>
              <span><font-awesome-icon icon="fa-solid fa-bullhorn" /></span
              ><a href="#">Become an instructor</a>
            </div>
            <div>
              <span><font-awesome-icon icon="fa-solid fa-briefcase" /></span
              ><a href="#">For Enterprise</a>
            </div>
          </div>
          <div class="mid-4">
            <div>
              <span><font-awesome-icon icon="fa-regular fa-user" /></span
              ><a href="#">Log in</a>
            </div>
            <button>Sign up</button>
            <span class="bookmark"
              ><font-awesome-icon icon="fa-regular fa-bookmark"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <!--header-bottom-->
    <div class="header-bottom">
      <div class="container">
        <div class="row">
          <ul>
            <li
              v-for="(directory, index) in store.headerDirectories"
              :key="index"
            >
              <span><font-awesome-icon :icon="`${directory.icon}`" /></span
              ><a href="#">{{ directory.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../styles/colors.scss" as *;

.header-top {
  border-bottom: 1px solid #aaaaaa;

  .row {
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    .top-1 {
      display: flex;
      flex-grow: 1;
      gap: 8px;
      color: #aaaaaa;
      font-size: 12px;
    }

    .top-2 ul {
      display: flex;
      padding: 20px 0px;
      gap: 24px;
      color: #aaaaaa;
      font-size: 12px;
    }

    .top-3 ul {
      display: flex;
      padding: 20px 0px;
      gap: 12px;
      color: #aaaaaa;
    }
  }
}

.header-mid {
  border-bottom: 1px solid black;

  padding: 24px 0px;

  .row {
    display: flex;
    gap: 70px;
    justify-content: space-between;
  }

  .mid-2 {
    display: flex;
    align-items: center;
    color: #aaaaaa;
    font-size: 14px;

    .cat {
      font-weight: 900;
    }

    div {
      margin-right: 10px;
    }

    .icon {
      margin-right: 3px;
    }

    input {
      padding-left: 8px;
      background-color: #eff2f5;
      border: transparent;
      height: 40px;
      width: 400px;

      &:focus {
        outline: none;
      }
    }

    button {
      border: transparent;
      background-color: $light-blu;
      height: 40px;
      width: 50px;
      color: white;
      font-size: 18px;
    }
  }

  .mid-3 {
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 14px;

    div {
      display: flex;
      align-items: center;
      color: #aaaaaa;
    }

    span {
      margin-right: 5px;
    }
  }

  .mid-4 {
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 14px;

    button {
      background-color: $red;
      border: transparent;
      line-height: 2em;
      border-radius: 20px;
      padding: 10px 20px;
      color: white;
      font-weight: 900;
      text-transform: uppercase;

      &:hover {
        background-color: $green;
      }
    }

    span {
      color: #aaaaaa;
      margin-right: 5px;
    }

    a {
      color: #aaaaaa;
    }

    .bookmark {
      font-size: 18px;
    }
  }

  .mid-1 {
    display: flex;
    align-items: center;
  }
}

.header-bottom {
  border: 1px solid black;
  min-height: 20px;
  background-color: $deep-blu;
  padding: 28px 0px;

  .row {
    justify-content: space-around;
    align-items: center;

    ul {
      display: flex;
      gap: 40px;
      align-items: center;
    }

    li {
      color: white;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid white;
      }

      span {
        margin-right: 5px;
      }
    }
  }
}
</style>
