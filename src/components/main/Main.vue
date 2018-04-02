<template>
  <div class="page_main">

    <div class="wrap_nav">
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

    <router-view/>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_main
    height 100%
    .wrap_nav
      .nav
        height px2rem(50)
        .nav_item
          float right
          display block
          font-size px2rem(20)
          line-height px2rem(50)
          margin-right px2rem(20)
          & > a
            padding-right px2rem(10)
            padding-left px2rem(10)
            display block
            line-height px2rem(50)
            color $font_3
            font-size px2rem(15)
            &.router-link-exact-active
              color $orange
              border-bottom 2px solid $orange

</style>
