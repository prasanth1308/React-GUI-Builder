
import React, { useReducer } from 'react';
import context from './Context';
import {
  reducer,
  UPDATE_SELECTED_FIELD_LIST
} from './reducer';

const GlobalState = props => {
  const [state, dispatch] = useReducer(reducer, false);
  const updateSelectedInputFieldList = payload => {
    dispatch({ type: UPDATE_SELECTED_FIELD_LIST, payload });
  };

  const { children } = props;
  return (
    <context.Provider
      value={{
        state,
        updateSelectedInputFieldList,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalState;