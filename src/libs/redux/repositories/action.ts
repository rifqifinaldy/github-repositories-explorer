import { API } from "@config/api-collection.config";
import { REQUEST } from "@config/axios.config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const REQUEST_USER_REPO = createAsyncThunk(
  "repo/user",
  async (_, { rejectWithValue }) => {
    try {
      const response = await REQUEST.get(API.GITHUB.USER("rifqifinaldy"));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
