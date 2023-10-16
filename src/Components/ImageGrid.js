import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import ImageUploader from "./ImageUploader"; 

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

   // Function to handle the "Add to Collection" action
  //  const handleAddToCollection = (imageId) => {
  //   // Implement the logic to add the image to a collection
  //   console.log(`Added image ${imageId} to collection`);
  // };


  // Function to handle the "Delete" action
  const handleDelete = (id) => {
    const filteredImages = images.filter((image) => image.id !== id);
    setImages(filteredImages);
  };

  return (
    <div>
      <ImageUploader addNewImage={addNewImage} />
      <div className="grid grid-cols-3 gap-2 mt-8 mx-12">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            // onAddToCollection={handleAddToCollection}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
