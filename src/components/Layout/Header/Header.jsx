import React, { useContext } from 'react';
import { Store } from 'store';
import { addSticker, toggleTheme } from 'store/actions';

import './Header.scss';

const Header = () => {
  const {
    theme: { isLightTheme, light, dark },
    dispatch
  } = useContext(Store);

  const headerStyle = isLightTheme ? light : dark;
  document.body.style.backgroundColor = headerStyle.background;

  const themeIconClass = isLightTheme
    ? 'header__menu__btn icon-moon'
    : 'header__menu__btn icon-sun';

  function handleToggleTheme() {
    dispatch(toggleTheme(isLightTheme));
  }

  function AddSticker() {
    dispatch(addSticker());
  }

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
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
