import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'store';

import App from './App';

import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
