import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddList = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyName: '',
    type: '',
    location: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', formData);

    const payload = {
    name:formData.propertyName,
    type: formData.type,
    location: formData.location,
    price: formData.price,
    description: formData.description
    }
  
    const {data} = await axios.post('http://localhost:3000/api/properties' , payload);
        console.log(data)
        try {
          navigate('/')
          alert("Add property successfully")
        } catch (error) {
          console.log("somithing went wrong")
        }
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-300 px-4 py-6">
      <form
        className="bg-white w-full md:w-1/2 p-6 md:p-10 rounded-xl shadow-md flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Add Property</h2>

        {/* Property Name */}
        <div className="flex flex-col">
          <label htmlFor="propertyName" className="text-base font-medium text-gray-700 mb-1">
            Property Name
          </label>
          <input
            id="propertyName"
            name="propertyName"
            type="text"
            placeholder="Enter property name"
            className="h-11 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.propertyName}
            onChange={handleChange}
          />
        </div>

        {/* Type */}
        <div className="flex flex-col">
          <label htmlFor="type" className="text-base font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            id="type"
            name="type"
            type="text"
            placeholder="Apartment, House, etc."
            className="h-11 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.type}
            onChange={handleChange}
          > 
        <option value="" disabled> Select Proprty type </option>
        <option value="PLOT"> PLOT </option>
        <option value="SHED"> SHED </option>
        <option value="Retailer Store"> Retailer Store</option>
        <option value="PLOT STORE"> PLOT STORE</option>
          </select>
          
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-base font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="City, Address, etc."
            className="h-11 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label htmlFor="price" className="text-base font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price"
            className="h-11 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-base font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="h-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddList;
