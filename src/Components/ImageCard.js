import React, { useState } from "react";
import deleteicon from "../Assets/trash.svg";
import addicon from "../Assets/plus.svg";
import AddToCollectionMessage from "./AddToCollectionMessage";
import { connect } from "react-redux";
import { addToCollection } from "../Redux/Actions/collectionActions";

const ImageCard = ({ image, onDelete, addToCollection }) => {
  const { id, url } = image;
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCollection = () => {
    addToCollection(image);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="image-card">
      <div className="relative">
        <img className="h-60 w-full rounded-lg object-cover " src={url} alt={`Image ${id}`} />
        <div className="absolute top-2 right-2 flex items-center justify-center">
          <button
            onClick={() => onDelete(id)}
            className="bg-white p-2 mr-1 rounded-lg border border-gray-300"
          >
            <img src={deleteicon} alt="Delete" />
          </button>
          <button
            onClick={handleAddToCollection}
            className="bg-white p-2 rounded-lg border border-gray-300"
          >
            <img src={addicon} alt="Add to Collection" />
          </button>
        </div>
      </div>
      <AddToCollectionMessage show={showMessage} />
    </div>
  );
};

export default connect(null, { addToCollection })(ImageCard);
