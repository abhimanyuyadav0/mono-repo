import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  allUsers: [],
  loadingUser: false,
  isEdit: false,
  editUserId: null,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.allUsers = action.payload;
    },
    userLoading(state, action) {
      state.loadingUser = action.payload;
    },
    fetchUsersSuccess(state, action) {
      state.loadingUser = false;
      state.allUsers = action.payload;
    },
    fetchUsersFailure(state, action) {
      state.loadingUser = false;
    },
    setUserEdit(state, action) {
      state.isEdit = action.payload;
    },
    setEditUserId(state, action) {
      state.editUserId = action.payload;
    },
  },
});

export const {
  getAllUser,
  userLoading,
  fetchUsersSuccess,
  fetchUsersFailure,
  setUserEdit,
  setEditUserId,
} = usersSlice.actions;

export default usersSlice.reducer;
