
import React, { useState, useEffect } from "react";

const AddToCollectionMessage = ({ show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000); 

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="stickey z-10 text-grey-700 bg-gray p-2 rounded border border-gray-300">
      Image added to collection
    </div>
  );
};

export default AddToCollectionMessage;
