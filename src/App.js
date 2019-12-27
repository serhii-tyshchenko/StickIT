import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { StickerList } from './components/StickerList';
import { StoreContextProvider } from './contexts';

import './App.scss';
import './assets/fontello/css/fontello.css';

const App = () => (
  <div className="App">
    <StoreContextProvider>
      <Header />
      <main className="wrapper">
        <StickerList />
      </main>
      <Footer />
    </StoreContextProvider>
  </div>
);

export default App;
