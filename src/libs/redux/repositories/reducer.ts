import { createReducer } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IReducerState } from "../../types/global.type";
import { REQUEST_USER_REPO } from "./action";

export type IRepositoriesState = {
  user: IReducerState<unknown[] | []>;
};

const commonState = {
  pending: false,
  success: false,
  error: null,
};

const initialState: IRepositoriesState = {
  user: { ...commonState, data: [], total: 0 },
};

export const REPOSITORIES_REDUCER = createReducer(initialState, (builder) => {
  builder
    .addCase(REQUEST_USER_REPO.pending, (state) => {
      state.user.pending = true;
      state.user.success = false;
      state.user.error = null;
    })
    .addCase(REQUEST_USER_REPO.fulfilled, (state, { payload }) => {
      state.user.pending = false;
      state.user.success = true;
      state.user.data = payload.data;
      state.user.total = payload.total;
    })
    .addCase(REQUEST_USER_REPO.rejected, (state, { payload }) => {
      state.user.pending = false;
      state.user.error = payload as AxiosError;
    });
});
