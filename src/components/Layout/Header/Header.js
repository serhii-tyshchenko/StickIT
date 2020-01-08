import React, { useContext, useState } from 'react';
import { LogInForm } from '../../LogInForm';
import { Store } from '../../../store';
import {
  addSticker,
  toggleTheme,
  signInGoogle,
  signOut
} from '../../../store/actions';

import './Header.scss';

const Header = () => {
  const { user, theme, dispatch } = useContext(Store);
  const { uid, photoURL } = user;
  const { isLightTheme, light, dark } = theme;
  const headerStyle = isLightTheme ? light : dark;
  const [state, setState] = useState({
    showLoginForm: false
  });

  const handleToggleTheme = () => {
    toggleTheme(dispatch, uid, isLightTheme);
  };

  const handleSignInClick = () => {
    if (user.isLogged) {
      signOut(dispatch);
    } else {
      signInGoogle(dispatch);
    }
  };
  const AddSticker = () => {
    addSticker(dispatch, uid);
  };
  const toggleModal = () => {
    setState({ ...state, showLoginForm: !state.showLoginForm });
  };
  const themeIconClass = isLightTheme
    ? 'header__menu__btn icon-moon'
    : 'header__menu__btn icon-sun';
  const userIconClass = photoURL
    ? 'header__menu__btn header__menu__btn--login'
    : 'header__menu__btn icon-user';
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
              onClick={handleToggleTheme}
              title={isLightTheme ? 'Dark' : 'Light'}
            />
            <button
              className={userIconClass}
              onClick={handleSignInClick}
              style={{ backgroundImage: `url(${photoURL})` }}
            />
          </div>
        </div>
      </header>
      {/* <LogInForm isVisible={state.showModal} handleClose={toggleModal} /> */}
    </>
  );
};

export { Header };
