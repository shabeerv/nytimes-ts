import { RootState } from "../store";

export const topStoriesSelector = (state: RootState) => state.news.topStories;

export const searchResultSelector = (state: RootState) =>
  state.news.searchResults;

export const searchHistorySelector = (state: RootState) =>
  state.news.searchHistory;
