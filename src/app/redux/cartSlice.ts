"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
