"use client";

import { IRepoPayload } from "@data-type/repositories.type";
import { useAppDispatch, useAppSelector } from "@redux/redux.hook";
import {
  REPOSITORIES_SELECTOR_COLLECTION,
  REQUEST_FIND_USER,
  REQUEST_GET_MORE_USER_REPO,
  REQUEST_GET_USER_REPO,
  REQUEST_RESET_FIND_USER,
  REQUEST_RESET_USER_REPO,
} from "@redux/repositories";
import { useCallback, useState } from "react";

const useRepositories = () => {
  const state = useAppSelector(REPOSITORIES_SELECTOR_COLLECTION);
  const dispatch = useAppDispatch();

  const [repoParams, setRepoParams] = useState<IRepoPayload>({
    query: "",
    per_page: 5,
  });

  const searchUser = useCallback(
    (user: string) => {
      dispatch(REQUEST_FIND_USER(user));
    },
    [dispatch]
  );

  const getUserRepo = useCallback(
    (payload: IRepoPayload) => {
      dispatch(REQUEST_GET_USER_REPO(payload));
    },
    [dispatch]
  );

  const getMoreUserRepo = useCallback(
    (payload: IRepoPayload) => {
      dispatch(
        REQUEST_GET_MORE_USER_REPO({
          ...payload,
          per_page: (repoParams.per_page as number) + 5,
        })
      ).then((res) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          setRepoParams((prev) => ({
            ...prev,
            per_page: (prev.per_page as number) + 5,
          }));
        }
      });
    },
    [dispatch, repoParams.per_page]
  );

  const resetUser = useCallback(() => {
    dispatch(REQUEST_RESET_FIND_USER());
  }, [dispatch]);

  const resetRepo = useCallback(() => {
    dispatch(REQUEST_RESET_USER_REPO());
  }, [dispatch]);

  return {
    ...state,
    searchUser,
    resetUser,
    getUserRepo,
    resetRepo,
    setRepoParams,
    getMoreUserRepo,
    repoParams,
  };
};

export default useRepositories;
