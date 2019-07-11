import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import sad from '../../assets/img/sad-face.svg';
import authentication from '../../utils/Authentication';

const NotFound = () => {
  return (
    <Grid
      className="not-found-grid-container"
      direction="column"
      alignItems="center"
      justify="center"
      container
    >
      <Grid item>
        <img alt="sad" src={sad} />
      </Grid>
      <Grid item>
        <p className="not-found-404">404</p>
      </Grid>
      <Grid item>
        <p className="page-not-found">Page not found</p>
      </Grid>
      <Grid item>
        <p className="error-text">
          The page you are looking for doesn&apos;t exist or an other error
          occured.
        </p>
      </Grid>
      <Grid item>
        <center>
          {authentication.isAuthenticated() ? (
            <Link className="sign-in-link" to="/" href="javascript:void(0);">
              Return to Home Page{' '}
            </Link>
          ) : (
            <Link
              className="sign-in-link"
              to="/dashboard"
              href="javascript:void(0);"
            >
              Return to Home Page{' '}
            </Link>
          )}
        </center>
      </Grid>
    </Grid>
  );
};

export default NotFound;
