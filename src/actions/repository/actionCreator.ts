import { Dispatch } from "redux";
import { RepositoryAction } from "../../reducers/repositoryReducer";
import axios from "../../utils/axios";
import { ActionTypes } from "./actionTypes";

export const fetchRepositoryAsync = (searchTerm: string) => {
  return async (dispatch: Dispatch<RepositoryAction>) => {
    // settings `isLoading` to true
    dispatch({ type: ActionTypes.FETCH_REPOSITORY });
    try {
      const res = await axios.get(`search`, {
        params: {
          text: searchTerm,
        },
      });
      if (res.data.objects) {
        const names = res.data.objects.map(
          (object: any) => object.package.name
        );
        dispatch({
          type: ActionTypes.FETCH_REPOSITORY_SUCCESS,
          data: names,
        });
      }
    } catch (err) {
      dispatch({
        type: ActionTypes.FETCH_REPOSITORY_FAIL,
        error: err.message,
      });
    }
  };
};
