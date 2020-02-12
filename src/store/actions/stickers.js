import { ADD_STICKER, EDIT_STICKER, REMOVE_STICKER } from '../action-types';
import uuid from 'uuid/v1';

export const editSticker = (id, key, value) => ({
  type: EDIT_STICKER,
  payload: { id, key, value }
});
export const addSticker = () => {
  const newSticker = {
    id: uuid(),
    title: '',
    text: '',
    color: '#fef3bd',
    isPinned: false
  };
  return { type: ADD_STICKER, payload: newSticker };
};

export const removeSticker = id => ({ type: REMOVE_STICKER, payload: id });
