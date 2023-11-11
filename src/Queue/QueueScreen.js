import React, { useState, useEffect } from 'react';
import { fetchQueueData } from '../mockApi';

// eslint-disable-next-line
import base64 from 'base-64';

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
        <div key={customer.id}>
          <div>{customer.customer.name}</div>
        </div>
      ))}
    </div>
  );
};

export default QueueScreen;
