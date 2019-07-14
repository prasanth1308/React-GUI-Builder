
export const UPDATE_SELECTED_FIELD_LIST = 'UPDATE_SELECTED_FIELD_LIST';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_FIELD_LIST:
      let payloadTemp = state.payload || {};
      let payLoadId = action.payload.id || 0;
      if(payLoadId){
        payloadTemp[payLoadId] = action.payload;
      }
      return { ...state, payload: payloadTemp };
    default:
      return state;
  }
};