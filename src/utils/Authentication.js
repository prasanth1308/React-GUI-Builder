/*
* Authentication.js
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used handle the user Authentication
* Template: JSx
* Prerequisites: React and babel

METHODS
--------
login(cb)
logout(cb)
isAuthenticated()
*/

import { getStorage } from '../utils/storage/storage';

class Authentication {
  constructor() {
    const isUserLoggedIn = getStorage('isUserLoggedIn');
    this.authenticated = !!isUserLoggedIn;
  }

   /**
     * @method
     * @name - login
     * This method will will set that is user is authenticated
     * @param cb (function)
     * @returns none
  */
  login(cb) {
    this.authenticated = true;
    cb();
  }

   /**
     * @method
     * @name - logout
     * This method will will set that is user is not authenticated
     * @param cb (function)
     * @returns none
  */
  logout(cb) {
    this.authenticated = false;
    cb();
  }

  /**
     * @method
     * @name - isAuthenticated
     * This method will will check whether the user is logged in or not
     * @param none
     * @returns none
  */
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Authentication();
