/* eslint-disable react/prop-types */
import React from 'react';
import Dashboard from '../views/Dashboard/Dashboard';

const Home = props => {
  const { history, location } = props;
  return (
    <main>
        <Dashboard 
          history={history} 
          location={location}
        />
    </main>
  );
};

export default Home;
