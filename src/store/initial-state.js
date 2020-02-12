const initialState = {
  theme: {
    isLightTheme: false,
    dark: { background: '#052b3c', color: '#fff' },
    light: { background: '#fff', color: '#052b3c' }
  },
  localization: {
    language: 'en',
    en: {
      addNewStickerAlt: 'Add new sticker',
      stickerTitlePlaceholder: 'Enter title...',
      stickerTextPlaceholder: 'Enter text...',
      changeColorAlt: 'Change sticker color',
      pinStickerAlt: 'Pin sticker',
      removeStickerAlt: 'Remove sticker',
      lightThemeTitle: 'Switch to light theme',
      darkThemeTitle: 'Switch to dark theme'
    },
    ua: {
      addNewStickerAlt: 'Додати новий стікер',
      stickerTitlePlaceholder: 'Введіть назву...',
      stickerTextPlaceholder: 'Введіть текст...',
      changeColorAlt: 'Змінити колір стікера',
      pinStickerAlt: 'Прикріпити стікер',
      removeStickerAlt: 'Видалити стікер',
      lightThemeTitle: 'Включити світлу тему',
      darkThemeTitle: 'Включити темну тему'
    }
  },
  stickers: []
};
// document.body.style.backgroundColor = initialState.theme.dark.background;

export default initialState;
