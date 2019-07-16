/*
* Authentication.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used render Layout for the Sign in page
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
None
*/

import React from 'react';
import SignIn from '../views/SignIn/SignIn';

const Authentication = props => {
  const { history, location } = props;
  return (
        <SignIn 
          history={history} 
          location={location}
        />
  );
};

export default Authentication;
