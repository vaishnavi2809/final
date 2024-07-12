import React from 'react';
import '../CSS/TripPackages.css';

const packages = [
  { id: 1, name: 'Beach Paradise', description: 'Enjoy the sunny beaches!', price: '$500' },
  { id: 2, name: 'Mountain Adventure', description: 'Hike through the mountains!', price: '$700' },
  { id: 3, name: 'City Lights', description: 'Explore the vibrant city life!', price: '$600' }
];

const TripPackages = ({ searchResults }) => {
  return (
    <div className="trip-packages">
      <h2>Available Packages</h2>
      <div className="packages">
        {packages.map(pkg => (
          <div key={pkg.id} className="package">
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p>{pkg.price}</p>
            <button>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPackages;
