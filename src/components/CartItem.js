import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to remove this item from the cart?")) {
      dispatch(removeFromCart(item.id));
    }
  };

  return (
    <div className="flex items-center border-b p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price} each</p>
        <p className="font-bold">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
        <div className="flex items-center mt-2">
          <button
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
            className="bg-gray-200 px-3 py-1 rounded-md"
          >
            -
          </button>
          <span className="mx-4">{item.quantity}</span>
          <button
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
            className="bg-gray-200 px-3 py-1 rounded-md"
          >
            +
          </button>
          <button
            onClick={handleDelete}
            className="ml-4 text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
