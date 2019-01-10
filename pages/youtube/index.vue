<template>
    <div class="contenedor">
        <ItemYouTube></ItemYouTube>
        <ItemYouTube></ItemYouTube>
        <ItemYouTube></ItemYouTube>
        <ItemYouTube></ItemYouTube>
        <ItemYouTube></ItemYouTube>
        <ItemYouTube></ItemYouTube>

    </div>
</template>
<script>
import ItemYouTube from '../../components/youtube/itemYotube'

export default {
    components:{
        ItemYouTube
    }
}
</script>
<style scoped>
.contenedor{
    outline: 1px solid red;
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between
}
</style>

