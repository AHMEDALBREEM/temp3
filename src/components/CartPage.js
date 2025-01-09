import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { removeFromCart } from "../redux/cartSlice"; // Assuming this action exists

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id)); // Dispatch action to remove item
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          to="/paradise-nursery/products"
          className="bg-green-600 text-white px-6 py-2 rounded-lg inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <CartItem item={item} />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-end">
        <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>
        <div className="space-x-4">
          <Link
            to="/paradise-nursery/products"
            className="bg-gray-500 text-white px-6 py-2 rounded-lg inline-block"
          >
            Continue Shopping
          </Link>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
            onClick={() => alert("Checkout functionality coming soon!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
