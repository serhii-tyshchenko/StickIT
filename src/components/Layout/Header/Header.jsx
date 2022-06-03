import { useContext, useCallback } from 'react';
import { Store } from 'store';
import { addSticker, toggleTheme, toggleLanguage } from 'store/actions';
import { default as dictionary } from 'localization';

import { IconButton } from 'components/IconButton';

import './Header.scss';

const Header = () => {
  const {
    theme: { isLightTheme, light, dark },
    language,
    dispatch
  } = useContext(Store);

  const headerStyle = isLightTheme ? light : dark;

  document.body.style.backgroundColor = headerStyle.background;

  const dic = dictionary[language];

  const onToggleLanguage = useCallback(() => dispatch(toggleLanguage(language === 'en' ? 'ua' : 'en')), [dispatch, language]);

  const handleToggleTheme = useCallback(() => dispatch(toggleTheme(isLightTheme)), [dispatch, isLightTheme]);

  const AddSticker = () => dispatch(addSticker());

  const toggleThemeIcon = isLightTheme ? 'moon' : 'sun';
  const toggleThemeIconTitle = isLightTheme ? dic.darkThemeTitle : dic.lightThemeTitle;

  return (
    <>
      <header style={headerStyle}>
        <div className="wrapper header">
          <div className="header__logo">StickIt</div>
          <div className="header__menu">
            <IconButton
              extraClassName="header__menu__btn"
              icon="plus"
              onClick={AddSticker}
              title={dic.addNewStickerAlt}
            />
            <button type="button" className="header__menu__btn" onClick={onToggleLanguage}>
              {language}
            </button>
            <IconButton
              extraClassName="header__menu__btn"
              icon={toggleThemeIcon}
              onClick={handleToggleTheme}
              title={toggleThemeIconTitle}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
