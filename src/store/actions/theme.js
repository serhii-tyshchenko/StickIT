import { TOGGLE_THEME, TOGGLE_LANGUAGE } from '../action-types';

export const toggleTheme = isLightTheme => ({
  type: TOGGLE_THEME,
  payload: isLightTheme
});

export const toggleLanguage = lang => ({
  type: TOGGLE_LANGUAGE,
  payload: lang
});
