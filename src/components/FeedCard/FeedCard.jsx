import React, { useState } from "react";
import { motion } from "framer-motion";

const FeedCard = ({ feed }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <motion.img
            className="h-48 w-full object-cover md:w-48"
            src={feed.profilePicture}
            alt={`${feed.firstName} ${feed.lastName}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-6">
          <motion.div
            className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {feed.firstName} {feed.lastName}
          </motion.div>
          <motion.p
            className="block mt-1 text-lg leading-tight font-medium text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {feed.email}
          </motion.p>
          <motion.p
            className="mt-2 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {feed.contactNumber}
          </motion.p>
          <motion.p
            className="mt-2 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {feed.about}
          </motion.p>
          {feed.skills.length > 0 && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Skills:
              </h3>
              <div className="flex flex-wrap gap-2">
                {feed.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    whileHover={{ scale: 1.1, backgroundColor: "#818cf8" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <motion.div
        className="px-6 py-4 bg-gray-50 flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Interested
        </motion.button>
        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ignored
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FeedCard;
