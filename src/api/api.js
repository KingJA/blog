import AxiosClient from '../../static/js/http'

export default {

  getArticles() {
    return AxiosClient.post("/api/article/all");
  }
}
