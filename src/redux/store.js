import drawerSlice from "./drawerSlice";
import salesSlice from "./salesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    drawer: drawerSlice,
    sale: salesSlice,
  },
});

export default store;
