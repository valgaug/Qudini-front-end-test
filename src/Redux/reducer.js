import { createSlice } from '@reduxjs/toolkit';
import { List } from 'immutable';

export const initialState = {
  customers: List.of(),
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers = state.customers.push(action.payload);
    },
  },
});

export const { addCustomer } = queueSlice.actions;

export default queueSlice.reducer;
