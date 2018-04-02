<template>
  <div class="contact">
    <div class="wrap_contact">

      <ul>
        <li class="item_info">
          <div class="wrap_email">
            <span class="title">email:</span>
            <span class="des">kingjavip@gmail.com</span>
          </div>
        </li>
        <li class="item_info">
          <div class="wrap_email">
            <span class="title">github:</span>
            <span class="des">https://github.com/KingJA</span>
          </div>
        </li>
      </ul>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "contact"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .contact
    width 100%
    height 100%
    padding-top px2rem(100)
    background #eeeeee
    .wrap_contact
      background $white
      width px2rem(600)
      margin 0 auto
      box-shadow 0 4px 4px 0 rgba(0, 0, 0, 0.2)
      .item_info
        border-bottom 1px solid $divider
        padding px2rem(20)
        &:last-child
          border-none()
          border-bottom 1px solid rgba(0, 0, 0, 0)
        .wrap_email
          display flex
          .title
            flex 1
            font-weight bold
          .des
            flex 5

</style>
