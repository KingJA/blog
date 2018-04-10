<template>
  <div class="markdown">
    <div class="wrap_input">
      <input type="text" class="title" v-model="article.title" placeholder="Please input the title...">
    </div>

    <div id="editor">
      <mavon-editor style="height: 100%" ref="editor" @save="save" placeholder="开始输入..."
                    v-model="article.content"></mavon-editor>
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
        article: {}
      }
    },
    components: {
      mavonEditor
    },
    mounted: function () {
      this.article = this.$route.params.article;
    },
    methods: {
      save() {
        this.$http.post("/api/article/modify", this.$qs.stringify({
          title: this.article.title,
          id: this.article.id,
          content: this.article.content
        })).then((response) => {
          if (response.data.resultCode === 0) {
            this.showSuccess('修改成功');
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      showSuccess(msg) {
        this.$notify({
          title: '提示',
          message: msg,
          type: 'success'
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
