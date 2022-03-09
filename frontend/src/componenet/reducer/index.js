import loginReducer from "./login/index";
import { combineReducers, createStore } from "redux";
import videoReducer from "./video/index";

// create main reducer
const reducers = combineReducers({ loginReducer, videoReducer });

//create store
const store = createStore(reducers);

export default store;