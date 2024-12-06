import { all, fork } from "redux-saga/effects";
import { Login } from "../Component/Login/saga";

export default function* rootSaga() {
  yield all([
    // add other watchers to the array
    fork(Login),
  
  ]);
}
