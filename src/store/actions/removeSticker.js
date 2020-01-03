import { REMOVE_STICKER } from '../action-types';
import db from '../../services/db/firebase';

export const removeSticker = async (dispatch, uid, id) => {
  await db.deleteSticker(uid, id);
  dispatch({ type: REMOVE_STICKER, payload: id });
};
