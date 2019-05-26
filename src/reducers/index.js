import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//Reducers
import AuthReducer from "./AuthReducer";
import FirebaseReducer from "./FirebaseReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  firebase: FirebaseReducer,
  router: routerReducer
});

export default rootReducer;
