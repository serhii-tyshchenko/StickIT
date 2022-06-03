import { useContext } from 'react';
import { StickerList } from 'components/StickerList';
import { Store } from 'store';

export const StickerListView = () => {
  const { stickers } = useContext(Store);
  const pinnedStickers = stickers.filter(sticker => sticker.isPinned);
  const unPinnedStickers = stickers.filter(sticker => !sticker.isPinned);

  return (
    <>
      <StickerList data={pinnedStickers} pinned />
      <StickerList data={unPinnedStickers} />
    </>
  );
};
