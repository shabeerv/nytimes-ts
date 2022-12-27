import { RootState } from "../store";

export const getNews = (state: RootState) => state.news.topStories;
