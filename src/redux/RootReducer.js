import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import VideosReducer from "./VideosReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  videos: VideosReducer,
});

export default RootReducer;
