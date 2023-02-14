import { createAsyncThunk } from "@reduxjs/toolkit";
import CommentsController from "../controllers/CommentsController";

export const actionTypes = {
  GETCOMMENTS: "comments/GETCOMMENTS",
};

export const getComments = createAsyncThunk(
  actionTypes.GETCOMMENTS,
  async () => {
    try {
      const response = await CommentsController.fetchComments();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
