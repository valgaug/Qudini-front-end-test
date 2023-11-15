import { initialState } from '../../Redux/reducer';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import QueueScreen from './QueueScreen';
import { fetchQueueData } from '../../mockApi';

jest.mock('../../mockApi');

const mockStore = configureStore([]);

describe('QueueScreen', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      queue: {
        ...initialState,
        customers: [
          { id: 1, customer: { name: 'Alice', emailAddress: 'alice@example.com' }, originalExpectedTime: '2017-01-18T18:19:01.000Z' },
          { id: 2, customer: { name: 'Bob', emailAddress: 'bob@example.com' }, originalExpectedTime: '2017-09-27T13:04:15.000+01:00' },
        ],
      },
    });
  });

  fetchQueueData.mockResolvedValue({
    json: () => Promise.resolve({ queueData: { queue: { customersToday: [] } } }),
  });

  jest.useFakeTimers();

  afterEach(() => {
    jest.useRealTimers();
  });

  //   it('filters customers based on input', async () => {
  //     const { getByPlaceholderText, findByText, queryByText } = render(
  //       <Provider store={store}>
  //         <QueueScreen />
  //       </Provider>
  //     );

  //     // Simulate typing into the filter input
  //     fireEvent.change(getByPlaceholderText(/search/i), { target: { value: 'Alice2' } });

  //     // Assert that only the filtered customer is displayed
  //     expect(await findByText('Alice')).toBeInTheDocument();
  //     expect(queryByText('Bob')).toBeNull();
  //   });

  it('polls for new data every 30 seconds', async () => {
    render(
      <Provider store={store}>
        <QueueScreen />
      </Provider>
    );

    expect(fetchQueueData).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(30000);
    expect(fetchQueueData).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(30000);
    expect(fetchQueueData).toHaveBeenCalledTimes(3);
  });
});
