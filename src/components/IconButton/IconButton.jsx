import { iconButtonPropTypes, iconButtonDefaultProps } from './IconButton.props';

const IconButton = ({ icon, onClick, extraClassName, title, children }) => {

  const componentClassName = `icon-${icon} ${extraClassName}`;

  return (
    <button
      className={componentClassName}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
};

IconButton.propTypes = iconButtonPropTypes;
IconButton.defaultProps = iconButtonDefaultProps;

export { IconButton };
