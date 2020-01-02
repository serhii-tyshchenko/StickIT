import React, { createContext, useReducer, useEffect } from 'react';
import { rootReducer } from './reducers';

const Store = createContext();
const initialState = {
  theme: {
    isLightTheme: false,
    dark: { background: '#052b3c', color: '#fff' },
    light: { background: '#fff', color: '#052b3c' }
  },
  localization: {
    language: 'en'
  },
  stickers: []
};
const StoreProvider = props => {
  const [state, dispatch] = useReducer(
    rootReducer,
    initialState
    // () => JSON.parse(localStorage.getItem('StickIt')) || initialState
    // initialState
  );
  useEffect(() => {
    // localStorage.setItem('StickIt', JSON.stringify(state));
    console.log(state);
  }, [state]);

  return (
    <Store.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };
