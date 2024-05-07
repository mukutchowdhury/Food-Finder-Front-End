import React, { useState } from 'react';
import '../styling/RestaurantEntry.css';

function RestaurantEntry({ userId, onCreateRestaurant }) {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    zipcode: '',
    owner_id: userId,
    image: '',
    phone: '',
    cuisine: '',
    keywords: '',
    category: '',
    hours: {
      open: '',
      close: ''
    }
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value === '')) {
      setMessage('Please fill out all fields');
      return;
    }
    try {
      await onCreateRestaurant(formData);
    } catch (error) {
      setMessage('Error creating restaurant');
      console.error('Error creating restaurant:', error);
    }
  };

  return (
    <div>
      <h2>Restaurant Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br /><br />

        <label htmlFor="address">Address:</label><br />
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} /><br /><br />

        <label htmlFor="zipcode">Zipcode:</label><br />
        <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} /><br /><br />

        <label htmlFor="image">Image URL:</label><br />
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} /><br /><br />

        <label htmlFor="phone">Phone:</label><br />
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br /><br />

        <label htmlFor="cuisine">Cuisine:</label><br />
        <input type="text" id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} /><br /><br />

        <label htmlFor="keywords">Keywords:</label><br />
        <input type="text" id="keywords" name="keywords" value={formData.keywords} onChange={handleChange} /><br /><br />

        <label htmlFor="category">Category:</label><br />
        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} /><br /><br />

        <label htmlFor="open">Opening Hours:</label><br />
        <input type="text" id="open" name="open" value={formData.hours.open} onChange={(e) => setFormData(prevState => ({
          ...prevState,
          hours: {
            ...prevState.hours,
            open: e.target.value
          }
        }))} /><br /><br />

        <label htmlFor="close">Closing Hours:</label><br />
        <input type="text" id="close" name="close" value={formData.hours.close} onChange={(e) => setFormData(prevState => ({
          ...prevState,
          hours: {
            ...prevState.hours,
            close: e.target.value
          }
        }))} /><br /><br />

          <button className='bg-gray-200 py-2 px-4 min-w-full rounded-md' type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  );
}

export default RestaurantEntry;
