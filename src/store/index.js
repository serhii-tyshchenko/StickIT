import { createContext, useReducer, useEffect } from 'react';

import { rootReducer } from './reducers';
import initialState from './initial-state';

const APP_NAME = 'StickIt';

const Store = createContext();

const savedData = JSON.parse(localStorage.getItem(APP_NAME)) || initialState;

const StoreProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, savedData);

  useEffect(() => {
    localStorage.setItem(APP_NAME, JSON.stringify(state));
  });

  return (
    <Store.Provider value={{ ...state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };
