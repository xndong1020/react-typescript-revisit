### Section 4: Redux

```ts
yarn add @types/react-redux axios react-redux redux redux-thunk
```

A function component to start with

```ts
import React, { useState } from "react";
import { Button } from "@material-ui/core";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    if (val && val.trim()) {
      SetSearchTerm(val.trim());
    }
  };
  return (
    <form>
      <input value={searchTerm} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={() => {}}>
        Search Package
      </Button>
    </form>
  );
};

export default PackageSearch;
```

#### Step 01: Create our first reducer

reducers/repositoryReducer.ts

```ts
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
    default:
      return state;
  }
};
```

#### Step 02: export our reducer(s)

reducers/index.ts

```ts
export * from "./repositoryReducer";
```

#### Step 03: Create redux store object

store/configureStore.ts

```ts
import { createStore, combineReducers } from "redux";
import * as reducers from "../reducers/";

const combinedReducers = combineReducers(reducers);
// to create a Redux store object, then export
export const store = createStore(combinedReducers);
```

#### Step 04: Import store object from root element, then wrap root element

/index.ts

```ts
import React from "react";
import ReactDOM from "react-dom";
import PackageSearch from "./components/PackageSearch";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <PackageSearch />
  </Provider>,
  document.querySelector("#root")
);
```

Note: from step 01 - 04 are setting up the redux store.

#### Step 05: Create our first ActionTypes Enum

actions/repository/actionTypes.ts

```ts
export enum ActionTypes {
  FETCH_REPOSITORY = "FETCH_REPOSITORY",
  FETCH_REPOSITORY_SUCCESS = "FETCH_REPOSITORY_SUCCESS",
  FETCH_REPOSITORY_FAIL = "FETCH_REPOSITORY_FAIL",
}
```

actions/repository/actionCreator.ts

#### Step 06: Create our first action creator (functions)

```ts
import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes";

export const fetchRepositoryAsync = (searchTerm: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.FETCH_REPOSITORY });
  };
};
```

#### Step 07: Add corresponding logic in repositoryReducer

reducers/repositoryReducer.ts

```ts
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
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
```

#### Step 08: Hook up action creator in `PageSearch` component

```ts
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { fetchRepositoryAsync } from "../actions/repository/actionCreator";

const PackageSearch = () => {
  const [searchTerm, SetSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchRepositoryAsync(searchTerm));
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    if (val && val.trim()) {
      SetSearchTerm(val.trim());
    }
  };
  return (
    <form>
      <input value={searchTerm} onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search Package
      </Button>
    </form>
  );
};

export default PackageSearch;
```

Now if you search anything, you will get an error like below:

![redux thunk missing error](./docs/img/01.png)

This is because you haven't set up redux-thunk middleware yet.

#### Step 09: Set up redux-thunk middleware

store/configureStore.ts

```ts
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import * as reducers from "../reducers/";

const combinedReducers = combineReducers(reducers);
// to create a Redux store object, then export
export const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));
```

Now the redux is working!!!!

