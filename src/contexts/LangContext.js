import React, { createContext, Component } from 'react';

const LangContext = createContext();

class LangContextProvider extends Component {
  state = {
    language: 'en',
    en: {
      titlePH: 'Enter title...',
      textPH: 'Enter text...',
      colorPickerTT: 'Change sticker color',
      addStickerTT: 'Add sticker',
      removeStickerTT: 'Remove sticker'
    },
    ua: {
      titlePH: 'Введіть назву...',
      textPH: 'Введіть текст...',
      colorPickerTT: 'Змінити колір стікера',
      addStickerTT: 'Додати стіккер',
      removeStickerTT: 'Видалити стікер'
    }
  };
  toggleLanguage = lang => {
    this.setState({ language: lang });
  };
  render() {
    return (
      <LangContext.Provider
        value={{ ...this.state, toggleLanguage: this.toggleLanguage }}
      >
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

export { LangContext, LangContextProvider };
