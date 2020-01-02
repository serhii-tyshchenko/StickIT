import React, { useContext } from 'react';

import { StickerListItem } from './StickerListItem';
import { Store } from '../../store';

export const StickerList = () => {
  const { stickers } = useContext(Store);
  return (
    <div className="stickers">
      <ul className="stickers__list">
        {stickers.map(item => (
          <StickerListItem sticker={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
