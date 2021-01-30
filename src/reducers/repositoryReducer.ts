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

/* a reducer function must return a new state */
export const repositoryReducer = (
  state: RepositoryReducerState = initState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOSITORY:
      console.log("repo reducer", action);
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
