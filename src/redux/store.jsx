import { applyMiddleware, combineReducers,  createStore, compose  } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "./searchUser/searchUserReducer";
import userInfoReducer from "./userInfo/userInfoReducer";


const rootReducer = combineReducers({
  users: usersReducer,
  userInfo: userInfoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk, logger)));

export default store;