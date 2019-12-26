import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [state, setState] = useState({
    isLightTheme: false,
    dark: { background: '#052b3c', color: '#fff' },
    light: { background: '#fff', color: '#052b3c' }
  });
  const toggleTheme = () =>
    setState({ ...state, isLightTheme: !state.isLightTheme });
  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
