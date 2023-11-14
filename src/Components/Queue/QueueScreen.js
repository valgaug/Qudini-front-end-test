import React, { useEffect } from 'react';
import { fetchQueueData } from '../../mockApi';
import Customer from '../Customer/Customer';
import { useDispatch, useSelector } from 'react-redux';
import { addAllCustomers } from '../../Redux/reducer';

const QueueScreen = () => {
  const { customers } = useSelector((state) => state.queue);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchQueueData();
        const json = await response.json();
        const customersToday = json.queueData.queue.customersToday;
        dispatch(addAllCustomers(customersToday));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {customers !== undefined &&
        customers.map((customer) => (
          <Customer
            key={customer.id}
            email={customer.customer.emailAddress}
            name={customer.customer.name}
            expectedTime={customer.originalExpectedTime}
            // I assumed we want to display the 'originalExpectedTime'
            // and not 'expectedTime' which is the same for everyone
          />
        ))}
    </div>
  );
};

export default QueueScreen;
