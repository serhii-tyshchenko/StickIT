import { memo } from 'react';

import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="wrapper">© Serhii Tyshchenko, v.1.2.2</div>
    </footer>
  );
}

export default memo(Footer);
