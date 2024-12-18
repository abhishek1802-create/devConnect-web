import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import feedSlice from "../slice/feedSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
  },
});

export default appStore;
