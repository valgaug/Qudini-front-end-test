import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  customers: [],
  filterQuery: '',
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
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
});

export const { addCustomer, addAllCustomers, setFilterQuery } = queueSlice.actions;

export default queueSlice.reducer;
