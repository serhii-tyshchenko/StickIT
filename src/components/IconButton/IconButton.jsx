import { memo } from 'react';

import { getClassName } from 'utils';

import { iconButtonPropTypes, iconButtonDefaultProps } from './IconButton.props';

function IconButton({ icon, onClick, extraClassName, title, children }) {
  const componentClassName = getClassName(`icon-${icon}`, extraClassName);

  return (
    <button type="button" className={componentClassName} onClick={onClick} title={title}>
      {children}
    </button>
  );
}

IconButton.propTypes = iconButtonPropTypes;
IconButton.defaultProps = iconButtonDefaultProps;

export default memo(IconButton);
