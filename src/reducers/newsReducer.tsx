import { createReducer } from "@reduxjs/toolkit";
import {
  getTopStories,
  searchResult,
  clearSearch,
  updateSearchHistory,
} from "../actions/newsAction";
import { historyLimit } from "../helpers/constants";
import { sliceIntoChunks } from "../helpers/functions";
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

const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTopStories.fulfilled, (state, { payload }) => {
    const filteredStories = payload.filter((item) => {
      return item.title !== "" && item.abstract !== "";
    });

    state.topStories = filteredStories;
  });

  builder.addCase(updateSearchHistory, (state, { payload }) => {
    state.searchHistory?.length >= historyLimit && state.searchHistory?.shift();

    if (!state.searchHistory?.includes(payload)) {
      state.searchHistory?.push(payload);
    }
  });

  builder.addCase(searchResult.fulfilled, (state, { payload }) => {
    const tempSearchResults: ISearchResults[] =
      payload?.response?.docs?.length > 6
        ? sliceIntoChunks(payload?.response?.docs, 6)
        : payload?.response?.docs;
    state.searchResults = tempSearchResults;
  });

  builder.addCase(clearSearch, (state) => {
    state.searchResults = [];
  });
});

export default newsReducer;
