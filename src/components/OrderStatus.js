import React, { useState, useEffect } from 'react';

function OrderStatus() {
  const [orders, setOrders] = useState([]);

  // Simulated order data (replace with actual data or fetch from an API)
  const sampleOrders = [
    {
      id: 1,
      productName: 'Product A',
      status: 'In Progress',
    },
    {
      id: 2,
      productName: 'Product B',
      status: 'Shipped',
    },
    {
      id: 3,
      productName: 'Product C',
      status: 'Delivered',
    },
  ];

  useEffect(() => {
    // Fetch or set user's order data when the component mounts
    setOrders(sampleOrders); // Replace with actual data fetching logic
  }, []);

  return (
    <div>
      <h2>Order Status</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.productName}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderStatus;
