import { Dispatch } from "redux";
import { RepositoryAction } from "../../reducers/repositoryReducer";
import { FetchRepositoryResponse } from "../../schemas/FetchRepositoryResponse";
import axios from "../../utils/axios";
import { ActionTypes } from "./actionTypes";

export const fetchRepositoryAsync = (searchTerm: string) => {
  return async (dispatch: Dispatch<RepositoryAction>) => {
    // set `isLoading` to true
    dispatch({ type: ActionTypes.FETCH_REPOSITORY });
    try {
      const res = await axios.get<FetchRepositoryResponse>(`search`, {
        params: {
          text: searchTerm,
        },
      });
      const names = res.data.objects.map((object) => object.package.name);
      dispatch({
        type: ActionTypes.FETCH_REPOSITORY_SUCCESS,
        data: names,
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.FETCH_REPOSITORY_FAIL,
        error: err.message,
      });
    }
  };
};
