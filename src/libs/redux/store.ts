import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import REDUX_MIDDLEWARE from "./redux.middleware";
import { REPOSITORIES_REDUCER } from "./repositories";

export const makeStore = () => {
  return configureStore({
    reducer: {
      repositories: REPOSITORIES_REDUCER,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(REDUX_MIDDLEWARE),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
