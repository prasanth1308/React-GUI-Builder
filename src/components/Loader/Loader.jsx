/*
* Loader.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used render spinner on page when ever Async operation are done
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
spinner()
*/

import React from 'react';
import Loader from 'react-loader-advanced';
// @material-ui/core components
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = props => {
  const { children, active } = props;
   /**
    * @method
    * @name - spinner
    * This method will return the circular spinner element to the loader overlay
    * @param none
    * @returns none
  */
  const spinner = (
    <span>
      <CircularProgress color="secondary" />
      <p>Loading...</p>
    </span>
  );
  return (
    <Loader
      foregroundStyle={{ color: 'white' }}
      show={active || false}
      message={spinner}
    >
      {children}
    </Loader>
  );
};

export default Spinner;
