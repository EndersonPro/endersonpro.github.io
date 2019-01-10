<template>
  <div class="youtube_container">
    <div class="img_container">aca la img</div>
    <div class="description_container">
      <div class="title">
        <h2>Titutlo de los videos o del video</h2>
      </div>
      <div class="description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro veror</p>
        <a href="#">More information</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.youtube_container {
  margin: 1em;
  background-color: blue;
  height: 10em;
  flex-basis: calc(50% - 2em);
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
.img_container {
  flex-basis: 150px;
  background-color: orange;
}

.description_container {
  display: flex;
  flex-direction:column;
  width: 100%;
}

.title {
  background-color: brown;
  font-size: 12px;
  padding: 0.3em;
  flex-basis: 20%;
  text-align: center;
}

.description {
  padding: 0.9em;
}
@media screen and (max-width: 849px) {
  .title {
    font-size: 11px;
  }
}
@media screen and (max-width: 849px) {
  .title {
    font-size: 10px;
  }
}
@media screen and (max-width: 777px) {
  .youtube_container {
    flex-basis: calc(100% - 1em);
  }
}
</style>

