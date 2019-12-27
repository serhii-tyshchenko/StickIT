import React, { Component } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { StickerList } from './components/StickerList';
import * as db from '../src/services/db';
import {
  ThemeContextProvider,
  LangContextProvider,
  StoreContextProvider
} from './contexts';
import { AuthProvider } from './contexts/AuthContext';
// import getDatafromAPI from '../src/services/api';

import './App.scss';
import './assets/fontello/css/fontello.css';

class App extends Component {
  state = {
    stickers: []
  };

  componentDidMount() {
    this.setState(db.getStateFromDB());
  }

  componentDidUpdate() {
    db.saveStateToDB(this.state);
  }

  addSticker = sticker => {
    this.setState({
      stickers: [...this.state.stickers, sticker]
    });
  };
  removeSticker = id => {
    this.setState({
      stickers: [...this.state.stickers.filter(item => item.id !== id)]
    });
  };

  editSticker = (id, key, value) => {
    this.setState({
      stickers: this.state.stickers.map(sticker => {
        if (sticker.id === id) {
          sticker[key] = value;
        }
        return sticker;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <StoreContextProvider>
          <AuthProvider>
            <LangContextProvider>
              <ThemeContextProvider>
                <Header />
                <main className="wrapper">
                  <StickerList
                    removeSticker={this.removeSticker}
                    editSticker={this.editSticker}
                    addSticker={this.addSticker}
                    stickers={this.state.stickers}
                  />
                </main>
                <Footer />
              </ThemeContextProvider>
            </LangContextProvider>
          </AuthProvider>
        </StoreContextProvider>
      </div>
    );
  }
}

export default App;
