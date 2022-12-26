import newsClient from "./newsClient";

class NewsController {
  topStoriesPath: string;
  apiKey: string | undefined;

  constructor() {
    this.topStoriesPath = "/svc/topstories/v2/";
    this.apiKey = process.env.REACT_APP_NYTIMES_API_KEY;
  }

  fetchTopStories = async (section: string) =>
    newsClient.get(
      `${this.topStoriesPath}/${section}.json?api-key=${this.apiKey}`
    );
}

export default new NewsController();
