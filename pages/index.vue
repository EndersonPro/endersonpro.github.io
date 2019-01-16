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
              <a target="_blank" href="https://www.facebook.com/EndersonVizcaino">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/EndersonVizcaino">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.facebook.com/EndersonVizcaino">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="yo typewriter">
      <span>
        &copy; ENDERSON
        <strong>VIZCAINO</strong>
      </span>
    </div>
    <div class="sobremi">
      <div class="texto">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates error officia accusamus voluptatibus sint ab voluptate earum dolore distinctio eligendi enim, alias, non aliquam quisquam quos aliquid nobis. Explicabo, natus.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 32rem;
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
.yo {
  font-size: 16px;
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

.typewriter span {
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

@media screen and (max-width: 48em) {
  .message {
    width: 85%;
  }
}

.sobremi {
  margin-top: 100px;
  display: flex;
  width: 100%;
  background: #fbfbfb;
  position: relative;
  /* height: 300px; */
  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 156% 59% 152% 0%;
    width: 55%;
    height: 136px;
    background-color: #00010d;
    left: -6px;
    top: -91px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 162% 0% 0% 0%;
    width: 57%;
    height: 108px;
    background-color: #fbfbfb;
    top: -66px;
    right: 0;
  }

  .texto {
    margin-top: 50px;
    display: block;
    position: relative;
    width: 100%;
    height: 400px;
    div {
      p {
        margin: 0 auto;
        color: black;
        font-size: 17px;
        text-align: justify;
        line-height: 1.4em;
        padding: 1em;
      }
      width: 100%;
      position: absolute;

      z-index: 3;
    }
    &::before {
      content: "Sobre Mí";
      position: absolute;
      color: black;
      font-size: 30px;
      right: 7%;
      top: -2em;
      z-index: 2;
    }
    &::after {
      background: url(https://png.pngtree.com/element_origin_min_pic/16/10/07/1557f7558869880.jpg);
      content: "";
      opacity: 0.1;
      background-repeat: no-repeat;
      background-position: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: 1;
    }
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
