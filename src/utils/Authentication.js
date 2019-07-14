import { getStorage } from '../utils/storage/storage';

class Authentication {
  constructor() {
    const isUserLoggedIn = getStorage('isUserLoggedIn');
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
