import React, { useContext } from 'react';
import { StoreContext } from '../../../contexts';

const Header = () => {
  const { theme, dispatch } = useContext(StoreContext);
  const { isLightTheme, light, dark } = theme;
  const headerStyle = isLightTheme ? light : dark;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <header style={headerStyle}>
      <div className="wrapper header">
        <h2 className="header__logo">StickIt</h2>
        <button onClick={toggleTheme}>{isLightTheme ? 'light' : 'dark'}</button>
        {/* <div>
          <label>
            EN
            <input
              type="radio"
              onChange={toggleLang}
              name="language"
              value="en"
              checked={language === 'en'}
            />
          </label>
          <label>
            UA
            <input
              type="radio"
              onChange={toggleLang}
              name="language"
              value="ua"
              checked={language === 'ua'}
            />
          </label>
        </div> */}
      </div>
    </header>
  );
};

export { Header };
