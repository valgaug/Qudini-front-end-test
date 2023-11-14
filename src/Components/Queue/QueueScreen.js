import React, { useEffect } from 'react';
import { fetchQueueData } from '../../mockApi';
import Customer from '../Customer/Customer';
import { useDispatch, useSelector } from 'react-redux';
import { addAllCustomers } from '../../Redux/reducer';
import FilteredInput from '../Filtering/FilterInput';

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
  }, []);

  const filteredCustomers = customers.filter((customer) => customer.customer.name.toLowerCase().includes(filterQuery.toLowerCase()));

  return (
    <div>
      <FilteredInput />
      {filteredCustomers !== undefined &&
        filteredCustomers.map((customer) => (
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
