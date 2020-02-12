import { TOGGLE_THEME } from '../action-types';

export const toggleTheme = isLightTheme => {
  return { type: TOGGLE_THEME, payload: isLightTheme };
};
