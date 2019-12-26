import React, { useContext } from 'react';
import { ThemeContext, LangContext } from '../../../contexts';
export const Header = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, language } = useContext(LangContext);
  const theme = isLightTheme ? light : dark;
  const toggleLang = e => {
    toggleLanguage(e.target.value);
  };
  const headerStyle = { background: theme.background, color: theme.color };
  return (
    <header style={headerStyle}>
      <div className="wrapper header">
        <h2 className="header__logo">StickIt</h2>
        <button onClick={() => toggleTheme()}>
          {isLightTheme ? 'light' : 'dark'}
        </button>
        <div>
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
        </div>
      </div>
    </header>
  );
};
