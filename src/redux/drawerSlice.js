import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    open: false,
  },
  reducers: {
    toggleDrawer: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { toggleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
