import {
  ADD_STICKER,
  EDIT_STICKER,
  REMOVE_STICKER,
  TOGGLE_THEME,
  SIGN_IN,
  SIGN_OUT
} from '../action-types';

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_STICKER:
      return {
        ...state,
        stickers: [action.payload, ...state.stickers]
      };

    case EDIT_STICKER:
      const { id, key, value } = action.payload;
      return {
        ...state,
        stickers: state.stickers.map(sticker => {
          if (sticker.id === id) {
            sticker[key] = value;
          }
          return sticker;
        })
      };

    case REMOVE_STICKER:
      return {
        ...state,
        stickers: state.stickers.filter(item => item.id !== action.payload)
      };

    case TOGGLE_THEME:
      return {
        ...state,
        theme: { ...state.theme, isLightTheme: !action.payload }
      };

    case SIGN_IN:
      const { user, stickers, settings } = action.payload;
      const { isLightTheme, language } = settings;
      return {
        ...state,
        user: { ...user, isLogged: true },
        stickers,
        theme: { ...state.theme, isLightTheme: isLightTheme },
        localization: { ...state.localization, language: language }
      };

    case SIGN_OUT:
      return action.payload;

    default:
      return state;
  }
};

export { rootReducer };
