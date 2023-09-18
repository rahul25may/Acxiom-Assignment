import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using React Router

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/vendor-category">Vendor Category</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/guest-list">Guest List</Link>
          </li>
          <li>
            <Link to="/order-status">Order Status</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default UserDashboard;
