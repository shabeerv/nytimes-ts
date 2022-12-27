import { createAsyncThunk } from "@reduxjs/toolkit";
import NewsController from "../controllers/NewsController";

export const actionTypes = {
  GETTOPSTORIES: "news/GETTOPSTORIES",
};

type NewsProps = string;

export const getTopStories = createAsyncThunk(
  actionTypes.GETTOPSTORIES,
  async (section: NewsProps, { rejectWithValue }) => {
    try {
      const response = await NewsController.fetchTopStories(`${section}`);
      console.log("News: ", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
