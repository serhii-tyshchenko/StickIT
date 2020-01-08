import { ADD_STICKER, EDIT_STICKER, REMOVE_STICKER } from '../action-types';
import db from '../../services/db';
import uuid from 'uuid/v1';

export const editSticker = async (dispatch, uid, id, key, value) => {
  if (uid) await db.editSticker(uid, { id, [key]: value });
  dispatch({ type: EDIT_STICKER, payload: { id, key, value } });
};

export const addSticker = async (dispatch, uid) => {
  const newSticker = {
    id: uuid(),
    title: '',
    text: '',
    color: '#fff',
    isPinned: false
  };
  if (uid) await db.addSticker(uid, newSticker);
  dispatch({ type: ADD_STICKER, payload: newSticker });
};

export const removeSticker = async (dispatch, uid, id) => {
  if (uid) await db.deleteSticker(uid, id);
  dispatch({ type: REMOVE_STICKER, payload: id });
};
