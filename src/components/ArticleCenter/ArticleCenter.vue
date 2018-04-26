<template>
  <div class="article_center">
    <!-- If you are using the "Solid" style you can simply use the icon name -->
    <div class="catelogs">
      <ul>
        <li v-for="catalog in catalogs" :class="{ 'item_catelog': true, 'action': catalog.checked}"
            v-on:click="getArticlesByCatelogid(catalog)">{{catalog.name}}
        </li>
      </ul>

    </div>
    <div class="wrap_content" v-loading="loading">
      <div class="wrap_write">
        <div class="write" @click="goPublish">
          <font-awesome-icon icon="edit"/>
          <span>写篇文章</span>
        </div>
      </div>


      <div class="wrap_search">
        <el-input placeholder="请输入搜索内容" v-model="keyword" class="input-with-select">
          <el-select v-model="type" slot="prepend" placeholder="请选择">
            <el-option label="标题" value="title"></el-option>
            <el-option label="内容" value="content"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div>
      <div class="wrap_tip" v-if="hasResult">
        <span class="tip">以下为</span>
        <span class="keyword">{{type==='title'?'标题':'内容'}}</span>
        <span class="tip">中含有'</span>
        <span class="keyword">{{keyword}}</span>
        <span class="tip">'的文章</span>
        <span class="all" @click="getArticles">显示全部</span>
      </div>
      <ul>
        <li v-for="article in articles" class="item_article">
          <p class="title">{{article.title}}</p>
          <div class="sub_title">
            <span class="date">{{article.createtime}}</span>
            <div class="wrap_op">
              <font-awesome-icon icon="pen-square" class="ic_op" @click="goDetail(article)"/>
              <font-awesome-icon icon="trash" class="ic_op" @click="showDeleteDialog(article)"/>
              <font-awesome-icon :icon="publishStatus(article.published)" class="ic_op"
                                 @click="setPublishStatus(article)"/>
            </div>
          </div>
        </li>
      </ul>

    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import Vue from 'vue'

  export default {
    data() {
      return {
        currentCatalogId: -1,
        classA: true,
        hasResult: false,
        type: '',
        keyword: '',
        loading: true,
        articles: [],
        catalogs: []
      }
    },
    computed: {},
    components: {
      FontAwesomeIcon
    },
    mounted() {
      this.$nextTick(function () {
        console.log('cookie:' + document.cookie);
        this.getArticles();
        this.getCatelogs();
      })
    },
    methods: {
      goPublish() {
        this.$router.push({name: 'Publish', query: {catalogId: this.currentCatalogId}});
      },
      publishStatus: function (published) {
        if (published === 1) {
          return 'eye-slash';
        } else {
          return 'eye';
        }
      },
      getArticles: function () {
        this.loading = true;
        this.$http.post("/api/article/all").then((response) => {
          if (response.data.resultCode === 0) {
            this.articles = response.data.resultData;
          }
          this.loading = false;
          this.hasResult = false;
        }).catch(function (error) {
          this.loading = false;
          console.log(error);
        });
      },
      getArticlesByCatelogid: function (catalog) {
        this.setCatalogAction(catalog);
        this.currentCatalogId=catalog.id;
        //如果vuex里有缓存，则取缓存
        let articles = this.$store.getters.catalog_articles[catalog.id];
        if (articles) {
          this.articles = articles;
          console.log("缓存击中")
          return;
        }
        //vuex中没缓存则进行网络请求
        this.loading = true;
        this.$http.post("/api/article/articlesBycatalogId", {
          catalogid: catalog.id,
        }).then((response) => {
          if (response.data.resultCode === 0) {
            this.articles = response.data.resultData;
            this.$store.commit('SAVE_ARTICLES_BY_CATALOGID', {
              catalogid: catalog.id,
              articles: response.data.resultData
            });
          }
          this.loading = false;
          this.hasResult = false;
        }).catch(function (error) {
          this.loading = false;
          console.log(error);
        });
      },
      getCatelogs: function () {
        this.loading = true;
        this.$http.get("/api/article/catalog").then((response) => {
          if (response.data.resultCode === 0) {
            this.catalogs = response.data.resultData;
          }
          this.loading = false;
          this.hasResult = false;
        }).catch(function (error) {
          this.loading = false;
          console.log(error);
        });
      },
      setCatalogAction(catalog) {
        this.catalogs.forEach((item) => {
          if (catalog == item) {
            Vue.set(item, 'checked', true);
          } else {
            Vue.set(item, 'checked', false);
          }
        })

      },
      goDetail(article) {
        this.$router.push({name: 'Modify', params: {article: article}});
      },
      deleteArticle(article) {
        this.$http.post("/api/article/delete", this.$qs.stringify({
          id: article.id,
        })).then((response) => {
          if (response.data.resultCode === 0) {
            this.articles.remove(article);
            this.showSuccess('删除成功');
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      showDeleteDialog(article) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteArticle(article);
        }).catch(() => {
          //取消
        });
      },
      showSuccess(msg) {
        this.$notify({
          title: '提示',
          message: msg,
          type: 'success'
        });
      },
      //搜索文章
      search() {
        this.$http.post("/api/article/query", this.$qs.stringify({
          type: this.type,
          keyword: this.keyword
        })).then((response) => {
          if (response.data.resultCode === 0) {
            this.hasResult = true;
            this.articles = response.data.resultData;
            this.showSuccess('查询成功');
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      //设置发布状态
      setPublishStatus(article) {
        this.setProgress(true);
        this.$http.post('/api/article/published', this.$qs.stringify({id: article.id}))
          .then((response) => {
            if (response.data.resultCode === 0) {
              article.published = this.reversal(article.published);
            }
            this.setProgress(false);
          })
          .catch((error) => {
            console.log('error:' + error)
            this.setProgress(error);
          });
      },
      setProgress(loading) {
        this.loading = loading;
      },
      reversal(status) {
        return status === 0 ? 1 : 0;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .article_center
    min-height px2rem(600)
    display flex
    .catelogs
      border-right 1px solid $bg_gray
      flex 1
      .item_catelog, .action
        cursor pointer
        font-size px2rem(15)
        color $font_9
        line-height px2rem(50)
        display inline-block
        width 100%
        text-align center
        &:hover
          background $orange_light
      .action
        color $orange
        background $orange_light

    .wrap_content
      flex 5
      .wrap_write
        text-align center
        .write
          color $orange
          cursor pointer
          font-size px2rem(15)
          line-height px2rem(50)
          display inline-block
          text-align center
          margin 0 auto
      .wrap_search
        width 80%
        margin px2rem(20) 0 px2rem(20) px2rem(20)
        .el-select .el-input
          width px2rem(200)
        .input-with-select .el-input-group__prepend
          background-color #fff
      .wrap_tip
        margin-left px2rem(16)
        & > span
          display inline-block
        .tip
          color $font_9
          font-size px2rem(16)
        .keyword
          color $orange
          font-size px2rem(16)
        .all
          margin-left px2rem(50)
          background $orange
          border-radius px2rem(2)
          font-size px2rem(12)
          color $white
          padding px2rem(6) px2rem(12)
          cursor pointer
      .item_article
        border-bottom 2px dotted $bg_gray
        padding px2rem(16)
        .title
          cursor pointer
          font-size px2rem(20)
          color $font_3
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          margin-bottom px2rem(12)
          &:hover
            color $orange
        .sub_title
          overflow hidden
          .date
            color $font_6
            font-size px2rem(16)
          .wrap_op
            float right
            margin-right px2rem(50)
            .ic_op
              margin-right px2rem(50)
              width px2rem(26)
              height px2rem(26)
              cursor pointer
              &:hover
                color $orange

</style>
