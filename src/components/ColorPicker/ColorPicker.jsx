import { GithubPicker } from 'react-color';
import { colorPickerPropTypes } from './ColorPicker.props';

const ColorPicker = ({ color, handleColorChange }) => {
  return (
    <div style={{ position: 'absolute', top: '150%', right: '-5px' }}>
      <GithubPicker
        color={color}
        onChange={handleColorChange}
        triangle="top-right"
        colors={[
          '#FCCB00',
          '#EB9694',
          '#FAD0C3',
          '#FEF3BD',
          '#C1E1C5',
          '#BEDADC',
          '#C4DEF6'
        ]}
      />
    </div>
  );
};

ColorPicker.propTypes = colorPickerPropTypes;


export { ColorPicker };
