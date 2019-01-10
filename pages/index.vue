<template>
  <section class="home">
    <div class="message">
      <cite>&quot;La vida sería mucho más sencilla si pudiéramos echar un vistazo al código fuente&quot;</cite>
    </div>
    <div class="yo typewriter">
      <span>
        &copy; ENDERSON
        <strong>VIZCAINO</strong>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.home {
  min-height: 32rem;
  /* outline: 1px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ebf2f1;
}

.home div {
  /* background-color: blue; */
  margin: 5px 0;
  flex: 1 1 258px;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
