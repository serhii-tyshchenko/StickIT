import { EDIT_STICKER } from '../action-types';
import db from '../../services/db/firebase';

export const editSticker = async (dispatch, uid, id, key, value) => {
  await db.editSticker(uid, { id, [key]: value });
  dispatch({ type: EDIT_STICKER, payload: { id, key, value } });
};
