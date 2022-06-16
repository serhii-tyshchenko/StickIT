import { useContext, useEffect } from 'react';
import { Store } from 'store';
import { Header, Footer, StickerListView } from 'components';

function App() {
  const { theme } = useContext(Store);

  useEffect(() => document.documentElement.setAttribute('data-theme', theme), [theme]);

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
