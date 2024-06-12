import drawerSlice from "./drawerSlice";
import salesSlice from "./salesSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  drawer: drawerSlice,
  sale: salesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
