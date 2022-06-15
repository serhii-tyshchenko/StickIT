/* eslint-disable react/no-array-index-key */
import { colorPickerPropTypes, colorPickerDefaultProps } from './ColorPicker.props';
import { NAME_SPACE } from './constants';

import './ColorPicker.scss';

function ColorPicker({ opened, colors, color, onChange }) {
  if (!opened) {
    return null;
  }

  const handleChange = (ev) => onChange(ev.target.value);

  return (
    <div className={NAME_SPACE}>
      {colors.map((itemColor, ind) => (
        <label
          className={`${NAME_SPACE}__item ${
            itemColor === color ? `${NAME_SPACE}__item--selected` : ''
          }`}
          style={{ backgroundColor: itemColor }}
          key={`color-${ind}`}
          title={itemColor}
          htmlFor={`color-${ind}`}
        >
          <input
            type="radio"
            name="colors"
            id={`color-${ind}`}
            onChange={handleChange}
            value={itemColor}
            checked={itemColor === color}
          />
        </label>
      ))}
    </div>
  );
}

ColorPicker.propTypes = colorPickerPropTypes;
ColorPicker.defaultProps = colorPickerDefaultProps;

export default ColorPicker;
