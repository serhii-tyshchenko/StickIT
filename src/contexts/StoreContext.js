import React, { createContext, useReducer, useEffect } from 'react';
import { stickerReducer } from '../reducers/StickerReducer';

const StoreContext = createContext();
const initialState = {
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
