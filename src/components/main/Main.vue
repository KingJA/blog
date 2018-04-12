<template>
  <div class="page_main">
    <div class="wrap_nav border-1px" id="nav_head">
      <ul class="nav">
        <li class="nav_item">
          <router-link to="/aboutme">About</router-link>
        </li>
        <li class="nav_item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav_item">
          <router-link to="/article" id="nav_article">Article</router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  @import "../../common/stylus/mixin.styl"
  .page_main
    height 100%
    .wrap_nav
      border-1px($bg_gray)
      box-sizing border-box
      background $white
      width 100%
      position fixed
      left 0
      top 0
      z-index 1000
      .nav
        .nav_item
          display inline-block
          margin-right px2rem(20)
          height px2rem(55)
          & > a
            text-decoration none
            padding-right px2rem(10)
            padding-left px2rem(10)
            display block
            line-height px2rem(50)
            color $font_3
            font-size px2rem(15)
            border-bottom px2rem(5) solid rgba(0, 0, 0, 0)
            &.router-link-exact-active
              color $orange
              border-bottom px2rem(5) solid $orange

</style>
