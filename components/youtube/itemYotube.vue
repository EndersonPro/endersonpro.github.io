<template>
  <div class="youtube_container">
    <div class="img_container">
      <img :src="img" :alt="title">
    </div>
    <div class="description_container">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="description">
        <div class="parrafo">
          <p>{{descriptionS}}</p>
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
  computed: {
    descriptionS() {

      /* LEER SOBRE WATH VUE */
      return (window.onresize = () => window.innerWidth <= 775) ? this.description:String(this.description).slice(0, 20) + " ... "
    },
    width: window.onresize = () => window.innerWidth
  },
  created() {
    console.log(this.width);
  }
};
</script>


<style scoped >
img {
  max-width: 100%;
}
.youtube_container {
  margin: 1em;
  background-color: blue;
  flex-basis: calc(50% - 2em);
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
.img_container {
  flex-basis: 60%;
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
  background-color: red;
  color: white;
}
.btn:hover {
  transition: 0.5s all ease-out;
  background-color: green;
}

.parrafo {
  margin-bottom: 1em;
  font-size: 14px;
}

.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
}

@media screen and (max-width: 918px) {
  .title {
    font-size: 10px;
  }
}
@media screen and (max-width: 800px) {
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

