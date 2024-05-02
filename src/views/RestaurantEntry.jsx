import React, { useState } from 'react';
import './styling/RestaurantEntryStyle';


function RestaurantForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    zipcode: '',
    owner_id: 0,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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

        <label htmlFor="owner_id">Owner ID:</label><br />
        <input type="number" id="owner_id" name="owner_id" value={formData.owner_id} onChange={handleChange} /><br /><br />

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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RestaurantForm;
