import { createReducer } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { REQUEST_RESET_USER_REPO, REQUEST_USER_REPO } from "./action";
import { IReducerState } from "@data-type/global.type";
import { IGitHubUser } from "@data-type/repositories.type";

export type IRepositoriesState = {
  user: IReducerState<IGitHubUser | null>;
};

const commonState = {
  pending: false,
  success: false,
  error: null,
};

const initialState: IRepositoriesState = {
  user: { ...commonState, data: null, total: 0 },
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
      state.user.data = payload;
    })
    .addCase(REQUEST_USER_REPO.rejected, (state, { payload }) => {
      state.user.pending = false;
      state.user.success = false;
      state.user.data = null;
      state.user.error = payload as AxiosError;
    })
    .addCase(REQUEST_RESET_USER_REPO, (state) => {
      state.user = initialState.user;
    });
});
