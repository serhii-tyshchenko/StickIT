import { useContext } from 'react';
import { StickerListItem } from './StickerListItem';
import { Store } from 'store';

import './StickerList.scss';

export const StickerList = () => {
  const { stickers } = useContext(Store);
  const pinnedStickers = stickers.filter(sticker => sticker.isPinned);
  const unPinnedStickers = stickers.filter(sticker => !sticker.isPinned);

  return (
    <>
      {pinnedStickers?.length && (
        <ul className="sticker-list sticker-list--pinned">
          {pinnedStickers.map(item => (
            <StickerListItem sticker={item} key={item.id} />
          ))}
        </ul>
      )}
      <ul className="sticker-list">
        {unPinnedStickers.map(item => (
          <StickerListItem sticker={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
