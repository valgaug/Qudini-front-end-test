import queueReducer, { initialState, addCustomer, setFilterQuery, addAllCustomers } from './reducer';

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
  it('should handle addAllCustomers', () => {
    const newCustomers = [
      { id: 1, name: 'Robin Hood' },
      { id: 2, name: 'Valentin Gaugain' },
    ];

    const action = addAllCustomers(newCustomers);
    const state = queueReducer(initialState, action);

    expect(state.customers.length).toBe(2);
    expect(state.customers[0]).toEqual(newCustomers[0]);
    expect(state.customers[1]).toEqual(newCustomers[1]);
  });
  describe('should handle setFilterQuery by', () => {
    it('updating the filterQuery state', () => {
      const previousState = {
        ...initialState,
        filterQuery: '',
      };

      const newFilterQuery = 'John Doe';
      const nextState = queueReducer(previousState, setFilterQuery(newFilterQuery));

      expect(nextState.filterQuery).toBe(newFilterQuery);
    });

    it('handling empty filter query', () => {
      const previousState = {
        ...initialState,
        filterQuery: 'Some query',
      };

      const newFilterQuery = '';
      const nextState = queueReducer(previousState, setFilterQuery(newFilterQuery));

      expect(nextState.filterQuery).toBe(newFilterQuery);
    });
  });
});
