import { useContext } from 'react';
import { Store } from 'store';
import { Header, Footer, StickerListView } from 'components';

function App() {
  const { theme } = useContext(Store);

  document.documentElement.setAttribute('data-theme', theme);

  return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <StickerListView />
      </main>
      <Footer />
    </div>
  );
}

export default App;
