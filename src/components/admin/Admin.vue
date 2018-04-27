<template>
  <div class="page_admin">

    <div class="head">
    </div>
    <div class="wrap_admin">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/user_center" class="item_nav">用户管理</router-link>
          </li>
         <li>
           <router-link to="/article_center" class="item_nav">文章管理</router-link>
         </li>
        </ul>
      </div>
      <div class="content">
        <keep-alive>
          <router-view/>
        </keep-alive>

      </div>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "login"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .wrap_admin
    width 100%
    display flex
    .nav
      border-right 1px solid $bg_gray
      text-align center
      flex px2rem(100)
      flex 1
      .item_nav
        font-size px2rem(15)
        color $font_9
        line-height px2rem(50)
        display inline-block
        width 100%
        &:hover
          background $orange_light
        &.router-link-exact-active
          color $orange
          background $orange_light
    .content
      flex 5
  .head
    background $orange
    height px2rem(80)
</style>
