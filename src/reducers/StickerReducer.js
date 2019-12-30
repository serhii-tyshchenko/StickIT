import {
  ADD_STICKER,
  EDIT_STICKER,
  REMOVE_STICKER,
  TOGGLE_THEME
} from './action-types';
const stickerReducer = (state, action) => {
  switch (action.type) {
    case ADD_STICKER:
      return {
        ...state,
        stickers: [action.payload, ...state.stickers]
      };
    case EDIT_STICKER:
      const { id, name, value } = action.payload;
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
      return {
        ...state,
        stickers: state.stickers.filter(item => item.id !== action.payload.id)
      };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: { ...state.theme, isLightTheme: !state.theme.isLightTheme }
      };
    default:
      return state;
  }
};

export { stickerReducer };
