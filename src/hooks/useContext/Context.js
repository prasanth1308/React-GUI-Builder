import React from 'react';

const context = React.createContext({
  payload: {},
  updateSelectedInputFieldList: payload => {},
});

export default context;