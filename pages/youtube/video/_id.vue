<template>
  <h1>Video con el id {{this.$route.params.id}}</h1>
</template>
<script>
export default {
  data() {
    return {
      id: "xdxd"
    };
  },
  created(){
      console.log(this.$route.params);
  }
};
</script>
<style scoped>
    h1{
        color:white;
    }
</style>

