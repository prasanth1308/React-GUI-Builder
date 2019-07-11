import cookie from 'react-cookies';

class Authentication {
  constructor() {
    const isUserToken = cookie.load('userToken');
    this.authenticated = !!isUserToken;
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
