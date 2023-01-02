import { createReducer } from "@reduxjs/toolkit";
import {
  getTopStories,
  searchResult,
  clearSearch,
  updateSearchHistory,
} from "../actions/newsAction";
import { INews, ISearchResults } from "../helpers/models";

export interface IInitialState {
  topStories: INews[];
  searchResults: ISearchResults[];
  searchHistory: string[];
}

const initialState: IInitialState = {
  topStories: [],
  searchResults: [],
  searchHistory: [],
};

export const sliceIntoChunks = (arr: any, chunkSize: any) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};

const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTopStories.fulfilled, (state, action) => {
    state.topStories = action.payload.results;
  });

  builder.addCase(updateSearchHistory, (state, action) => {
    if (state.searchHistory.length >= 5) {
      state.searchHistory.shift();
    }
    if (!state.searchHistory.includes(action.payload)) {
      state.searchHistory.push(action.payload);
    }
  });

  builder.addCase(searchResult.fulfilled, (state, action) => {
    const tempSearchResults =
      action.payload?.response?.docs?.length > 6
        ? sliceIntoChunks(action.payload?.response?.docs, 6)
        : action.payload?.response?.docs;
    state.searchResults = tempSearchResults;
  });

  builder.addCase(clearSearch, (state) => {
    state.searchResults = [];
  });
});

export default newsReducer;
