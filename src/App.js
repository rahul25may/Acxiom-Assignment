import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import UserLogin from './components/UserLogin';
import VendorLogin from './components/VendorLogin';
import AdminLogin from './components/AdminLogin';
import UserDashboard from './components/UserDashboard';
import VendorDashboard from './components/VendorDashboard';
import AdminDashboard from './components/AdminDashboard';
import Cart from './components/Cart';
import GuestList from './components/GuestList';
import OrderStatus from './components/OrderStatus';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Authentication Routes */}
          <Route exact path="/user-login" component={UserLogin} />
          <Route exact path="/vendor-login" component={VendorLogin} />
          <Route exact path="/admin-login" component={AdminLogin} />

          {/* User Dashboard Routes */}
          <Route exact path="/user-dashboard" component={UserDashboard} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/guest-list" component={GuestList} />
          <Route exact path="/order-status" component={OrderStatus} />

          {/* Vendor Dashboard Routes */}
          <Route exact path="/vendor-dashboard" component={VendorDashboard} />

          {/* Admin Dashboard Routes */}
          <Route exact path="/admin-dashboard" component={AdminDashboard} />

          {/* Default Route */}
          <Route exact path="/" component={UserLogin} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
