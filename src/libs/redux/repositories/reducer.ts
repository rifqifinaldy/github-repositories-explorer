import { createReducer } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { REQUEST_FIND_USER, REQUEST_RESET_FIND_USER } from "./action";
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
    .addCase(REQUEST_FIND_USER.pending, (state) => {
      state.user.pending = true;
      state.user.success = false;
      state.user.error = null;
    })
    .addCase(REQUEST_FIND_USER.fulfilled, (state, { payload }) => {
      state.user.pending = false;
      state.user.success = true;
      state.user.data = payload;
    })
    .addCase(REQUEST_FIND_USER.rejected, (state, { payload }) => {
      state.user.pending = false;
      state.user.success = false;
      state.user.data = null;
      state.user.error = payload as AxiosError;
    })
    .addCase(REQUEST_RESET_FIND_USER, (state) => {
      state.user = initialState.user;
    });
});
