import React from "react";

const FeaturesPage = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12 mt-20">
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-indigo-600 text-2xl mb-4">🤝</div>
        <h3 className="text-xl font-semibold mb-2">Connect</h3>
        <p className="text-gray-600">
          Network with developers from around the world
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-indigo-600 text-2xl mb-4">💡</div>
        <h3 className="text-xl font-semibold mb-2">Share</h3>
        <p className="text-gray-600">
          Share your projects and get valuable feedback
        </p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-indigo-600 text-2xl mb-4">🚀</div>
        <h3 className="text-xl font-semibold mb-2">Grow</h3>
        <p className="text-gray-600">Learn and grow with the community</p>
      </div>
    </div>
  );
};

export default FeaturesPage;
