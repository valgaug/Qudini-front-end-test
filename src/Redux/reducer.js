import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  customers: [],
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    addAllCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
});

export const { addCustomer, addAllCustomers } = queueSlice.actions;

export default queueSlice.reducer;
