import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import NewsController from "../controllers/NewsController";
import { INews } from "../helpers/models";

export const actionTypes = {
  GETTOPSTORIES: "news/GETTOPSTORIES",
  SEARCHARTICLE: "news/SEARCHARTICLE",
  SEARCHHISTORY: "news/SEARCHHISTORY",
  CLEARSEARCH: "news/CLEARSEARCH",
};

type NewsProps = string;

export const getTopStories = createAsyncThunk(
  actionTypes.GETTOPSTORIES,
  async (section: NewsProps, { rejectWithValue }) => {
    try {
      const response = await NewsController.fetchTopStories(`${section}`);
      return response.data.results as Array<INews>;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const clearSearch = createAction(actionTypes.CLEARSEARCH);

export const searchResult = createAsyncThunk(
  actionTypes.SEARCHARTICLE,
  async (keyword: string, { rejectWithValue }) => {
    try {
      const response = await NewsController.searchArticle(`${keyword}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateSearchHistory = createAction<string>(
  actionTypes.SEARCHHISTORY
);
