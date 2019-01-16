<template>
  <div class="contenedor">
    <h1>Cargando video</h1>
    <div class="cont_video_youtube">
    <div class="yt-video">
      <iframe id="player" frameborder="0" type="text/html" :src="src"></iframe>
    </div>

    </div>
  </div>
</template>
<script>
export default {
  computed: {
    src() {
      return (
        "http://www.youtube.com/embed/" +
        this.$route.params.id
      );
    }
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
h1 {
  color: white;
}
.contenedor {
  display: flex;
  flex-direction: column;
  .cont_video_youtube{
    padding: .5em;
  }
}
.yt-video {
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  padding-top: 30px;
  position: relative;
}

.yt-video iframe,
.yt-video object,
.yt-responsive embed {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>

