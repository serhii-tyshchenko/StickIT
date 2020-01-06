import { ADD_STICKER, EDIT_STICKER, REMOVE_STICKER } from '../action-types';
import db from '../../services/db/firebase';
import uuid from 'uuid/v1';

function setSticker(data) {
  return { type: EDIT_STICKER, payload: data };
}

export const editSticker = async (dispatch, uid, id, key, value) => {
  await db.editSticker(uid, { id, [key]: value });
  dispatch(setSticker({ id, key, value }));
};

export const addSticker = async (dispatch, uid) => {
  const newSticker = {
    id: uuid(),
    title: '',
    text: '',
    color: '#fff',
    isPinned: false
  };
  await db.addSticker(uid, newSticker);
  dispatch({ type: ADD_STICKER, payload: newSticker });
};

export const removeSticker = async (dispatch, uid, id) => {
  await db.deleteSticker(uid, id);
  dispatch({ type: REMOVE_STICKER, payload: id });
};
