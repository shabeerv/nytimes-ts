import { RootState } from "../store";

export const topStoriesSelector = (state: RootState) => state.news.topStories;
