import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import REDUX_MIDDLEWARE from "./redux.middleware";
import { REPOSITORIES_REDUCER } from "./repositories";

export const store = configureStore({
  reducer: {
    // Master Data
    repositories: REPOSITORIES_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(REDUX_MIDDLEWARE),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
