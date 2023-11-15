import React, { useEffect } from 'react';
import { fetchQueueData } from '../../mockApi';
import Customer from '../Customer/Customer';
import { useDispatch, useSelector } from 'react-redux';
import { addAllCustomers } from '../../Redux/reducer';
import Queue from '../../Layouts/Queue';

const QueueScreen = () => {
  const { customers, filterQuery } = useSelector((state) => state.queue);
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

    const intervalId = setInterval(fetchData, 30000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const filteredCustomers = customers.filter((customer) => customer.customer.name.toLowerCase().includes(filterQuery.toLowerCase()));

  return (
    <Queue>
      {filteredCustomers !== undefined &&
        filteredCustomers.map((customer) => (
          <Customer
            key={customer.id}
            email={customer.customer.emailAddress}
            name={customer.customer.name}
            expectedTime={customer.originalExpectedTime}
          />
        ))}
    </Queue>
  );
};

export default QueueScreen;
