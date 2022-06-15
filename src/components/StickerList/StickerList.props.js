import PropTypes from 'prop-types';

export const stickerListPropTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isPinned: PropTypes.bool.isRequired,
    })
  ).isRequired,
  pinned: PropTypes.bool,
};

export const stickerListDefaultProps = {
  pinned: false,
};
