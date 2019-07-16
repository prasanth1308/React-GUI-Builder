/*
* Home.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used render Layout for the Dashboard page
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
None
*/
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
