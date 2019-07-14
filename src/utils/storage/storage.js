
/**
 * @summary Function to store  localstorage values
 * @param{key, value} Key and value
 * @returns{key, value} Key and value
 */
export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};
/**
 * @summary Function to read localstorage vaues
 * @param{key} key
 * @returns{value} value
 */
export const getStorage = key => {
  return localStorage.getItem(key);
};
/**
 * @summary Function to remove storage vaues based on the given key
 * @param{key} key
 * @returns{null} nothing
 */
export const clearStorageItem = key => {
  localStorage.removeItem(key);
};

/**
 * @summary Function to remove all storage vaues
 * @param{null} nothing
 * @returns{null} nothing
 */
export const clearStorage = () => {
  localStorage.clear();
};
