import React, { useContext } from 'react';
import { StoreContext } from '../../../contexts';
import { TOGGLE_THEME, SIGN_IN } from '../../../reducers/action-types';
import db from '../../../services/db/firebase';
const Header = () => {
  const { user, theme, dispatch } = useContext(StoreContext);
  const { isLightTheme, light, dark } = theme;
  const headerStyle = isLightTheme ? light : dark;

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };
  const handleSignIn = async () => {
    let response = await db.login('vimlut@gmail.com', '123456');
    if (response.hasOwnProperty('message')) {
      console.log(response.message);
    } else {
      console.log(response.user);
      return dispatch({
        type: SIGN_IN,
        payload: response.user
      });
    }
  };
  return (
    <header style={headerStyle}>
      <div className="wrapper header">
        <h2 className="header__logo">StickIt</h2>
        <button onClick={toggleTheme}>{isLightTheme ? 'light' : 'dark'}</button>
        <button onClick={handleSignIn}>SignIn</button>
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
