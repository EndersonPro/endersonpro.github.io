<template>
  <div class="main-content">
    <div class="portfolio">
      <div class="portfolio-item medium">one</div>
      <div class="portfolio-item large two">two</div>
      <div class="portfolio-item medium">three</div>
      <div class="portfolio-item small">four</div>
      <div class="portfolio-item tall">five</div>
      <div class="portfolio-item wide">six</div>
      <div class="portfolio-item wide">six</div>
      <div class="portfolio-item medium">one</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.main-content {
  padding: 10%;
  flex: 1 1 80%;
  min-height: 100vh;
}

.portfolio {
  display: grid;
  height: 100%;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
}
.portfolio-item {
  background: #f96855;
  color: #c4c4c4;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  background-size: cover;
  background-position: top left;
  transition: all ease-in-out 300ms;
  position: relative;
  z-index: 10;
}
.portfolio-item.small {
  grid-row: span 1;
  grid-column: span 1;
}
.portfolio-item.medium {
  grid-row: span 2;
  grid-column: span 2;
}
.portfolio-item.large {
  grid-row: span 3;
  grid-column: span 3;
}
.portfolio-item.tall {
  grid-row: span 3;
  grid-column: span 2;
}
.portfolio-item.wide {
  grid-row: span 2;
  grid-column: span 3;
}
.portfolio-item:hover {
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);
}
</style>
