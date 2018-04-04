<template>
  <div class="contact" ref="contact">
    <div class="wrap_contact">
      <ul class="setZero">
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
        <li class="item_info">
          <div class="wrap_email">
            <span class="title">address:</span>
            <span class="des">Wenzhou,Zhejiang</span>
          </div>
        </li>
      </ul>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "contact",
    mounted() {
      this.$nextTick(function () {
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .contact
    width 100%
    box-sizing border-box
    background url('../../../static/img/bg_contact.jpg') no-repeat center center fixed
    background-size cover
    position absolute
    top px2rem(55)
    bottom 0
    padding-top px2rem(100)
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
            color $font_6
          .des
            flex 5
            color $font_9

</style>
