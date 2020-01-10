import { TOGGLE_THEME } from '../action-types';
import db from '../../services/db';

export const toggleTheme = async (dispatch, uid, isLightTheme) => {
  if (uid) await db.updateSettings(uid, { isLightTheme: !isLightTheme });
  dispatch({ type: TOGGLE_THEME, payload: isLightTheme });
};
