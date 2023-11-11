import { createSlice } from '@reduxjs/toolkit';
import { List } from 'immutable';

const initialState = {
  customers: List.of(),
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    // Define reducers here. For example:
    // addCustomer: (state, action) => {
    //     state.customers = state.customers.push(action.payload);
    // },
    // You can add more reducers as needed
  },
});

// Export the automatically generated action creators
export const { addCustomer /*, other actions */ } = queueSlice.actions;

export default queueSlice.reducer;
