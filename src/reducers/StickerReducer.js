const stickerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STICKER':
      return {
        ...state,
        stickers: [...state.stickers, action.payload]
      };
    case 'REMOVE_STICKER':
      return {
        ...state,
        stickers: state.stickers.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export { stickerReducer };
