import { login_user } from "../../api/services/user";
import { login, logout, setAuthToken } from "../reducers/authSlice";
import { toast } from "react-toastify";

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await login_user(userData);
    if (response) {
      dispatch(login(response._doc));
      dispatch(setAuthToken(response.token));
    } else {
      toast.error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return logout();
};
