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
  <footer class="footer">
    <div class="footer-top">
      <div class="container-s">
        <div class="row">
          <div class="about">
            <h4>about</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              accusantium dicta consequatur ea vero voluptatibus dignissimos
              harum illum libero ducimus dolores tempora dolore, quis alias
            </p>
          </div>
          <div class="contact">
            <h4>contact</h4>
            <p>USA, California 20, First Avenue, California</p>
            <p>Tel: +1 212 458 300 32</p>
            <p>Fax: +1 212 375 24 14</p>
            <a href="#" class="e-mail">info@masterstudy.com</a>
          </div>
          <div class="social">
            <h4>social network</h4>
            <ul>
              <li>
                <a href="#" class="facebook"
                  ><font-awesome-icon icon="fa-brands fa-facebook"
                /></a>
              </li>
              <li>
                <a href="#" class="instagram"
                  ><font-awesome-icon icon="fa-brands fa-instagram"
                /></a>
              </li>
              <li>
                <a href="#" class="linkedin"
                  ><font-awesome-icon icon="fa-brands fa-linkedin"
                /></a>
              </li>
              <li>
                <a href="#" class="pinterest"
                  ><font-awesome-icon icon="fa-brands fa-pinterest"
                /></a>
              </li>
              <li>
                <a href="#" class="twitter"
                  ><font-awesome-icon icon="fa-brands fa-twitter"
                /></a>
              </li>
              <li>
                <a href="#" class="globe"
                  ><font-awesome-icon icon="fa-solid fa-globe"
                /></a>
              </li>
              <li>
                <a href="#" class="google"
                  ><font-awesome-icon icon="fa-brands fa-google-plus"
                /></a>
              </li>
              <li>
                <a href="#" class="skype"
                  ><font-awesome-icon icon="fa-brands fa-skype"
                /></a>
              </li>
            </ul>
          </div>
          <figure class="footer-img">
            <img src="/Top-udemy-courses-90-percent-off.jpg" alt="" />
          </figure>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container-s">
        <div class="row">
          <figure>
            <img src="/footer-logo2x-50x56.png" alt="footer-logo" />
          </figure>
          <div>
            <p>
              Copyright 2020. <a href="#">MasterStudy</a> Theme by
              <a href="#">StylemixThemes</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/colors.scss" as *;

.footer {
  background-color: $deep-blu;

  .footer-top {
    padding-top: 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid $darkgrey;

    img {
      width: 270px;
    }

    h4 {
      color: white;
      text-transform: uppercase;
      font-size: 18px;
      margin-bottom: 30px;
    }

    p {
      color: white;
      font-size: 12px;
    }

    .row {
      justify-content: space-around;
    }

    .about {
      margin-right: 40px;
    }

    .contact {
      p {
        margin-bottom: 5px;
      }
      .e-mail {
        color: $darkgrey;
        font-size: 12px;
      }
    }

    .social {
      margin-right: 80px;
      margin-left: 120px;

      ul {
        display: flex;
        flex-wrap: wrap;
        row-gap: 5px;

        li {
          padding: 5px 5px;
          flex-basis: calc(100% / 4);
          color: white;

          a {
            border-radius: 100%;
            padding: 5px 5px;
            aspect-ratio: 1;
            font-size: 16px;
          }
        }

        .facebook {
          background-color: #3b5998;
        }

        .instagram {
          background-color: #c32aa3;
        }

        .linkedin {
          background-color: #0077b5;
        }

        .pinterest {
          background-color: #bd081c;
        }

        .twitter {
          background-color: #1ca1f2;
        }

        .google {
          background-color: #db4437;
        }

        .skype {
          background-color: #04aff0;
        }

        .globe {
          background-color: #ea4c89;
        }
      }
    }
  }

  .footer-bottom {
    padding-top: 20px;
    padding-bottom: 20px;

    .row {
      align-items: center;
      gap: 20px;

      p {
        color: white;
        font-size: 12px;

        a {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
