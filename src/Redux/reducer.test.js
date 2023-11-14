import queueReducer, { initialState, addCustomer } from './reducer';

describe('the queue reducer', () => {
  it('should have the following initialState', () => {
    expect(initialState).toHaveProperty('customers');
    expect(initialState.customers).toHaveLength(0);
  });

  it('should return the initialState on the default case', () => {
    const action = { type: 'unknown' };
    const state = queueReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should handle addCustomer', () => {
    const newCustomer = { id: 1, name: 'John Doe' };
    const action = addCustomer(newCustomer);
    const state = queueReducer(initialState, action);
    expect(state.customers.length).toBe(1);
    expect(state.customers[0]).toEqual(newCustomer);
  });
});
