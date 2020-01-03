import React, { useContext } from 'react';
import { StickerListItem } from './StickerListItem';
import { Store } from '../../store';
import './StickerList.scss';

export const StickerList = () => {
  const { stickers } = useContext(Store);
  return (
    <ul className="sticker-list">
      {stickers.map(item => (
        <StickerListItem sticker={item} key={item.id} />
      ))}
    </ul>
  );
};
