import React from 'react';
import '../CSS/FindMatch.css'; // Import the custom CSS
import Header from '../components/Header';

const FindMatch = () => {
  return (
    <main>
      <Header /> {/* Include your header component */}
      <section className="intro">
        <h1>Welcome to VibeTrip</h1>
        <p>Connect with people who share your interests and make new friends.</p>
      </section>

      <section className="discover">
        <h2>Discover Users</h2>
        <div className="user-cards">
          {[1, 2, 3].map(id => (
            <div key={id} className="user-card">
              <h3>User {id}</h3>
              <p>Interests: Hiking, Travel</p>
              <button>Connect</button>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="activity-feed">
        <h2>Activity Feed</h2>
        <ul>
          <li>User A updated their profile</li>
          <li>User B added a new interest: Cooking</li>
        </ul>
      </section> */}
    </main>
  );
};

export default FindMatch;
