import React, { useContext, useState } from 'react';
import { LogInForm } from '../../LogInForm';
import { Store } from '../../../store';
import {
  addSticker,
  toggleTheme,
  signInWithEmail,
  signOut,
  signInWithGoogle
} from '../../../store/actions';

import './Header.scss';

const Header = () => {
  const {
    user: { uid, photoURL, isLogged },
    theme: { isLightTheme, light, dark },
    dispatch
  } = useContext(Store);

  const headerStyle = isLightTheme ? light : dark;
  document.body.style.backgroundColor = headerStyle.background;
  const [state, setState] = useState({
    showLogInForm: false
  });

  const handleToggleTheme = () => {
    toggleTheme(dispatch, uid, isLightTheme);
  };

  const toggleLogInForm = () => {
    setState({ showLogInForm: !state.showLogInForm });
  };

  const handleLogInClick = () => {
    if (isLogged) {
      signOut(dispatch);
    } else {
      toggleLogInForm();
    }
  };

  const handleSignInWithEmail = async (email, password) => {
    await signInWithEmail(dispatch, email, password);
    toggleLogInForm();
  };

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle(dispatch);
    toggleLogInForm();
  };

  const AddSticker = () => {
    addSticker(dispatch, uid);
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
              // onClick={handleSignIn}
              onClick={handleLogInClick}
              style={{
                backgroundImage: `url(${photoURL})`
              }}
            />
          </div>
        </div>
      </header>
      <LogInForm
        isVisible={state.showLogInForm}
        handleSignInWithEmail={handleSignInWithEmail}
        handleSignInWithGoogle={handleSignInWithGoogle}
        handleClose={toggleLogInForm}
      />
    </>
  );
};

export { Header };
