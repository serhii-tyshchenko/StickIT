import React, { useContext, useState } from 'react';
import { Store } from '../../../store';
import {
  TOGGLE_THEME,
  ADD_STICKER,
  SIGN_IN
} from '../../../store/action-types';
import db from '../../../services/db/firebase';

import { LogInForm } from '../../LogInForm';

const Header = () => {
  const { user, theme, dispatch } = useContext(Store);
  const { isLightTheme, light, dark } = theme;
  const headerStyle = isLightTheme ? light : dark;
  const [state, setState] = useState({
    photoURL: '',
    classField: 'header__menu__btn icon-user'
  });

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const handleSignIn = async () => {
    const response = await db.googleSignin();
    const { uid, email, photoURL } = response.user;
    const stickers = await db.getStickers(uid);
    setState({
      photoURL,
      classField: 'header__menu__btn header__menu__btn--login'
    });
    return dispatch({
      type: SIGN_IN,
      payload: { user: { uid, email, photoURL }, stickers: stickers }
    });
  };
  const AddSticker = () => {
    dispatch({ type: ADD_STICKER });
  };
  const themeIconClass = isLightTheme
    ? 'header__menu__btn icon-moon'
    : 'header__menu__btn icon-sun';
  return (
    <>
      <header style={headerStyle}>
        <div className="wrapper header">
          <div className="header__logo">StickIt</div>
          <div className="header__menu">
            <button
              className="header__menu__btn icon-plus"
              onClick={AddSticker}
              title="Add New Sticker"
            />
            <button
              className={themeIconClass}
              onClick={toggleTheme}
              title={isLightTheme ? 'Dark' : 'Light'}
            />
            <button
              className={state.classField}
              onClick={handleSignIn}
              style={{ backgroundImage: `url(${state.photoURL})` }}
            />
          </div>
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
      {/* <LogInForm isVisible={state.showModal} handleClose={handleSignIn} /> */}
    </>
  );
};

export { Header };
