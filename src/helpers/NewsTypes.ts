export interface INews {
  section: string;
  title: string;
  abstract: string;
  byline: string;
  published_date: string;
  multimedia: Array<{
    url: string;
  }>;
  url: string;
  uri: string;
}
