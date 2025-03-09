import { RootState } from "@redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const REPOSITORIES_SELECTOR = (state: RootState) => state.repositories;

export const REPOSITORIES_SELECTOR_COLLECTION = createSelector(
  REPOSITORIES_SELECTOR,
  (state) => state,
  {
    devModeChecks: { identityFunctionCheck: "never" },
  }
);
