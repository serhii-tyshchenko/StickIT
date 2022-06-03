import { Header, Footer, StickerListView } from 'components';
import { StoreProvider } from 'store';

import './App.scss';

const App = () => (
  <div className="App">
    <StoreProvider>
      <Header />
      <main className="wrapper">
        <StickerListView />
      </main>
      <Footer />
    </StoreProvider>
  </div>
);

export default App;
