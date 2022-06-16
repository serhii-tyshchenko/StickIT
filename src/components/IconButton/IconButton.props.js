import PropTypes from 'prop-types';

export const iconButtonPropTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  extraClassName: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

export const iconButtonDefaultProps = {
  extraClassName: '',
  title: '',
  children: null,
};
