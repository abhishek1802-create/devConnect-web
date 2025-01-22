import React from "react";
import { Link } from "react-router-dom";

const HeadingSection = () => {
  return (
    <nav className="container mx-auto px-6 py-4 fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-10">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-black transition-colors">
          DevConnect
        </div>
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeadingSection;
