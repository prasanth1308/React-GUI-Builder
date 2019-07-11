import cookie from 'react-cookies';

/**
 * @summary Function to store session storage values
 * @param{key, value} Key and value
 * @returns{key, value} Key and value
 */
export const setStorage = (key, value) => {
  cookie.save(key, value, { path: '/' });
};
/**
 * @summary Function to read session storage vaues
 * @param{key} key
 * @returns{value} value
 */
export const getStorage = key => {
  return cookie.load(key);
};
/**
 * @summary Function to remove storage vaues based on the given key
 * @param{key} key
 * @returns{null} nothing
 */
export const clearStorageItem = key => {
  cookie.remove(key, { path: '/' });
};

/**
 * @summary Function to remove all storage vaues
 * @param{null} nothing
 * @returns{null} nothing
 */
export const clearStorage = () => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookieItem = cookies[i];
    const eqPos = cookieItem.indexOf('=');
    const name = eqPos > -1 ? cookieItem.substr(0, eqPos) : cookieItem;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
};
