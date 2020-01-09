import { SIGN_IN, SIGN_OUT, SIGN_IN_ERROR } from '../action-types';
import initialState from '../initial-state';
import db from '../../services/db/firebase';

export const signInWithEmail = async (dispatch, email, password) => {
  const response = await db.signInWithEmail(email, password);
  if (response.user) {
    const uid = response.user.uid;
    const photoURL =
      'https://www.globalipattorneys.com/storage/images/noavatar.png';
    const stickers = await db.getStickers(uid);
    const settings = (await db.getSettings(uid)) || {
      isLightTheme: false,
      language: 'en'
    };
    dispatch({
      type: SIGN_IN,
      payload: { user: { uid, email, photoURL }, stickers, settings }
    });
  } else {
    dispatch({
      type: SIGN_IN_ERROR,
      payload: response.message
    });
  }
};

export const signInWithGoogle = async dispatch => {
  const response = await db.signInWithGoogle();
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
