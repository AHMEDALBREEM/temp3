import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-green-800 mb-2">
        {plant.name}
      </h3>
      <p className="text-gray-600 text-sm mb-2">{plant.description}</p>
      <p className="text-lg font-bold text-green-700">${plant.price}</p>
      <button
        onClick={handleAddToCart}
        disabled={isInCart}
        className={`${
          isInCart
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 transition-transform transform active:scale-95"
        } text-white px-4 py-2 rounded-md mt-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500`}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
