import React, { useState } from "react";

export default function ImageUploader({ addNewImage }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newImage = { id: Date.now(), url: URL.createObjectURL(selectedFile) };
      addNewImage(newImage);
      setSelectedFile(null);
    }
  };

  return (
    <span className="image-uploader flex justify-center ">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </span>
  );
}
