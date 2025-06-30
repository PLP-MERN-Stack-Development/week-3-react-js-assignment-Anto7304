import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-red-400 dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;