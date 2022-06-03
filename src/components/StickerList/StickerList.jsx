import { StickerListItem } from './StickerListItem';

import './StickerList.scss';

export const StickerList = ({ data, pinned }) => {
  if (!data || !data.length) {
    return null
  }
  const componentClassName = `sticker-list${pinned ? ' sticker-list--pinned' : ''}`;

  return (
    <ul className={componentClassName}>
      {data.map(item => (
        <StickerListItem sticker={item} key={item.id} />
      ))}
    </ul>
  );
};
