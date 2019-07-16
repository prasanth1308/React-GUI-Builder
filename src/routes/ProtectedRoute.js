/*
* ProtectedRoute.js
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used validate the route based on the user authentication
* if user is not logged in the it will redirect to login page
* Template: JS
* Prerequisites: React and babel

METHODS
--------
None
*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authentication from '../utils/Authentication';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (authentication.isAuthenticated()) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};
