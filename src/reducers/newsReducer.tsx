import { createReducer } from "@reduxjs/toolkit";
import { getTopStories } from "../actions/newsAction";
import { INews } from "../helpers/models";

export interface IInitialState {
  topStories: INews[];
}

const initialState: IInitialState = {
  topStories: [],
};

const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTopStories.fulfilled, (state, action) => {
    state.topStories = action.payload.results;
  });
});

export default newsReducer;
