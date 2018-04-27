* [博客]路由框架
* reset,图标
* px2rem
* vue生命周期
* ref的使用ref="des",$refs.des
* axios发送post，但是服务器用对象接收不到 https://segmentfault.com/a/1190000013312233

* 通过router传递文章id，详情页再通过文章id获取详情
传参
this.$router.push({  name:'ArticleDetail',query: { id:  article.article_id }});
this.$router.push({  name:'ArticleDetail',params: { id:  article.article_id }});
接收参数
this.$route.query.id
this.$route.params.id
巴西名模吉赛尔·邦辰桌面壁纸 1280x80
高度填充剩余高度
    position absolute
    top 头部高度
    bottom 0
* [博客]font-awesome的使用
* [博客]Element的使用
* store.commit添加多个参数，用对象来传递
* vue Resource interpreted as Stylesheet but transferred with MIME type text/html 问题，是router 路径问题
* router延迟加载
{
    path: '/article',
    component: r => require.ensure([], () => r(require('@/components/Article/Article')), 'Article')
}
* vuex state和getter的区别，getter可以对数据进行一些处理，比如说过滤
