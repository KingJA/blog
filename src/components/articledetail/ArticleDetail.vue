<template>
  <div class="page_article_detail">
    <div class="wrap_content">
      <p class="text" ref="text"></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "article-detail",
    mounted: function () {
      this.$nextTick(function () {
        console.log("mounted");
        this.$refs.text.textContent += ' router-link-exact-active';
        document.getElementById('nav_article').className += ' router-link-exact-active';
      })
    },
    destroyed: function () {
      console.log("destroyed");
      document.getElementById('nav_article').className = '';
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_article_detail
    .wrap_content
      width px2rem(1000)
      margin 0 auto
      margin-top px2rem(20)


</style>
