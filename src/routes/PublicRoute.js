/*
* PublicRoute.js
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used validate the route based on the user authentication
* if user is logged in the it will redirect to home page whenever user end the base domain of app
* Template: JS
* Prerequisites: React and babel

METHODS
--------
None
*/
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authentication from '../utils/Authentication';

export const PublicRoute = ({ auth, ...props }) => {
  const isAllowed = authentication.isAuthenticated();
  return isAllowed ? <Redirect to="/dashboard" /> : <Route {...props} />;
};
