import { ActionTypes } from "../actions/repository/actionTypes";

export interface RepositoryReducerState {
  data: string[];
  error: string | null;
  isLoading: boolean;
}

const initState: RepositoryReducerState = {
  data: [],
  error: null,
  isLoading: false,
};

export interface FetchRepository {
  type: ActionTypes.FETCH_REPOSITORY;
}

export interface FetchRepositorySuccess {
  type: ActionTypes.FETCH_REPOSITORY_SUCCESS;
  data: string[];
}

export interface FetchRepositoryFail {
  type: ActionTypes.FETCH_REPOSITORY_FAIL;
  error: string | null;
}

export type RepositoryAction =
  | FetchRepository
  | FetchRepositorySuccess
  | FetchRepositoryFail;

/* a reducer function must return a new state */
export const repositoryReducer = (
  state: RepositoryReducerState = initState,
  action: RepositoryAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOSITORY:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_REPOSITORY_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case ActionTypes.FETCH_REPOSITORY_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
