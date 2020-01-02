import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { StickerList } from './components/StickerList';
import { StoreProvider } from './store';

import './App.scss';
import './assets/fontello/css/fontello.css';

const App = () => (
  <div className="App">
    <StoreProvider>
      <Header />
      <main className="wrapper">
        <StickerList />
      </main>
      <Footer />
    </StoreProvider>
  </div>
);

export default App;
