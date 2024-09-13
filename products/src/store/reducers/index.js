import { combineReducers } from "redux";
import sideMenuReducer from "./sideMenuSlice";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  auth: authReducer,
  users: userReducer,
  cart: cartReducer,
});


export default rootReducer;
