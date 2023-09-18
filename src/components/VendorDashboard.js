import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router

function VendorDashboard() {
  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/add-item">Add New Item</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/user-orders">Ordered by User</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default VendorDashboard;
