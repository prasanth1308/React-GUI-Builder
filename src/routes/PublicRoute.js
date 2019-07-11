import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authentication from '../utils/Authentication';

export const PublicRoute = ({ auth, ...props }) => {
  const [shouldCrash, setShouldCrash] = useState(false);
  function getQueryStringValue(key) {
    try {
      return decodeURIComponent(
        window.location.search.replace(
          new RegExp(
            '^(?:.*[&\\?]' +
              encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
            '(?:\\=([^&]*))?)?.*$',
            'i',
          ),
          '$1',
        ),
      );
    } catch (error) {
      setShouldCrash(() => {
        throw new Error('hideAlert');
      });
    }
  }
  const { location } = props;
  const isAllowed = authentication.isAuthenticated();
  const resetPasswordToken = getQueryStringValue('token');
  if (location.pathname === '/resetpassword' && resetPasswordToken === '') {
    return <Redirect to="/" />;
  }
  return isAllowed ? <Redirect to="/dashboard" /> : <Route {...props} />;
};
