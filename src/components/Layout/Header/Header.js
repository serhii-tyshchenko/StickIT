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
  const { user, theme, dispatch } = useContext(Store);
  const { uid, photoURL } = user;
  const { isLightTheme, light, dark } = theme;
  const headerStyle = isLightTheme ? light : dark;
  const [state, setState] = useState({
    showLogInForm: false
  });

  const handleToggleTheme = () => {
    toggleTheme(dispatch, uid, isLightTheme);
  };

  const handleSignIn = () => {
    if (user.isLogged) {
      signOut(dispatch);
    } else {
      setState({ ...state, showLogInForm: !state.showLogInForm });
    }
  };
  const handleSignInWithEmail = async (email, password) => {
    await signInWithEmail(dispatch, email, password);
    setState({ ...state, showLogInForm: !state.showLogInForm });
  };
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle(dispatch);
    setState({ ...state, showLogInForm: !state.showLogInForm });
  };
  const AddSticker = () => {
    addSticker(dispatch, uid);
  };
  const toggleLogInForm = () => {
    setState({ ...state, showLogInForm: !state.showLogInForm });
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
              onClick={handleSignIn}
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
