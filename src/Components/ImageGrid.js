import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import ImageUploader from "../Components/ImageUploader";

export default function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);


  const addNewImage = (newImage) => {
setImages((prevImages) => [newImage, ...prevImages]);
  };

  const handleDelete = (id) => {
    const filteredImages = images.filter((image) => image.id !== id);
    setImages(filteredImages);
  };

  return (
    <div>
      <ImageUploader addNewImage={addNewImage} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-4 mx-4 md:mx-6">
       
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onDelete={handleDelete}
          />
        ))}
        </div>
      
    </div>
  );
}
