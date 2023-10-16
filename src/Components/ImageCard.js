import React from "react";
import deleteicon from "../Assets/trash.svg";
import downloadicon from "../Assets/download.svg";
import addicon from "../Assets/plus.svg";


export default function ImageCard({ image, onDelete }) {
  const { id, url } = image;  


 

  return (
    <div className="image-card">
      <div className="absolute ml-[19em] space-x-4">
        <button >
          <img src={addicon} alt="Add to Collection" />
        </button>
        <button>
          <img src={downloadicon} alt="Download" />
        </button>
      </div>
      <img src={url} alt={`Image ${id}`} />
      <div className="absolute -mt-7 ml-[21em]">
        <button onClick={() => onDelete(id)}>
          <img src={deleteicon} alt="Delete" />
        </button>
      </div>
    </div>
  );
}
