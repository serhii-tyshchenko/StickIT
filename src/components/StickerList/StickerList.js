import React from 'react';

import { StickerListItem } from './StickerListItem';
import StickerListAdd from './StickerListAdd/StickerListAdd';
export const StickerList = props => {
    const { stickers, editSticker, removeSticker, addSticker } = props;
    return (
        <div className="stickers">
            <ul className="stickers__list">
                {stickers.map(item => (
                    <StickerListItem
                        sticker={item}
                        key={item.id}
                        editSticker={editSticker}
                        removeSticker={removeSticker}
                    />
                ))}
                <StickerListAdd addSticker={addSticker} />
            </ul>
        </div>
    );
};
