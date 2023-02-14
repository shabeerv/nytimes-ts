import { createReducer } from "@reduxjs/toolkit";
import { getComments } from "../actions/commentsAction";
import { IComments } from "../helpers/models";

export interface IInitialState {
  comments: IComments[];
}

const initialState: IInitialState = {
  comments: [],
};

const commentsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getComments.fulfilled, (state, { payload }) => {
    state.comments = payload?.comments;
  });
});

export default commentsReducer;
