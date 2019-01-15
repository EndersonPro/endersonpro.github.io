<template>
  <div class="contenedor">
    <h1>Espera un momento, estamos cargando el video...</h1>
    <div class="yt-video">
      <iframe id="player" type="text/html" :src="src"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    src() {
      return (
        "http://www.youtube.com/embed/" +
        this.$route.params.id +
        "?enablejsapi=1&origin=http://endersonpro.github.io"
      );
    }
  },
  methods: {},
  created() {}
};
</script>
<style scoped>
h1 {
  color: white;
}
.contenedor {
  display: flex;
  
  align-items: center;
  justify-items: center;
}
.yt-video {
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
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

