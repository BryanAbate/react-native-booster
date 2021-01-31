import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'counter',
    initialState: {
      counter: 0
    },
    reducers: {
      increment: state => {
        state.counter += 1;
        return state;
      },
      decrement: state => {
        state.counter -= 1;
        return state;
      }
    }
});

export default homeSlice;