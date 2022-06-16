/* eslint-disable react/no-array-index-key */
import { getClassName } from 'utils';
import { colorPickerPropTypes, colorPickerDefaultProps } from './ColorPicker.props';
import { NAME_SPACE } from './constants';

import './ColorPicker.scss';

function ColorPicker({ opened, colors, color, onChange }) {
  const handleChange = (ev) => onChange(ev.target.value);

  if (!opened) {
    return null;
  }

  return (
    <div className={NAME_SPACE}>
      {colors.map((itemColor, ind) => (
        <label
          className={getClassName(`${NAME_SPACE}__item`, {
            [`${NAME_SPACE}__item--selected`]: itemColor === color,
          })}
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
