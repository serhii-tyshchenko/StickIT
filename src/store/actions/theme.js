import { TOGGLE_THEME } from '../action-types';

export const toggleTheme = isLightTheme => ({
  type: TOGGLE_THEME,
  payload: isLightTheme
});
