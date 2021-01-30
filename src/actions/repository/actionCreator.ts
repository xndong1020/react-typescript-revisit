import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";

export const fetchRepositoryAsync = (searchTerm: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.FETCH_REPOSITORY });
  };
};
