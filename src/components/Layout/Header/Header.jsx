import { useContext, useCallback, memo } from 'react';
import { Store } from 'store';
import { addSticker, toggleTheme, toggleLanguage } from 'store/actions';
import { useLocalization } from 'hooks';
import { IconButton } from 'components';

import { NAME_SPACE, themeIconConfig, themeToggleConfig } from './constants';

import './Header.scss';

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
    <header className={NAME_SPACE}>
      <div className="wrapper header-content">
        <div className={`${NAME_SPACE}-logo`}>StickIt</div>
        <div className={`${NAME_SPACE}-menu`}>
          <IconButton
            extraClassName={`${NAME_SPACE}-menu__btn`}
            icon="plus"
            onClick={AddSticker}
            title={dic.addNewStickerAlt}
          />
          <button type="button" className={`${NAME_SPACE}-menu__btn`} onClick={onToggleLanguage}>
            {language}
          </button>
          <IconButton
            extraClassName={`${NAME_SPACE}-menu__btn`}
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
