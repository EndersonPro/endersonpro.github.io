<template>
  <div class="container">
    <nav>
      <input type="checkbox" class="hidden" id="nav">
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <!-- <div class="logo">
        <nuxt-link to="/">EndersonPro</nuxt-link>
      </div> -->
      <div class="nav-wrapper">
        <ul>
          <li v-on:click="handlerClick">
            <nuxt-link to="/">Inicio</nuxt-link>
          </li>
          <li v-on:click="handlerClick">
            <nuxt-link to="/youtube">Youtube</nuxt-link>
          </li>
          <li v-on:click="handlerClick">
            <nuxt-link to="/proyectos">Proyectos</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <nuxt/>
    </div>
    <footer class="footer">
      <div class="yo typewriter">
        <span>
          2019 &copy; ENDERSON
          <i class="em em-green_heart"></i>
          <strong>VIZCAINO</strong>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    handlerClick: evt => {
      document.querySelector("#nav").checked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
$color-primario: #00010d;
$color-primario-rgb: rgba(0, 1, 13, 0.7);
$color-texto: #fafafa;

.container {
  background: $color-primario;
}

nav {
  padding: 8px;
  ul {
    float: right;
    margin-top: 8px;
    li {
      display: inline-block;
      &:not(:first-child) {
        margin-left: 48px;
      }
      &:last-child {
        margin-right: 24px;
      }
      a {
        display: inline-block;
        outline: none;
        color: $color-texto;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 1.2px;
        font-weight: 600;
      }
    }
  }
}

.logo {
  float: left;
  padding: 8px;
  margin-left: 16px;
  /* margin-top: 8px; */
  a {
    color: $color-texto;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0px;
    text-decoration: none;
  }
}

@media screen and (max-width: 864px) {
  .logo {
    padding: 0;
  }

  .nav-btn {
    position: fixed;
    right: 10px;
    top: -2px;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
    i {
      display: block;
      width: 20px;
      height: 2px;
      background: $color-texto;
      border-radius: 2px;
      margin-left: 14px;
      &:nth-child(1) {
        margin-top: 16px;
      }
      &:nth-child(2) {
        margin-top: 4px;
      }
      &:nth-child(3) {
        margin-top: 4px;
      }
    }
  }

  .nav-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: $color-primario-rgb;
    opacity: 0;
    transition: all 0.4s ease;
    ul {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      li {
        display: block;
        float: none;
        width: 100%;
        text-align: right;
        margin-bottom: 10px;
        &:nth-child(1) {
          transition-delay: 0.2s;
        }
        &:nth-child(2) {
          transition-delay: 0.3s;
        }
        &:nth-child(3) {
          transition-delay: 0.3s;
        }
        &:not(:first-child) {
          margin-left: 0;
        }
        a {
          padding: 10px 24px;
          opacity: 0;
          color: $color-texto;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.2px;
          transform: translateX(-20px);
          transition: all 0.2s ease;
        }
      }
    }
  }
}

#nav:checked + .nav-btn,
#nav:checked + .btn-link {
  transform: rotate(45deg);
  i {
    background: $color-texto;
    transition: transform 0.4s ease;
    &:nth-child(1) {
      transform: translateY(6px) rotate(180deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-6px) rotate(90deg);
    }
  }
}
#nav:checked ~ .nav-wrapper {
  z-index: 9990;
  opacity: 1;
  ul {
    li {
      a {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}
.hidden {
  display: none;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .3em;
  background: $color-texto;
}

.yo {
  color: $color-primario;
  font-size: 11px;
}
.typewriter span {
  /* color: #fff; */
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
</style>
