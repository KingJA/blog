<template>
  <div class="page_article">


    <div class="wrap_content">

      <ul>
        <li class="item_article">
          <div class="wrap_title">
            <p class="title">基于Jenkis搭建自动构建平台</p>
            <div class="wrap_sub_title">
              <span class="tag">[Android]</span>
              <span class="date">2018-10/02 10:22:08</span>
            </div>
          </div>

        </li>
        <li class="item_article">
          <div class="wrap_title">
            <p class="title">小谈分布式存储</p>
            <div class="wrap_sub_title">
              <span class="tag">[end]</span>
              <span class="date">2018-10/02 10:22:08</span>
            </div>
          </div>

        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
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
        padding px2rem(10)
        margin-bottom px2rem(10)
        border-bottom 2px dotted $divider
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
