import {
  ADD_STICKER,
  EDIT_STICKER,
  REMOVE_STICKER,
  TOGGLE_THEME,
  TOGGLE_LANGUAGE,
} from '../action-types';

const rootReducer = (state, action) => {
  const { type, payload } = action;
  const { id, key, value } = payload;
  switch (type) {
    case ADD_STICKER:
      return {
        ...state,
        stickers: [payload, ...state.stickers],
      };

    case EDIT_STICKER:
      return {
        ...state,
        stickers: state.stickers.map((sticker) => {
          if (sticker.id === id) {
            // eslint-disable-next-line no-param-reassign
            sticker[key] = value;
          }
          return sticker;
        }),
      };

    case REMOVE_STICKER:
      return {
        ...state,
        stickers: state.stickers.filter((sticker) => sticker.id !== payload),
      };

    case TOGGLE_THEME:
      return {
        ...state,
        theme: payload,
      };

    case TOGGLE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };

    default:
      return state;
  }
};

export { rootReducer };
