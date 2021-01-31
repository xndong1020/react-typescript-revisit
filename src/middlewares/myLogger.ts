import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";

// export const myLoggerMiddleware: Middleware = ({
//   dispatch,
//   getState,
// }: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
//   if (typeof action === "function") {
//     return action(dispatch);
//   }
//   return next(action);
// };

export function myLoggerMiddleware({ dispatch, getState }: MiddlewareAPI) {
  return function (next: Dispatch<AnyAction>) {
    return function (action: any) {
      if (typeof action === "function") {
        return action(dispatch);
      }
      return next(action);
    };
  };
}
