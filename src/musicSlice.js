import { createSlice } from "@reduxjs/toolkit";
export const musicSlice = createSlice({
  name: "music",
  initialState: {
    isOpenWaiting: false,
    isOpenMatchfound: false,
  },
  reducers: {
    openMusicWaiting: (state) => {
      state.isOpenWaiting = true;
    },
    openMusicMatchfound: (state) => {
      state.isOpenMatchfound = true;
    },
    initStateWaiting : (state) => {
      state.isOpenWaiting = false;
    },
    initStateMatchfound : (state) => {
      state.isOpenMatchfound = false;
    },
  },
});
