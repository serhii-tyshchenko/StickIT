import { useState, useCallback } from 'react';
import { useLocalization } from 'hooks';

import { ColorPicker } from 'components/ColorPicker';
import { IconButton } from 'components/IconButton';
import useSticker from '../useSticker';

import { NAME_SPACE } from './constants';

import { stickerListItemPropTypes } from './StickerListItem.props';

import './StickerListItem.scss';

function StickerListItem({ sticker }) {
  const { color, isPinned, title, text } = sticker;
  const [state, setState] = useState({ title, text });
  const handleChange = useCallback(
    (ev) => setState({ ...state, [ev.target.name]: ev.target.value }),
    [state]
  );

  const dic = useLocalization();

  const {
    isColorPickerOpen,
    toggleColorPicker,
    handleRemoveStickerClick,
    handleBlur,
    handlePinStickerClick,
    handleColorChange,
  } = useSticker(sticker);

  return (
    <li className={NAME_SPACE} style={{ backgroundColor: color }}>
      <header className={`${NAME_SPACE}__header`}>
        <input
          className={`${NAME_SPACE}__title`}
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={dic.stickerTitlePlaceholder}
        />
        <div className={`${NAME_SPACE}__controls`}>
          <IconButton
            extraClassName={`${NAME_SPACE}__btn`}
            icon="color-adjust"
            onClick={toggleColorPicker}
            title={dic.changeColorAlt}
          />
          <IconButton
            extraClassName={`${NAME_SPACE}__btn`}
            icon={isPinned ? 'pin' : 'pin-outline'}
            onClick={handlePinStickerClick}
            title={dic.pinStickerAlt}
          />
          <IconButton
            extraClassName={`${NAME_SPACE}__btn`}
            icon="trash-empty"
            onClick={handleRemoveStickerClick}
            title={dic.removeStickerAlt}
          />
        </div>
        <ColorPicker opened={isColorPickerOpen} color={color} onChange={handleColorChange} />
      </header>
      <textarea
        className={`${NAME_SPACE}__text`}
        name="text"
        onChange={handleChange}
        onBlur={handleBlur}
        type="textarea"
        value={state.text}
        placeholder={dic.stickerTextPlaceholder}
      />
    </li>
  );
}

StickerListItem.propTypes = stickerListItemPropTypes;

export { StickerListItem };
