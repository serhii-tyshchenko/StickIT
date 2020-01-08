import { SIGN_IN, SIGN_OUT } from '../action-types';
import initialState from '../initial-state';
import db from '../../services/db/firebase';

export const signInGoogle = async dispatch => {
  const response = await db.googleSignin();
  const { uid, email, photoURL } = response.user;
  const stickers = await db.getStickers(uid);
  const settings = (await db.getSettings(uid)) || {
    isLightTheme: false,
    language: 'en'
  };
  dispatch({
    type: SIGN_IN,
    payload: { user: { uid, email, photoURL }, stickers, settings }
  });
};

export const signOut = async dispatch => {
  await db.logout();
  dispatch({
    type: SIGN_OUT,
    payload: initialState
  });
};
