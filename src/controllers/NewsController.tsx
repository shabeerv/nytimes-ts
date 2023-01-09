import newsClient from "./newsClient";

class NewsController {
  topStoriesPath: string;
  searchArticlePath: string;
  apiKey: string | undefined;

  constructor() {
    this.topStoriesPath = "/svc/topstories/v2/";
    this.searchArticlePath = "/svc/search/v2/articlesearch.json"
    this.apiKey = process.env.REACT_APP_NYTIMES_API_KEY;
  }

  fetchTopStories = async (section: string) =>
    newsClient.get(
      `${this.topStoriesPath}/${section}.json?api-key=${this.apiKey}`
    );

    searchArticle = async (keyword: string) => 
    newsClient.get(`${this.searchArticlePath}?q=${keyword}&api-key=${this.apiKey}`)
}

export default new NewsController();
