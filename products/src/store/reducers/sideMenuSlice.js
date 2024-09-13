import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'open', // Can be 'open', 'iconOnly', or 'closed'
};

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.mode = 'open';
    },
    setIconOnly: (state) => {
      state.mode = 'iconOnly';
    },
    setClosed: (state) => {
      state.mode = 'closed';
    },
    toggleMenu: (state) => {
      state.mode = state.mode === 'open' ? 'iconOnly' : state.mode === 'iconOnly' ? 'closed' : 'open';
    },
  },
});

export const { setOpen, setIconOnly, setClosed, toggleMenu } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
