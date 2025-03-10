"use client";

import { useAppDispatch, useAppSelector } from "@redux/redux.hook";
import {
  REPOSITORIES_SELECTOR_COLLECTION,
  REQUEST_FIND_USER,
  REQUEST_GET_USER_REPO,
  REQUEST_RESET_FIND_USER,
  REQUEST_RESET_USER_REPO,
} from "@redux/repositories";
import { useCallback } from "react";

const useRepositories = () => {
  const state = useAppSelector(REPOSITORIES_SELECTOR_COLLECTION);
  const dispatch = useAppDispatch();

  const searchUser = useCallback(
    (user: string) => {
      dispatch(REQUEST_FIND_USER(user));
    },
    [dispatch]
  );

  const getUserRepo = useCallback(
    (user: string) => {
      dispatch(REQUEST_GET_USER_REPO(user));
    },
    [dispatch]
  );

  const resetUser = useCallback(() => {
    dispatch(REQUEST_RESET_FIND_USER());
  }, [dispatch]);

  const resetRepo = useCallback(() => {
    dispatch(REQUEST_RESET_USER_REPO());
  }, [dispatch]);

  return { ...state, searchUser, resetUser, getUserRepo, resetRepo };
};

export default useRepositories;
