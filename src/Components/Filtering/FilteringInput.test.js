import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import FilterInput from './FilterInput';
import { setFilterQuery } from '../../Redux/reducer';

const mockStore = configureStore([]);

describe('FilterInput', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      customers: [],
      filterQuery: '',
    });
    store.dispatch = jest.fn();
  });

  test('renders input element', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <FilterInput />
      </Provider>
    );

    expect(getByPlaceholderText(/filter customers by name/i)).toBeInTheDocument();
  });

  test('dispatches setFilterQuery action on input change', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <FilterInput />
      </Provider>
    );

    const input = getByPlaceholderText(/filter customers by name/i);
    fireEvent.change(input, { target: { value: 'Valentin' } });

    expect(store.dispatch).toHaveBeenCalledWith(setFilterQuery('Valentin'));
  });
});
