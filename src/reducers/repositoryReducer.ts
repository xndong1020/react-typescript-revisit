interface RepositoryReducerProps {
  data: any[];
  error: any[];
  loading: boolean;
}

interface ActionObj {
  actionType: string;
  payload? : any;
}

export const repositoryReducer = (state: RepositoryReducerProps = {data: [], error: [], loading: false}, action: ActionObj) => {
  console.log('aaa', action)
  return state;
}

  