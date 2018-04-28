<template>
  <div class="page_login">
    <div class="wrap_login">
      <div class="wrap_input">
        <div class="line">
          <input type="text" placeholder="Username" class="input" v-model="username">
        </div>
        <div class="line">
          <input type="password" placeholder="Password" class="input" v-model="password">
        </div>
      </div>
      <p class="submit line" @click="sumbit">Submit</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      sumbit() {
        this.login({username:this.username,password:this.password});
      },
      setCookie(key, value, iDay) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = key + '=' + value + ';expires=' + oDate;
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .page_login
    background $bg_gray
    box-sizing border-box
    background url('bg_login.jpg') no-repeat center center fixed
    background-size cover
    position absolute
    top 0
    bottom 0
    width 100%
    .wrap_login
      background $white
      border 1px solid $divider
      box-shadow 0 4px 4px 0 rgba(0, 0, 0, 0.2)
      padding px2rem(50)
      width px2rem(500)
      position absolute
      left 50%
      top px2rem(100)
      margin-left - px2rem(250)
      .wrap_input
        .line
          margin-bottom px2rem(50)
          .input
            box-sizing border-box
            padding-left px2rem(25)
            outline none
            line-height px2rem(50)
            font-size px2rem(20)
            width 100%
            border-width 0

      .submit
        cursor pointer
        text-align center
        margin-right px2rem(80)
        margin-left px2rem(80)
        background $orange
        font-size px2rem(20)
        line-height px2rem(40)
        border-radius px2rem(30)
        color $white

</style>
