import React, { useState, useRef } from 'react';
import '../CSS/UserProfile.css'; // Import your CSS file for styling

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    travelInterests: '',
    favoriteDestinations: '',
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle profile picture upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add API call here to save the data
    console.log('User Profile Submitted:', formData);
    console.log('Profile Picture:', profilePicture);
  };

  // Trigger file input click
  const handleEditPicture = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='user-profile'>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='profile-picture'>
          <img
            src={profilePicture || 'https://via.placeholder.com/150'}
            alt='Profile'
            className='profile-picture-img'
          />
          <button
            type='button'
            className='btn-edit'
            onClick={handleEditPicture}
          >
            Edit
          </button>
          <input
            type='file'
            ref={fileInputRef}
            accept='image/*'
            onChange={handleFileChange}
            className='file-input'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='bio'>Bio:</label>
          <textarea
            id='bio'
            name='bio'
            value={formData.bio}
            onChange={handleChange}
            rows='4'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='travelInterests'>Travel Interests:</label>
          <textarea
            id='travelInterests'
            name='travelInterests'
            value={formData.travelInterests}
            onChange={handleChange}
            rows='4'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='favoriteDestinations'>Favorite Destinations:</label>
          <textarea
            id='favoriteDestinations'
            name='favoriteDestinations'
            value={formData.favoriteDestinations}
            onChange={handleChange}
            rows='4'
          />
        </div>

        <button type='submit' className='btn-primary'>Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
