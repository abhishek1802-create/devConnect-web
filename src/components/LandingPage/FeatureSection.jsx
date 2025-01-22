import React from "react";

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-sm">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Choose devConnect?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Connect with Developers"
          description="Build meaningful connections with developers from around the world. Share experiences and grow together."
          icon="👥"
        />
        <FeatureCard
          title="Share Knowledge"
          description="Exchange ideas, tips, and best practices with the community. Learn from experienced developers."
          icon="💡"
        />
        <FeatureCard
          title="Collaborate on Projects"
          description="Find partners for your next big project or contribute to existing ones. Turn ideas into reality."
          icon="🚀"
        />
      </div>
    </div>
  );
};

export default FeatureSection;

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
