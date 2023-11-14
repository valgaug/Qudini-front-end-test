import React, { useState, useEffect } from 'react';
import { fetchQueueData } from '../mockApi';
import Customer from './components/Customer';

const QueueScreen = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchQueueData();
        const json = await response.json();
        setCustomers(json.queueData.queue.customersToday);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {customers.map((customer) => (
        <Customer key={customer.id} email={customer.customer.emailAddress} name={customer.customer.name} />
      ))}
    </div>
  );
};

export default QueueScreen;
