<template>
  <div class="page_article">
    <div class="wrap_content">
      <ul>
        <li class="item_article" v-for="article in articles">
          <div class="wrap_title">
            <p  class="title" @click="goDetail(article)">{{article.title}}</p>
            <div class="wrap_sub_title">
              <span class="tag">[Android]</span>
              <span class="date">{{article.createtime}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      this.$nextTick(function () {
        console.log('mounted');
        this.getArticles();
      })
    },
    methods: {
      getArticles: function () {
        this.$http.post("/api/article/all").then((response) => {
          this.articles = response.data.resultData;
        }).catch(function (error) {
          console.log(error);
        });
      },
      goDetail(article) {
        this.fillArticle(article);
        // this.$router.push('/detail')
        this.$router.push({  name:'ArticleDetail',query: { id:  article.id }});
      },
      fillArticle(msg) {
        this.saveArticle(msg);
      },
      ...mapMutations({
        saveArticle: 'SAVE_ARTICLE'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_article
    .wrap_content
      width px2rem(1000)
      margin 0 auto
      margin-top px2rem(20)
      .item_article
        list-style-type none
        padding px2rem(10)
        margin-bottom px2rem(10)
        border-bottom px2rem(2) dotted $divider_deep
        .wrap_title
          .title
            font-size px2rem(20)
            line-height px2rem(40)
            color $font_3
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .title:hover
            color $orange
            cursor pointer
          .wrap_sub_title
            overflow hidden
            margin-top px2rem(3)
            .tag, .date
              display block
            .tag
              float left
              color $font_6
              font-size px2rem(16)
            .date
              color $font_9
              float right
              font-size px2rem(14)
              line-height px2rem(16)


</style>
