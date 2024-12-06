/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../Utils/history";
import Login from "../Component/Login/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const appReducer = combineReducers({
    router: connectRouter(history),
    Login
  });

  const rootReducer = (state, action) => {
    // if (action.type === "USER_LOGOUT") {
    //   return appReducer(undefined, action);
    // }
    return appReducer(state, action);
  };
  return rootReducer;
}
