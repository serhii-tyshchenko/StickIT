import { useContext, useCallback, memo } from 'react';
import { Store } from 'store';
import { useLocalization } from 'hooks';
import { addSticker, toggleTheme, toggleLanguage } from 'store/actions';

import { IconButton } from 'components/IconButton';

import './Header.scss';

const themeIconConfig = {
  light: 'moon',
  dark: 'sun',
};

const themeToggleConfig = {
  light: 'dark',
  dark: 'light',
};

function Header() {
  const { theme, language, dispatch } = useContext(Store);

  const dic = useLocalization();

  const onToggleLanguage = useCallback(
    () => dispatch(toggleLanguage(language === 'en' ? 'ua' : 'en')),
    [dispatch, language]
  );

  const handleToggleTheme = useCallback(
    () => dispatch(toggleTheme(themeToggleConfig[theme])),
    [dispatch, theme]
  );

  const AddSticker = () => dispatch(addSticker());

  const toggleThemeIconTitle = theme === 'light' ? dic.darkThemeTitle : dic.lightThemeTitle;

  return (
    <header className="header">
      <div className="wrapper header-content">
        <div className="header-logo">StickIt</div>
        <div className="header-menu">
          <IconButton
            extraClassName="header-menu__btn"
            icon="plus"
            onClick={AddSticker}
            title={dic.addNewStickerAlt}
          />
          <button type="button" className="header-menu__btn" onClick={onToggleLanguage}>
            {language}
          </button>
          <IconButton
            extraClassName="header-menu__btn"
            icon={themeIconConfig[theme]}
            onClick={handleToggleTheme}
            title={toggleThemeIconTitle}
          />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
