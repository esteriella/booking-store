import React, { useState } from 'react';
import './ServiceForm.css';

function ServiceForm({ onServiceSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [workImages, setWorkImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleWorkImagesChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    const selectedImages = [];
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        selectedImages.push(event.target.result);
        if (selectedImages.length === fileArray.length) {
          setWorkImages(selectedImages);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddService = (event) => {
    event.preventDefault();

    const newService = {
      title,
      description,
      type,
      images: workImages,
    };

    onServiceSubmit(newService);

    setTitle('');
    setDescription('');
    setType('');
    setWorkImages([]);
  };

  return (
    <div className="service-form">
      <h2>Add Service</h2>
      <form onSubmit={handleAddService}>
        <label>
          Title:
          <input type="text" className="form-input" value={title} onChange={handleTitleChange} required />
        </label>
        <label>
          Description:
          <textarea className="form-textarea" value={description} onChange={handleDescriptionChange} required />
        </label>
        <label>
          Type:
          <input type="text" className="form-input" value={type} onChange={handleTypeChange} required />
        </label>
        <label>
          Works:
          <input type="file" className="form-input" multiple onChange={handleWorkImagesChange} required />
        </label>
        <button type="submit" className="form-button">Add Service</button>
      </form>
    </div>
  );
}

export default ServiceForm;
