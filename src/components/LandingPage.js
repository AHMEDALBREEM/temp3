import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-green-50 relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/paradise-nursery/images/nursery-background.jpeg')",
          opacity: 0.3,
        }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6 animate__animated animate__fadeInDown">
            Welcome to Paradise Nursery
          </h1>
          <p className="text-xl text-gray-600 mb-8 w-full md:w-6/12 mx-auto animate__animated animate__fadeIn">
            Experience Paradise Nursery's premium selection of plants, where
            beauty and quality meet to transform your home and garden into a
            personal oasis. Discover our vast collection of indoor and outdoor
            plants, carefully curated by our expert horticulturists. From
            vibrant flowering plants to lush greenery, we offer everything you
            need to create your own slice of paradise.
          </p>
          <Link
            to="/paradise-nursery/products"
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors animate__animated animate__bounce"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
