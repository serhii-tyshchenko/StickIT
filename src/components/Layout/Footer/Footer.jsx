import { memo } from 'react';

import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="wrapper">© Serhii Tyshchenko</div>
    </footer>
  );
}

export default memo(Footer);
