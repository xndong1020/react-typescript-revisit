import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { myLoggerMiddleware } from "../middlewares/myLogger";
import * as reducers from "../reducers/";

const combinedReducers = combineReducers(reducers);

export type RootState = ReturnType<typeof combinedReducers>;

// to create a Redux store object, then export
export const store = createStore(
  combinedReducers,
  applyMiddleware(myLoggerMiddleware, ReduxThunk)
);
