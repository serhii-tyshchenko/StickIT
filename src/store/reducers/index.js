import {
  ADD_STICKER,
  EDIT_STICKER,
  REMOVE_STICKER,
  TOGGLE_THEME,
  SIGN_IN
} from '../action-types';
import uuid from 'uuid/v1';
import db from '../../services/db/firebase';

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_STICKER:
      const newSticker = {
        id: uuid(),
        title: '',
        text: '',
        color: '#fff',
        isPinned: false
      };
      db.addSticker(state.user.uid, newSticker);
      return {
        ...state,
        stickers: [newSticker, ...state.stickers]
      };
    case EDIT_STICKER:
      const { id, name, value } = action.payload;
      db.editSticker(state.user.uid, { id: id, [name]: value });
      return {
        ...state,
        stickers: state.stickers.map(sticker => {
          if (sticker.id === id) {
            sticker[name] = value;
          }
          return sticker;
        })
      };
    case REMOVE_STICKER:
      db.deleteSticker(state.user.uid, action.payload.id);
      return {
        ...state,
        stickers: state.stickers.filter(item => item.id !== action.payload.id)
      };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: { ...state.theme, isLightTheme: !state.theme.isLightTheme }
      };
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        stickers: action.payload.stickers
      };
    default:
      return state;
  }
};

export { rootReducer };
