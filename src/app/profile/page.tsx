import Image from 'next/image';
import React from 'react';

const UnderMaintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
        <Image
          className="mx-auto mb-4 w-24 h-24"
          src="https://via.placeholder.com/150" // You can replace this with a maintenance image
          alt="Under Maintenance"
        />
        <h1 className="text-2xl font-semibold text-gray-800">Well be back soon!</h1>
        <p className="mt-4 text-gray-600">
          Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience.
        </p>
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UnderMaintenance;
