<template>
  <section class="home">
    <div class="message">
      <cite>La vida sería mucho más sencilla si pudiéramos echar un vistazo al código fuente.</cite>
    </div>
    <div class="yo">
      <span>&copy; ENDERSON</span>
      <strong>VIZCAINO</strong>
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

@media screen and (max-width: 48em) {
  .message {
    width: 85%;
  }
}
</style>
