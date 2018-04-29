<template>
  <div class="page_article_detail" v-loading="isLoading">
    <div class="wrap_detail">
      <p class="title">{{article.title}}</p>
      <div  v-html="article.content" v-highlight class="markdown-body"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VueMarkdown from 'vue-markdown'
  import marked from 'marked'
  import {mapActions,mapState} from 'vuex'
  export default {
    data() {
      return {
      }
    },
    mounted: function () {
     let articleId= this.$route.query.id;
     this.getArticleDetail(articleId);

    },
    computed:{
      ...mapState({
        article:({articleDetailModule})=>articleDetailModule.article,
        isLoading:({articleDetailModule})=>articleDetailModule.isLoading
      })
    },
    components: {
      VueMarkdown
    },
    methods: {
      ...mapActions([
        'getArticleDetail'
    ])}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_article_detail
    height 100%
    .wrap_detail
      width 60%
      margin 0 auto
      padding-right px2rem(60)
      padding-left px2rem(60)
      padding-top px2rem(60)
      padding-bottom px2rem(100)
      .title
        font-size px2rem(30)


</style>
