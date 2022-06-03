import { useContext } from 'react';
import { Store } from 'store';

const Footer = () => {
  const { theme: { isLightTheme, light, dark } } = useContext(Store);
  const footerStyle = isLightTheme ? light : dark;

  return (
    <footer style={footerStyle}>
      <div className="wrapper">© Serhii Tyshchenko</div>
    </footer>
  );
};

export { Footer };
