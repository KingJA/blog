<template>
  <div class="article_center">
    <!-- If you are using the "Solid" style you can simply use the icon name -->
    <ul>
      <li v-for="article in articles" class="item_article">
        <p @click="goDetail(article)">{{article.title}}</p>
        <div>
          <span>{{article.createtime}}</span>
          <font-awesome-icon icon="pen-square" class="ic_op"/>
          <font-awesome-icon icon="trash" class="ic_op"/>
        </div>
      </li>
    </ul>
    <!-- Using another style needs a prefix in the following array format -->
  </div>

</template>

<script type="text/ecmascript-6">
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

  export default {
    data() {
      return {
        articles: []
      }
    },
    components: {
      FontAwesomeIcon
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
        this.$router.push({  name:'Modify',params: { article:  article }});
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .article_center
    .item_article
      border-bottom  dotted #b29a6f
      .ic_op
        width px2rem(26)
        height px2rem(26)

</style>
