import React, { useState } from 'react';
import Navbar from '../components/Header'; // Import the Navbar component
import TripSearch from '../components/TripSearch';
import TripPackages from '../components/TripPackages';
import '../CSS/plan.css'; // Import the specific CSS for this component

const Plan = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchData) => {
    // Logic to handle search (e.g., filter packages, fetch data)
    console.log(searchData);
    setSearchResults(searchData);
  };

  return (
    <div className="home">
      <Navbar /> {/* Include the Navbar component */}
      {/* <header className="header">
        <h1>Trip Planner</h1>
      </header> */}
      <TripSearch onSearch={handleSearch} />
      {searchResults && (
        <div className="search-results">
          <h2>Search Results</h2>
          {/* Display search results if applicable */}
        </div>
      )}
      <TripPackages />
    </div>
  );
};

export default Plan;
