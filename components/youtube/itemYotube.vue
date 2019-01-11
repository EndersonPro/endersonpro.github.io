<template>
  <div class="youtube_container item">
    <div class="img_container">
      <img :src="img" :alt="title">
    </div>
    <div class="description_container">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="description">
        <div class="parrafo">
          <p>{{description}}</p>
        </div>
        <div class="more">
          <a class="btn" href="#">More information</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "title", "description", "id"],
  created() {}
};
</script>


<style scoped >
img {
  width: 130px;
}
.youtube_container {
  margin: 1em;
  padding: 1em;
  background-color: rgba(2, 94, 115, 0.7);
  flex-basis: calc(50% - 2em);
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
.img_container {
  /* flex-basis: 60%; */
  background-size: cover;
  /* width: 120px; */
}

.description_container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title {
  background-color: brown;
  padding: 0.3em;
  flex-basis: 20%;
  text-align: center;
}
.title span {
  font-size: 13px;
  color:#ebf2f1;
}

.description {
  padding: 0.9em;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-between;
}
.btn {
  text-decoration: none;
  font-size: 13px;
  padding: 0.4em;
  background-color: orange;
  color: white;
}
.btn:hover {
  transition: 0.5s all ease-out;
  background-color: green;
}

.parrafo {
  margin-bottom: 1em;
  font-size: 14px;
  color: #ebf2f1;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 999px) {
  .youtube_container {
    flex-basis: calc(100% - 1em);
  }
  .parrafo {
    white-space: normal;
    width: 100%;
  }
  .title span {
    font-size: 17px;
  }
}

@media screen and (max-width: 560px) {
  .youtube_container {
    flex-direction: column;
  }
  .parrafo {
    margin-bottom: 1em;
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  img {
    max-width: 100%;
    width: 100%;
  }
}

</style>

