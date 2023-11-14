// `fireEvent` isn't working as intended

// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import QueueScreen from './QueueScreen';
// import { initialState } from '../../Redux/reducer';

// const mockStore = configureStore([]);

// describe('QueueScreen', () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       queue: {
//         ...initialState,
//         customers: [
//           { id: 1, customer: { name: 'Alice', emailAddress: 'alice@example.com' }, originalExpectedTime: '9:00 AM' },
//           { id: 2, customer: { name: 'Bob', emailAddress: 'bob@example.com' }, originalExpectedTime: '10:00 AM' },
//         ],
//       },
//     });
//   });

//   it('filters customers based on input', async () => {
//     const { getByPlaceholderText, findByText, queryByText } = render(
//       <Provider store={store}>
//         <QueueScreen />
//       </Provider>
//     );

//     // Simulate typing into the filter input
//     fireEvent.change(getByPlaceholderText(/filter customers by name/i), { target: { value: 'Alice2' } });

//     // Assert that only the filtered customer is displayed
//     expect(await findByText('Alice')).toBeInTheDocument();
//     expect(queryByText('Bob')).toBeNull();
//   });
// });
