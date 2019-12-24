import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
export const Header = () => {
  const context = useContext(ThemeContext);
  return (
    <header>
      <div className="wrapper header">
        <h2 className="header__logo">StickIt</h2>
        <button onClick={() => context.toggleTheme()}>
          {context.isLightTheme ? 'light' : 'dark'}
        </button>
      </div>
    </header>
  );
};
