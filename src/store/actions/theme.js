import { TOGGLE_THEME } from '../action-types';
import db from '../../services/db/firebase';

export const toggleTheme = async (dispatch, uid, isLightTheme) => {
  await db.updateSettings(uid, { isLightTheme: isLightTheme });
  dispatch({ type: TOGGLE_THEME });
};
