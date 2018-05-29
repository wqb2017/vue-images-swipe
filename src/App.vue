<template>
  <div id="app">
    <VueImagesSwipe :listData="imgList" :slideTime="2000" position="right" :keyStyleActive="{'font-size':'20px'}" @toggleCallback="_toggleCallback"></VueImagesSwipe>
  </div>
</template>
<script>
import VueImagesSwipe from "./lib/vue-images-swipe";
import dataList from "./data";
export default {
  name: 'app',
  components: {
    VueImagesSwipe
  },
  computed: {
    //图片信息
    imgList() {
      return dataList;
    }
  },
  methods: {
    //切换回调
    _toggleCallback() {
      console.log(1, new Date());
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

li {
  list-style: none;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
