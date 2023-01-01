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

export interface ISearchResults {
  abstract: string;
  byline: {
    orginal: string;
  };
  headline: {
    main: string;
  };
  section_name: string;
  multimedia: Array<{
    url: string;
  }>;
  pub_date: string;
  _id: string;
}

export interface IComments {
  body: string;
  id: number;
  user: {
    id: number;
    username: string;
  };
}
