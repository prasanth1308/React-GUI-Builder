/*
* SignIn.jsx
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will be used for Signin operations
* Template: JSX
* Prerequisites: React and babel

METHODS
--------
getInputElement(id, left, top, name)
handleClose(event, reason)
*/

import React from 'react';
import authentication from '../../utils/Authentication';
import { setStorage } from '../../utils/storage/storage';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const { history } = props;
  const [open, setOpen] = React.useState(false);
  /**
    * @method
    * @name - onFormSubmit
    * This method will trigger the login validation
    * @param event
    * @returns none
  */
  const onFormSubmit = (event) => {
    event.preventDefault();
    try {
      let email = document.getElementById('email').value || '';
      let password = document.getElementById('password').value || '';
      if (email === 'demo' && password === 'demo') {
        authentication.login(() => {
          setStorage('isUserLoggedIn', true);
          history.push('/dashboard');
        });
      } else {
        setOpen(true);
      }
    } catch (error) {
      console.log('onFormSubmit', error)
    }
  };

  /**
    * @method
    * @name - handleClose
    * This method will used to close operation of the snackbar
    * @param event
    * @returns none
  */
  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        variant="error"
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        className='snackbar-error'
        message={<span id="message-id">Invalid Credentials</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={onFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
