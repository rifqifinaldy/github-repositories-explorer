import { API } from "@config/api-collection.config";
import { REQUEST } from "@config/axios.config";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const REQUEST_FIND_USER = createAsyncThunk(
  "repo/find-user",
  async (user: string, { rejectWithValue }) => {
    try {
      const response = await REQUEST.get(API.GITHUB.USER(user));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const REQUEST_GET_USER_REPO = createAsyncThunk(
  "repo/get-user-repo",
  async (user: string, { rejectWithValue }) => {
    try {
      const response = await REQUEST.get(API.GITHUB.USER_REPO(user));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const REQUEST_RESET_FIND_USER = createAction("repo/reset-user");
export const REQUEST_RESET_USER_REPO = createAction("repo/reset-repo");
