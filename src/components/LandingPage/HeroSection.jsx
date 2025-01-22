import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 animate-fade-in">
        Connect. Collaborate. Code.
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Join the community where developers connect, share ideas, and build
        amazing things together.
      </p>
      <Link
        to="/signup"
        className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-lg"
      >
        Get Started Now
      </Link>
    </div>
  );
};

export default HeroSection;
