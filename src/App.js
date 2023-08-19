import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file if needed

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  
  // Assuming you have a URL for your API
  const apiUrl = 'https://api.example.com/data'; // Replace with your API endpoint

  // Use the fetch function to make a GET request
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      console.log('API response:', data);
      // You can perform further actions with the API data here
    })
    .catch((error) => {
      console.error('There was a problem with the API request:', error);
    });
};


  return (
    <div className="App">
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
