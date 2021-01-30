import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import * as reducers from "../reducers/";

const combinedReducers = combineReducers(reducers);

export type RootState = ReturnType<typeof combinedReducers>;

// to create a Redux store object, then export
export const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));
