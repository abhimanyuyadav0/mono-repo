import { getAllUsers } from "../../api/services/user";
import { getAllUser, userLoading } from "../reducers/userSlice";
import { toast } from "react-toastify";

export const GetUsersAPI = () => async (dispatch) => {
  try {
    dispatch(userLoading(true));
    const response = await getAllUsers();
    if (response) {
      dispatch(getAllUser(response.data));
      dispatch(userLoading(false));
    }
  } catch (error) {
    console.error("Error during login:", error);
    toast.error(error.error);
  }
};
