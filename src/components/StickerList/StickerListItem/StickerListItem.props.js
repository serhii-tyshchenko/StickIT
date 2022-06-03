import PropTypes from 'prop-types';

export const stickerListItemPropTypes = {
  sticker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isPinned: PropTypes.bool.isRequired
  }).isRequired
};
