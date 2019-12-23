import React from 'react';

import { StickerListItem } from './StickerListItem';

export const StickerList = props => {
    const { stickers, editSticker, removeSticker, setStickerColor } = props;
    return (
        <div className="stickers">
            <ul className="stickers__list">
                {stickers.map(item => (
                    <StickerListItem
                        sticker={item}
                        key={item.id}
                        editSticker={editSticker}
                        removeSticker={removeSticker}
                        setStickerColor={setStickerColor}
                    />
                ))}
            </ul>
        </div>
    );
};
