<template>
  <div class="page_article_detail">
    <div class="wrap_detail">
      <p class="title">{{article.title}}</p>
      <vue-markdown :source="article.content"></vue-markdown>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import VueMarkdown from 'vue-markdown' //直接作为一个组件引入
  export default {
    name: "article-detail",
    mounted: function () {
      this.$nextTick(function () {
        document.getElementById('nav_article').className += ' router-link-exact-active';
      })
    },
    destroyed: function () {
      document.getElementById('nav_article').className = '';
    },
    computed: {
      ...mapGetters([
        'article'
      ])
    },
    components: {
      VueMarkdown // 声明组件
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_article_detail
    .wrap_detail
      width px2rem(1000)
      margin 0 auto
      margin-top px2rem(20)
      .title
        font-size px2rem(30)


</style>
