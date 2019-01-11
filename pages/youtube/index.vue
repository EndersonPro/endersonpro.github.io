<template>
  <div class="contenedor">
    <BounceLoader :color="color" v-if="!isload"></BounceLoader>
    <ItemYouTube
      class="items"
      v-else
      v-for="(video, index) in Videos"
      :key="index"
      :img="video.img"
      :title="video.title"
      :description="video.description"
      :id="video.id"
    ></ItemYouTube>
  </div>
</template>
<script>
import ItemYouTube from "../../components/youtube/itemYotube";
import searchYoutube from "youtube-api-v3-search";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";

export default {
  components: {
    ItemYouTube,
    BounceLoader
  },
  data() {
    return {
      isload: false,
      color: "orange",
      YOUTUBE_KEY: "AIzaSyC6n6TtDL7DoeqrNVhcf-jcCEa9Gymx1e0",
      options: {
        /* q: "nodejs", */
        part: "snippet",
        type: "video",
        channelId: "UCIbDKTvHPeSQc1-jqkAPJhw",
        publishedAfter: "2017-07-22T00:00:00+00:00",
        maxResults: 15,
        order: "date"
      }
    };
  },
  asyncData(context) {
    return { Videos: context.getData };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let result = await searchYoutube(this.YOUTUBE_KEY, this.options);
        console.log(result.items);
        let arrVideos = new Array();
        result.items.forEach(element => {
          let objVideo = {
            id: element.id.videoId,
            description: element.snippet.description,
            title: element.snippet.title,
            img: element.snippet.thumbnails.high.url
          };
          arrVideos.push(objVideo);
        });
        this.Videos = arrVideos;
        this.isload = true;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
.contenedor {
  /* outline: 1px solid red; */
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
}
.v-spinner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.items {
  animation: 1s ease-in 0s 1 slideInFromLeft;
}

@media screen and (min-width: 468px) {
  .v-spinner {
    height: 90vh;
  }
}
</style>

