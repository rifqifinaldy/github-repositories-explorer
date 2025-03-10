import { createReducer } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  REQUEST_FIND_USER,
  REQUEST_GET_MORE_USER_REPO,
  REQUEST_GET_USER_REPO,
  REQUEST_RESET_FIND_USER,
  REQUEST_RESET_USER_REPO,
} from "./action";
import { IReducerState } from "@data-type/global.type";
import { IGitHubRepository, IGitHubUser } from "@data-type/repositories.type";

export type IRepositoriesState = {
  user: IReducerState<IGitHubUser | null>;
  repos: IReducerState<IGitHubRepository[] | null>;
  loadMoreRepos: IReducerState<null>;
};

const commonState = {
  pending: false,
  success: false,
  error: null,
};

const initialState: IRepositoriesState = {
  user: { ...commonState, data: null, total: 0 },
  repos: { ...commonState, data: null, total: 0 },
  loadMoreRepos: { ...commonState, data: null, total: 0 },
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

    // GET USER REPO
    .addCase(REQUEST_GET_USER_REPO.pending, (state) => {
      state.repos.pending = true;
      state.repos.success = false;
      state.repos.error = null;
    })
    .addCase(REQUEST_GET_USER_REPO.fulfilled, (state, { payload }) => {
      state.repos.pending = false;
      state.repos.success = true;
      state.repos.data = payload;
      state.repos.total = payload.length;
    })
    .addCase(REQUEST_GET_USER_REPO.rejected, (state, { payload }) => {
      state.repos.pending = false;
      state.repos.success = false;
      state.repos.data = null;
      state.repos.error = payload as AxiosError;
    })

    // GET USER REPO
    .addCase(REQUEST_GET_MORE_USER_REPO.pending, (state) => {
      state.loadMoreRepos.pending = true;
      state.loadMoreRepos.success = false;
      state.repos.error = null;
    })
    .addCase(REQUEST_GET_MORE_USER_REPO.fulfilled, (state, { payload }) => {
      state.loadMoreRepos.pending = false;
      state.loadMoreRepos.success = true;
      const existingIds = new Set(state.repos.data?.map((repo) => repo.id));

      const filteredPayload = payload.filter(
        (repo: IGitHubRepository) => !existingIds.has(repo.id)
      );

      state.repos.data = [
        ...(Array.isArray(state.repos.data) ? state.repos.data : []),
        ...filteredPayload,
      ];

      state.repos.total = state.repos.total + filteredPayload.length;
    })
    .addCase(REQUEST_GET_MORE_USER_REPO.rejected, (state, { payload }) => {
      state.loadMoreRepos.pending = false;
      state.loadMoreRepos.success = false;
      state.repos.data = null;
      state.repos.error = payload as AxiosError;
    })

    // RESET STATE
    .addCase(REQUEST_RESET_USER_REPO, (state) => {
      state.repos = initialState.repos;
    })
    .addCase(REQUEST_RESET_FIND_USER, (state) => {
      state.user = initialState.user;
    });
});
