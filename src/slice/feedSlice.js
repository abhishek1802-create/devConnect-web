import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feedData: [],
  },
  reducers: {
    addFeed: (state, action) => {
      state.feedData = action.payload;
    },
    removeFeed: (state) => {
      state.feedData = [];
    },
  },
});

export default feedSlice.reducer;

export const { addFeed, removeFeed } = feedSlice.actions;
