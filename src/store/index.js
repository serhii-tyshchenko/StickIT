import React, { createContext, useReducer, useEffect } from 'react';
import { rootReducer } from './reducers';
import initialState from './initial-state';
const Store = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem('StickIt')) || initialState;
};

const StoreProvider = props => {
  const [state, dispatch] = useReducer(
    rootReducer,
    initialState,
    init
    // TODO save user to LS
  );

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
