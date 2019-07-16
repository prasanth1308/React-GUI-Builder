/*
* storage.js
* Written by Prasanth Ravi (prasanth1308@gmail.com)
* This javascript file will used handle the local storage
* Template: JS
* Prerequisites: React and babel

METHODS
--------
setStorage(key, value)
getStorage(key)
clearStorageItem(key)
clearStorage()
*/


/**
 * @summary Function to store  localstorage values
 * @param{key, value} Key and value
 * @returns{key, value} Key and value
 */
export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};
/**
 * @summary Function to read localstorage values
 * @param{key} key
 * @returns{value} value
 */
export const getStorage = key => {
  return localStorage.getItem(key);
};
/**
 * @summary Function to remove storage values based on the given key
 * @param{key} key
 * @returns{null} nothing
 */
export const clearStorageItem = key => {
  localStorage.removeItem(key);
};

/**
 * @summary Function to remove all storage values
 * @param{null} nothing
 * @returns{null} nothing
 */
export const clearStorage = () => {
  localStorage.clear();
};
