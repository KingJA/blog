<template>
  <div class="page_article" v-loading="isLoading">
    <div class="wrap_content">
      <ul>
        <li class="item_article" v-for="article in articles">
          <div class="wrap_title">
            <p class="title" @click="goDetail(article)">{{article.title}}</p>
            <div class="wrap_sub_title">
              <span class="tag">[{{article.name}}]</span>
              <span class="date">{{article.createtime}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex'

  export default {
    mounted() {
      this.$nextTick(() => {
        this.getArticles();
      })
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        articles: ({articleModule}) => articleModule.articles,
        isLoading: ({articleModule}) => articleModule.isLoading
      })
    },
    methods: {
      ...mapActions([
        'getArticles'
      ]),
      goDetail(article) {
        this.$router.push({name: 'ArticleDetail', query: {id: article.id}});
      },
    }
    // beforeRouteEnter (to, from, next) {
    //   // 在渲染该组件的对应路由被 confirm 前调用
    //   // 不！能！获取组件实例 `this`
    //   // 因为当守卫执行前，组件实例还没被创建
    //   console.log('beforeRouteEnter');
    // },
    // beforeRouteUpdate (to, from, next) {
    //   // 在当前路由改变，但是该组件被复用时调用
    //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    //   // 可以访问组件实例 `this`
    //   console.log('beforeRouteUpdate');
    // },
    // beforeRouteLeave (to, from, next) {
    //   // 导航离开该组件的对应路由时调用
    //   // 可以访问组件实例 `this`
    //   console.log('beforeRouteLeave');
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_article
    position absolute
    width 100%
    top px2rem(55)
    bottom 0
    .wrap_content
      width px2rem(1000)
      margin 0 auto
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
