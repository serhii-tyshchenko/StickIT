import { StickerListItem } from './StickerListItem';

import { stickerListPropTypes, stickerListDefaultProps } from './StickerList.props';

import './StickerList.scss';

function StickerList({ data, pinned }) {
  if (!data || !data.length) {
    return null;
  }
  const componentClassName = `sticker-list${pinned ? ' sticker-list--pinned' : ''}`;

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
