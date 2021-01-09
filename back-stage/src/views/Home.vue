<template>
  <div class="home">
   <iframe :src='url'></iframe>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
    computed: {
    ...mapState({
      url: state => state.url
    })
  }
}
</script>

<style scoped>
.home, iframe {
  width: 100%;
  height: 100%;
}
</style>
