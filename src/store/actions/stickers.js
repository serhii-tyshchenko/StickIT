import { ADD_STICKER, EDIT_STICKER, REMOVE_STICKER } from '../action-types';
import {v4 as uuidv4} from 'uuid';

export const editSticker = (id, key, value) => ({
  type: EDIT_STICKER,
  payload: { id, key, value }
});
export const addSticker = () => {
  const newSticker = {
    id: uuidv4(),
    title: '',
    text: '',
    color: '#fef3bd',
    isPinned: false
  };
  return { type: ADD_STICKER, payload: newSticker };
};

export const removeSticker = id => ({ type: REMOVE_STICKER, payload: id });
