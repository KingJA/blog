<template>
  <div class="page_admin">
    <div class="wrap_admin">
      <div class="nav">
        <ul>
          <li>
            <router-link to="/user_center" class="item_nav">文章管理</router-link>
          </li>
         <li>
           <router-link to="/article_center" class="item_nav">用户管理</router-link>
         </li>
        </ul>
      </div>
      <div class="content">
        <router-view/>
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
    .nav
      background #7e8c8d
      text-align center
      width 20%
      float left
      .item_nav
        line-height px2rem(50)
    .content
      background #b29a6f
      float right
      width 80%
</style>
