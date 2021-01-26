import { createStore, combineReducers, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';
import { repositoryReducer } from '../reducers'

const combined = combineReducers({
  repository: repositoryReducer
})
export const store = createStore(combined, applyMiddleware(thunk))
