import { getClassName, isEmpty } from 'utils';

import { StickerListItem } from './StickerListItem';

import { stickerListPropTypes, stickerListDefaultProps } from './StickerList.props';

import './StickerList.scss';

function StickerList({ data, pinned }) {
  const componentClassName = getClassName('sticker-list', { 'sticker-list--pinned': pinned });

  if (isEmpty(data)) {
    return null;
  }

  return (
    <ul className={componentClassName}>
      {data.map((item) => (
        <StickerListItem sticker={item} key={item.id} />
      ))}
    </ul>
  );
}

StickerList.propTypes = stickerListPropTypes;
StickerList.defaultProps = stickerListDefaultProps;

export { StickerList };
