import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const doesExist = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (doesExist) return state;

      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
      // console.log(current(state));
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
