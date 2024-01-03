import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import contactSlice from "./contactSlice";

const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  }
});

export default store;