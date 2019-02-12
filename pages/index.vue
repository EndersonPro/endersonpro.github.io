<template>
  <section class="home">
    <div class="message">
      <cite class="gradient">
        &quot;La vida sería mucho más sencilla si pudiéramos echar un vistazo al código fuente&quot;
        <i
          class="em em-computer"
        ></i>
      </cite>
    </div>

    <div class="social">
      <div class="wrapper">
        <div class="media">
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/EndersonVizcaino">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/endersonvizc/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/EndersonPro">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/Endersonj_">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <AboutMe/>
  </section>
</template>

<script>
import AboutMe from "../components/aboutme";

export default {
  components: {
    AboutMe
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #00010d;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ebf2f1;
}

.home div {
  .message,
  .social {
    margin: 5px 0;
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.message {
  padding: 1em;
  font-size: 35px;
  width: 60%;
  text-align: center;
  font-family: Inconsolata, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.gradient {
  background: #282828;
  background: linear-gradient(-45deg, #000000, #0f9b0f);
  /*  background: linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab); */
  background-size: 400% 400%;
  animation: Gradient 5s ease infinite;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.wrapper {
  ul {
    li {
      a {
        text-decoration: none;
        color: #fff;
        font-size: 25px;
        transition: 0.5s;
        &:hover {
          color: orange;
        }
      }
      margin: 0 0.4em;
      list-style: none;
      display: inline-flex;
    }
  }
}

@media screen and (max-width: 48em) {
  .message {
    width: 85%;
  }
}

@media screen and (min-width: 563px) {
  .media {
    &::before {
      left: -12px;
    }
  }
}
</style>
