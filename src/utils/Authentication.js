import cookie from 'react-cookies';

class Authentication {
  constructor() {
    const isUserLoggedIn = cookie.load('isUserLoggedIn');
    this.authenticated = !!isUserLoggedIn;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Authentication();
