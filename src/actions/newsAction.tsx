import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import NewsController from "../controllers/NewsController";

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
      // console.log("News: ", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const clearSearch = createAction(actionTypes.CLEARSEARCH);

export const searchResult = createAsyncThunk(actionTypes.SEARCHARTICLE, async(keyword: string, {rejectWithValue}) => {
  try {
    const response = await NewsController.searchArticle(`${keyword}`)
    console.log(response)
    return response.data
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const addSearchHistory = createAsyncThunk(actionTypes.SEARCHHISTORY, async (params: string, { rejectWithValue }) => {
  return params
})

// export const addSearchHistory = createAction(actionTypes.SEARCHHISTORY, (text: string) => {
//   return {
//     payload: {
//       text,
//     },
//   }
// })
