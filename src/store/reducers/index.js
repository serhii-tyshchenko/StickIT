import {
  ADD_STICKER,
  EDIT_STICKER,
  REMOVE_STICKER,
  TOGGLE_THEME,
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_ERROR
} from '../action-types';

const rootReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_STICKER:
      return {
        ...state,
        stickers: [payload, ...state.stickers]
      };

    case EDIT_STICKER:
      const { id, key, value } = payload;
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
        stickers: state.stickers.filter(sticker => sticker.id !== payload)
      };

    case TOGGLE_THEME:
      return {
        ...state,
        theme: { ...state.theme, isLightTheme: !payload }
      };

    case SIGN_IN:
      const {
        user,
        stickers,
        settings: { isLightTheme, language }
      } = payload;
      return {
        ...state,
        user: { ...user, isLogged: true },
        stickers,
        theme: { ...state.theme, isLightTheme },
        localization: { ...state.localization, language },
        authError: null
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        authError: payload
      };

    case SIGN_OUT:
      return payload;

    default:
      return state;
  }
};

export { rootReducer };
