<template>
  <div class="contenedor">
    <ItemYouTube 
        v-for="(video, index) in Videos" 
        :key="index" 
        :img="video.img"
        :title="video.title"
        :description="video.description"
        :id="video.id"
        >
        </ItemYouTube>
  </div>
</template>
<script>
import ItemYouTube from "../../components/youtube/itemYotube";
import searchYoutube from "youtube-api-v3-search";

export default {
  components: {
    ItemYouTube
  },
  data() {
    return {
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
        console.log(arrVideos);
        this.Videos = arrVideos;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
.contenedor {
  outline: 1px solid red;
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>

