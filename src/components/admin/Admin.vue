<template>
  <div class="page_admin">
    <div class="wrap_admin">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/admin/article" class="item_nav">文章管理</router-link>
          </li>
         <li>
           <router-link to="/admin/user" class="item_nav">用户管理</router-link>
         </li>
        </ul>
      </div>
    </div>
    <router-view/>
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
    width 80%
    margin 0 auto
    .nav
      text-align center
      .action
        border-bottom px2rem(5) solid $orange
      width 20%
      float left
      .item_nav
        line-height px2rem(50)
    .content
      float right
      width 80%
      background #d7c610
</style>
