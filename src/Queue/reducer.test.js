import queueReducer, { initialState, addCustomer } from './reducer';

describe('the queue reducer', () => {
  it('should have the following initialState', () => {
    expect(initialState).toHaveProperty('customers');
    expect(initialState.customers).toHaveProperty('size', 0);
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
    expect(state.customers.size).toBe(1);
    expect(state.customers.get(0)).toEqual(newCustomer);
  });
});
