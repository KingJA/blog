<template>
  <div class="markdown">
    <div class="wrap_input">
      <input type="text" class="title" v-model="title" placeholder="Please input the title...">
      <el-select v-model="catalogid" placeholder="请选择文章类目" class="selector" v-if="catalogs.length>0">
        <el-option
          v-for="catalog in catalogs"
          :key="catalog.id"
          :label="catalog.name"
          :value="catalog.id">
        </el-option>
      </el-select>
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
        title: '',
        catalogid: 1,
        catalogs: [],
      }
    },
    components: {
      mavonEditor
    },
    watch: {
      '$route'(to, from) {
        console.log("to:"+to);
        console.log("from:"+from);
      },
      '$route.params.catalogId': function (catalogId) {
        console.log("watch catalogId:"+catalogId);
      }
    },
    beforeCreate() {
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
      this.catalogid = this.$route.query.catalogId;
      console.log('catalogid' + this.catalogid)
    },
    mounted() {
      console.log("mounted");
      this.$nextTick(function () {
        this.getCatalogs();
      })
    },
    methods: {
      save(value, render) {
        console.log('name:' + this.catalogId)
        this.$http.post("/api/article/add", {
          title: this.title,
          catalogid: this.catalogid,
          content: value
        }).then((response) => {
          if (response.data.resultCode === 0) {
            console.log('发布成功:');
            this.$router.back()
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      getCatalogs() {
        this.$http.get("/api/article/catalog").then((response) => {
          if (response.data.resultCode === 0) {
            this.catalogs = response.data.resultData;
            console.log(response.data.resultData)
          }
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
  .markdown
    position absolute
    width 100%
    top px2rem(55)
    bottom 0
    .wrap_input
      width: 80%;
      display flex
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
