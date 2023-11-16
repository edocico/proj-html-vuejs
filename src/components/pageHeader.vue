<script>
export default {
  data() {},
};
</script>
<template>
  <header>
    <!--header top-->
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="top-1">
            <span>English</span>
            <span>i</span>
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
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--header-mid-->
    <div class="header-mid">
      <div class="container">
        <div class="row">
          <div class="mid-1">
            <img src="/MasterStudy.svg" alt="logo" />
          </div>
          <div class="mid-2">
            <div><span class="icon">i</span><span>CATEGORY</span></div>
            <input type="text" placeholder="Search courses" />
            <button>i</button>
          </div>
          <div class="mid-3">
            <div><span>i</span><a href="#">Become an instructor</a></div>
            <div><span>i</span><a href="#">For Enterprise</a></div>
          </div>
          <div class="mid-4">
            <div><span>i</span><a href="#">Log in</a></div>
            <button>Sign up</button>
            <span>icon</span>
          </div>
        </div>
      </div>
    </div>
    <!--header-bottom-->
    <div class="header-bottom">
      <div class="container">
        <div class="row">
          <ul>
            <li><span>i</span><a href="#"></a>Business</li>
            <li><span>i</span><a href="#"></a>Design</li>
            <li><span>i</span><a href="#"></a>Development</li>
            <li><span>i</span><a href="#"></a>Lifestyle</li>
            <li><span>i</span><a href="#"></a>Office Productivity</li>
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
    gap: 18px;

    .top-1 {
      display: flex;
      flex-grow: 1;
      gap: 8px;
      color: #aaaaaa;
      font-size: 10px;
    }

    .top-2 ul {
      display: flex;
      padding: 20px 0px;
      gap: 24px;
      color: #aaaaaa;
      font-size: 10px;
    }

    .top-3 ul {
      display: flex;
      padding: 20px 0px;
      gap: 12px;
    }
  }
}

.header-mid {
  border-bottom: 1px solid black;

  padding: 20px 0px;

  .row {
    display: flex;
    gap: 70px;
    justify-content: space-between;
  }

  .mid-2 {
    display: flex;
    align-items: center;
    color: #aaaaaa;

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
      width: 300px;
    }

    button {
      border: transparent;
      background-color: $light-blu;
      height: 40px;
      width: 50px;
    }
  }

  .mid-3 {
    display: flex;
    align-items: center;
    gap: 25px;

    div {
      display: flex;
      align-items: center;
    }
  }

  .mid-4 {
    display: flex;
    align-items: center;
    gap: 25px;

    button {
      background-color: $red;
      border: transparent;
      line-height: 2em;
      border-radius: 20px;
      padding: 10px 20px;
      color: white;
      font-weight: 900;
      text-transform: uppercase;
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

      span {
        margin-right: 5px;
      }
    }
  }
}
</style>
