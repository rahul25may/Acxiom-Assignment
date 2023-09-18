import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove an item from the cart by index
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>1</td> {/* You can replace with the actual quantity */}
                <td>
                  <button onClick={() => removeItemFromCart(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
