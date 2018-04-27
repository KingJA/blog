import AxiosClient from '../../static/js/http'

export default {

  getArticles() {
    return AxiosClient.post("/api/article/all");
  },

  getArticleDetail(articleId) {
    return AxiosClient.get("/api/article/get?id=" + articleId);
  }
}
