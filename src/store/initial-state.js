const initialState = {
  theme: {
    isLightTheme: false,
    dark: { background: '#052b3c', color: '#fff' },
    light: { background: '#fff', color: '#052b3c' }
  },
  localization: {
    language: 'en'
  },
  stickers: [],
  user: {
    uid: null,
    isLogged: false
  },
  authError: null
};
// document.body.style.backgroundColor = initialState.theme.dark.background;

export default initialState;
