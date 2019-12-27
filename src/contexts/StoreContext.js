import React, { createContext, useReducer, useEffect } from 'react';
import { stickerReducer } from '../reducers/StickerReducer';
// import * as db from '../src/services/db';

const StoreContext = createContext();
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
const StoreContextProvider = props => {
  const [state, dispatch] = useReducer(
    stickerReducer,
    initialState,
    () => JSON.parse(localStorage.getItem('StickIt')) || initialState
  );
  useEffect(() => localStorage.setItem('StickIt', JSON.stringify(state)), [
    state
  ]);
  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
