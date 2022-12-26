import { createReducer } from "@reduxjs/toolkit";
import { getTopStories } from "../actions/newsAction";
import { INews } from "../helpers/NewsTypes";

const initialState: INews = {
  data: [],
  section: "",
  title: "",
  abstract: "",
  byline: "",
  url: "",
};

const newsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTopStories.fulfilled, (state, action) => {
    state.data = action.payload;
    console.log(action.payload);
    state.section = action.payload?.section;
    state.title = action.payload?.title;
    console.log("check", action.payload.results.title);
    state.abstract = action.payload?.abstract;
    state.byline = action.payload?.byline;
    state.url = action.payload?.url;
  });
});

export default newsReducer;
