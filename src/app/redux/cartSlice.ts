"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/product";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((item: IProduct) => item.id !== action.payload);
    },
    removeAll: (state) => {
      return (state = []);
    },
    removeOne: (state, action: PayloadAction<number>) => {
      state.splice(
        state.findIndex((item: IProduct) => item.id === action.payload),
        1
      );
    },
  },
});

export const { add, remove, removeAll, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
