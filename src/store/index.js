/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { createContext, useReducer, useEffect, useMemo } from 'react';

import { rootReducer } from './reducers';
import initialState from './initial-state';

const APP_NAME = 'StickIt';

const Store = createContext();

const savedData = JSON.parse(localStorage.getItem(APP_NAME)) || initialState;

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, savedData);

  useEffect(() => {
    localStorage.setItem(APP_NAME, JSON.stringify(state));
  });

  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export { Store, StoreProvider };
