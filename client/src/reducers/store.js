// file: store.ts
import { configureStore } from "@reduxjs/toolkit";
import togglingReducers from "./togglingReducers";


const reducer = {
 toggler: togglingReducers,
};

const store = configureStore({
  reducer,
  devTools: "production",
});

export default store;
