import React, { useContext } from 'react';

import { StickerListItem } from './StickerListItem';
import StickerListAdd from './StickerListAdd/StickerListAdd';
import { Store } from '../../store';

export const StickerList = () => {
  const { stickers } = useContext(Store);
  return (
    <div className="stickers">
      <ul className="stickers__list">
        <StickerListAdd />
        {stickers.map(item => (
          <StickerListItem sticker={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
