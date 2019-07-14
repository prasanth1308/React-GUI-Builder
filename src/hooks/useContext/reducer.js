
export const UPDATE_SELECTED_FIELD_LIST = 'UPDATE_SELECTED_FIELD_LIST';

export const initialState = {
  payload: {}
};

export const reducer = (state, action) => {
  debugger
  switch (action.type) {
    case UPDATE_SELECTED_FIELD_LIST:
      debugger
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};