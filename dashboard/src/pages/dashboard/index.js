import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard </h3>
      <h6>Found</h6>
      {/* Use Link component to navigate to the About page */}
      <Link to="/dashboard/about">
        <button>About</button>
      </Link>
    </div>
  );
};

export default Dashboard;
