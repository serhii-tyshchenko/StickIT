import React, { useContext } from 'react';
import { Store } from '../../../store';

const Footer = () => {
  const { theme } = useContext(Store);
  const { isLightTheme, light, dark } = theme;
  const footerStyle = isLightTheme ? light : dark;
  return (
    <footer style={footerStyle}>
      <div className="wrapper">© Serhii Tyshchenko, 2020</div>
    </footer>
  );
};

export { Footer };
