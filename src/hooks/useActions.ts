import { Action, bindActionCreators, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import * as actionCreators from "../actions/repository/actionCreator";

export function useActions<T>() {
  const dispatch = useDispatch<Dispatch<Action<T>>>();

  return bindActionCreators(actionCreators, dispatch);
}
