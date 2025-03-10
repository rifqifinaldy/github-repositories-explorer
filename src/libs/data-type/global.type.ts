import { AxiosError } from "axios";

export interface IReducerState<T> {
  data?: T;
  pending: boolean;
  success: boolean;
  error: null | AxiosError;
  total?: number;
}
