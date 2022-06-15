import PropTypes from 'prop-types';
import { PRDEFINED_COLORS } from './constants';

export const colorPickerPropTypes = {
  opened: PropTypes.bool,
  color: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired
};

export const colorPickerDefaultProps = {
  opened: false,
  colors: PRDEFINED_COLORS
};
