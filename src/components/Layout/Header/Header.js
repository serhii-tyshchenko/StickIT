import React, { useContext, useState } from 'react';
import { Store } from '../../../store';
import { addSticker, toggleTheme } from '../../../store/actions';
import { SIGN_IN } from '../../../store/action-types';
import db from '../../../services/db/firebase';
import './Header.scss';
import { LogInForm } from '../../LogInForm';

const Header = () => {
  const { user, theme, dispatch } = useContext(Store);
  const { isLightTheme, light, dark } = theme;
  const headerStyle = isLightTheme ? light : dark;
  const [state, setState] = useState({
    photoURL: '',
    classField: 'header__menu__btn icon-user'
  });

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
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
    dispatch(addSticker());
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
              onClick={handleToggleTheme}
              title={isLightTheme ? 'Dark' : 'Light'}
            />
            <button
              className={state.classField}
              onClick={handleSignIn}
              style={{ backgroundImage: `url(${state.photoURL})` }}
            />
          </div>
        </div>
      </header>
      {/* <LogInForm isVisible={state.showModal} handleClose={handleSignIn} /> */}
    </>
  );
};

export { Header };
