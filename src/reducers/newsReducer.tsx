import { createReducer } from "@reduxjs/toolkit";
import { getTopStories, addSearchHistory, searchResult, clearSearch } from "../actions/newsAction";
import { INews, ISearchResults } from "../helpers/models";

export interface IInitialState {
  topStories: INews[];
  searchResult: ISearchResults[];
  searchHistory: string[];
}

const initialState: IInitialState = {
  topStories: [],
  searchResult: [],
  searchHistory: []
};

export const sliceIntoChunks = (arr: any, chunkSize: any) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
  }
  return result;
}

const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTopStories.fulfilled, (state, action) => {
    state.topStories = action.payload.results;
  });
  builder.addCase(addSearchHistory.fulfilled, (state, action) => {
    state.searchHistory = [...state.searchHistory, action.payload]
    if (state.searchHistory.length > 5) {
        state.searchHistory.shift()
    }
    console.log('from reducer: ', state.searchHistory)
  })
  builder.addCase(searchResult.fulfilled, (state, action) => {
    const tempSearchResults = action.payload?.data?.response?.docs?.length > 6
    ? sliceIntoChunks(action.payload?.response?.docs, 6) : action.payload?.response?.docs
  state.searchResult = tempSearchResults;
    console.log(state.searchResult)
  })
  builder.addCase(clearSearch, (state) => {
    state.searchResult = []
  })
});


export default newsReducer;
