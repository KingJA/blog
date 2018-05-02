import AxiosClient from '../../static/js/http'

export default {

  getArticles() {
    return AxiosClient.post("/api/visitor/article/all");
  },

  getArticleDetail(articleId) {
    return AxiosClient.get("/api/visitor/article/get?id=" + articleId);
  },
  login(account) {
    return AxiosClient.post("/api/login", account);
  },
  getCatalogs() {
    return AxiosClient.get("/api/admin/catalogs");
  },
  getArticlesByCatelogId(catalogId) {
    return AxiosClient.post("/api/admin/articles",{catalogId:catalogId});
  },
  deleteArticle(id) {
    return AxiosClient.post("/api/admin/delete",{id:id});
  },
  setPublishStatus(id) {
    return AxiosClient.post("/api/admin/published",{id:id});
  },
  publish(article) {
    return AxiosClient.post("/api/admin/add",article);
  }
}
