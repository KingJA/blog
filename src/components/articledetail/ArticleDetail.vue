<template>
  <div class="page_article_detail" v-loading="loading">
    <div class="wrap_detail">
      <p class="title">{{article.title}}</p>
      <div  v-html="article.content" v-highlight class="markdown-body"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VueMarkdown from 'vue-markdown'
  import marked from 'marked'
  export default {
    data() {
      return {
        loading: true,
        article: {}
      }
    },
    mounted: function () {
      console.log(this.$route.query.id);
      this.$nextTick(function () {
        this.getArticle();
      })
    },
    components: {
      VueMarkdown // 声明组件
    },
    methods: {
      getArticle: function () {
        this.$http.get("http://10.1.6.186/api/article/get?id=" + this.$route.query.id).then((response) => {
          if (response.data.resultCode===0) {
            this.article = response.data.resultData;
            this.article.content=marked(this.article.content, { sanitize: true });
          }
          this.loading = false;
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
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
