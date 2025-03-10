"use client";

import { useAppDispatch, useAppSelector } from "@redux/redux.hook";
import {
  REPOSITORIES_SELECTOR_COLLECTION,
  REQUEST_RESET_USER_REPO,
  REQUEST_USER_REPO,
} from "@redux/repositories";
import { useCallback } from "react";

const useRepositories = () => {
  const state = useAppSelector(REPOSITORIES_SELECTOR_COLLECTION);
  const dispatch = useAppDispatch();

  const getGithubUser = useCallback(
    (user: string) => {
      dispatch(REQUEST_USER_REPO(user));
    },
    [dispatch]
  );

  const resetUser = useCallback(() => {
    dispatch(REQUEST_RESET_USER_REPO());
  }, [dispatch]);

  return { ...state, getGithubUser, resetUser };
};

export default useRepositories;
