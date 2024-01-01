const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

//so we just make a createSlice and define a function and then createSlice create a reducer and action both like case:"add1" we dont need to write this
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
