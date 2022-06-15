import { v4 as uuidv4 } from 'uuid';

import { ADD_STICKER, EDIT_STICKER, REMOVE_STICKER } from '../action-types';

const createNewSticker = () => ({
  id: uuidv4(),
  title: '',
  text: '',
  color: '#FEF3BD',
  isPinned: false,
});

export const editSticker = (id, key, value) => ({
  type: EDIT_STICKER,
  payload: { id, key, value },
});

export const addSticker = () => ({ type: ADD_STICKER, payload: createNewSticker() });

export const removeSticker = (id) => ({ type: REMOVE_STICKER, payload: id });
