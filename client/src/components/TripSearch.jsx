import React, { useState } from 'react';
import '../CSS/TripSearch.css';

const TripSearch = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    onSearch({ destination, startDate, endDate });
  };

  return (
    <div className="trip-search">
      <h2>Plan Your Trip</h2>
      <input 
        type="text" 
        placeholder="Destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
      />
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TripSearch;
