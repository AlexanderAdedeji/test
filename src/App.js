import React from 'react';
import axios from 'axios';

const MyComponent = () => {
  const fetchData = async () => {
    try {
      // Replace with your actual endpoint
      const response = await axios.get('https://card-tracker-tsfs.onrender.com/card_tracker/card_management/search/LA0010001951'); 
      console.log(response.data);
      // Perform any additional logic with the received data here
    } catch (error) {
      console.error('There was an error fetching the data: ', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default MyComponent;
