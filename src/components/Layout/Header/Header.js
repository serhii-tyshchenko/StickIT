import React, { useContext } from 'react';
import { ThemeContext, LangContext, StoreContext } from '../../../contexts';
import uuid from 'uuid';

const Header = () => {
  const { dispatch } = useContext(StoreContext);
  console.log(useContext(StoreContext));
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, language } = useContext(LangContext);
  const theme = isLightTheme ? light : dark;
  const toggleLang = e => {
    toggleLanguage(e.target.value);
  };
  const handleClick = () => {
    dispatch({
      type: 'ADD_STICKER',
      payload: {
        id: uuid(),
        title: 'unt',
        text: 'sometext',
        color: '#fff'
      }
    });
  };
  const headerStyle = { background: theme.background, color: theme.color };
  return (
    <header style={headerStyle}>
      <div className="wrapper header">
        <h2 className="header__logo">StickIt</h2>
        <button onClick={handleClick}>Add Sticker</button>
        {/* <button onClick={() => toggleTheme()}>
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
        </div> */}
      </div>
    </header>
  );
};

export { Header };
