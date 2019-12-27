import React, { useContext } from 'react';

import { StickerListItem } from './StickerListItem';
import StickerListAdd from './StickerListAdd/StickerListAdd';
import { StoreContext } from '../../contexts';

export const StickerList = props => {
  // const { stickers, editSticker, removeSticker, addSticker } = props;
  const { stickers } = useContext(StoreContext);
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
