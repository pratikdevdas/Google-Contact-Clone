// file: store.ts
import { configureStore } from "@reduxjs/toolkit";
import contactReducers from "./contactReducers";
import togglingReducers from "./togglingReducers";


const reducer = {
 toggler: togglingReducers,
 contact: contactReducers
};

const store = configureStore({
  reducer,
  devTools: "production",
});

export default store;
