import React, { createContext, useReducer, useEffect } from 'react';
import { rootReducer } from './reducers';
import initialState from './initial-state';

const Store = createContext();

const savedData = JSON.parse(localStorage.getItem('StickIt')) || initialState;

const StoreProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, savedData);

  useEffect(() => {
    localStorage.setItem('StickIt', JSON.stringify(state));
  });

  return (
    <Store.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };
