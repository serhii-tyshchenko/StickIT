import { Header, Footer, StickerList } from 'components';
import { StoreProvider } from 'store';

import './App.scss';

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
