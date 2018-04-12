<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/function.styl"
  @import "../common/stylus/color.styl"
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width 100%
    height 100%
    font-size px2rem(20)
  }
</style>
