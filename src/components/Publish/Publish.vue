<template>
  <div class="markdown">
    <div class="wrap_input">
      <input type="text" class="title" v-model="title" placeholder="Please input the title...">
      <el-select v-model="catalogId" placeholder="请选择文章类目" class="selector" v-if="catalogs.length>0" value-key="catalogid">
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
  import {mapActions,mapState,mapMutations} from 'vuex'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'editor',
    data() {
      return {
        title: '',
        catalogId: 1,
      }
    },
    computed:{
      ...mapState({
        catalogs: ({articleCenterModule}) => articleCenterModule.catalogs,
        selectedCatalogId: ({publishModule}) => publishModule.selectedCatalogId
      })
    },
    components: {
      mavonEditor
    },
    mounted() {
      this.catalogId=this.$route.query.catalogId;
      this.getCatalogs();
    },
    methods: {
      ...mapActions([
        'getCatalogs',
        'publish'
      ]),
      ...mapMutations(
        {setCurrentCatalogId:  'SET_CURRENT_CATALOGID'}
      ),
      save(value, render) {
        this.publish({
          title: this.title,
          catalogid: this.catalogId,
          content: value
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
