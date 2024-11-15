import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
      // state.count += action.payload.count;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions;
// export const count = (state) => state.count; //this will help you to direct call this count in ui like this --> const counts = useSelector(count);

export default CounterSlice.reducer;
