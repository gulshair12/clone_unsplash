import React, { useState } from "react";

export default function ImageUploader({ addNewImage }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = { id: Date.now(), url: event.target.result };
        addNewImage(newImage);
        setSelectedFile(null);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <span className="image-uploader flex justify-center mb-8">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </span>
  );
}
