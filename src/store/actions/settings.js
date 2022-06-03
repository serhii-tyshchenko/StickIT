import { TOGGLE_THEME, TOGGLE_LANGUAGE } from '../action-types';

export const toggleTheme = (theme) => ({
  type: TOGGLE_THEME,
  payload: theme
});

export const toggleLanguage = (lang) => ({
  type: TOGGLE_LANGUAGE,
  payload: lang
});
