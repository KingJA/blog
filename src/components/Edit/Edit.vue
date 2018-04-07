<template>
  <div class="markdown">
    <div class="wrap_input">
      <input type="text" class="title" v-model="title" placeholder="Please input the title...">
    </div>

    <div id="editor">
      <mavon-editor style="height: 100%" ref="editor" @save="save"></mavon-editor>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'editor',
    data() {
      return {
        title: ''
      }
    },
    components: {
      mavonEditor
    },
    methods: {
      save(value, render) {
        this.$http.post("/api/article/add", this.$qs.stringify({
          title: this.title,
          content: value

        })).then((response) => {
          console.log(response.data.resultData);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/function.styl"
  @import "../../common/stylus/color.styl"
  .wrap_input
    width: 80%;
    margin: px2rem(10) auto auto

    .title
      font-size px2rem(25)
      line-height px2rem(40)
      margin-bottom px2rem(10)
      outline: none
      color $font_3
      width 100%
      border 0

  #editor {
    margin: auto;
    width: 80%;
    height: 580px;
  }
</style>
