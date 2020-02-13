import React, { useState, useContext } from 'react';
import { ColorPicker } from 'components/ColorPicker';
import { Store } from 'store';
import { removeSticker, editSticker } from 'store/actions';
import './StickerListItem.scss';

const StickerListItem = ({ sticker }) => {
  const {
    dispatch,
    localization: { language, en, ua }
  } = useContext(Store);
  const { id, color, isPinned } = sticker;
  const initialState = {
    title: sticker.title,
    text: sticker.text,
    showColorPicker: false
  };

  const lang = language === 'en' ? en : ua;

  const [state, setState] = useState(initialState);
  const { title, text, showColorPicker } = state;
  const pinButtonClass = isPinned
    ? 'sticker__btn icon-pin'
    : 'sticker__btn icon-pin-outline';

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  function handleBlur(e) {
    const { name, value } = e.target;
    handleEdit(name, value);
  }
  function handleRemoveClick() {
    dispatch(removeSticker(id));
  }
  function handleColorClick() {
    setState({ ...state, showColorPicker: !showColorPicker });
  }
  function handleColorChange(color) {
    handleEdit('color', color.hex);
  }
  function handlePinClick() {
    handleEdit('isPinned', !isPinned);
  }
  function handleEdit(key, value) {
    dispatch(editSticker(id, key, value));
  }

  return (
    <li className="stickers__item sticker">
      <div className="sticker__container" style={{ backgroundColor: color }}>
        <div className="sticker__header">
          <input
            className="sticker__title"
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={lang.stickerTitlePlaceholder}
          />
          <div className="sticker__controls">
            <button
              className="sticker__btn icon-color-adjust"
              onClick={handleColorClick}
              title={lang.changeColorAlt}
            >
              {showColorPicker ? (
                <ColorPicker
                  color={color}
                  handleColorChange={handleColorChange}
                />
              ) : null}
            </button>
            <button
              className={pinButtonClass}
              onClick={handlePinClick}
              title={lang.pinStickerAlt}
            />
            <button
              className="sticker__btn icon-trash-empty"
              onClick={handleRemoveClick}
              title={lang.removeStickerAlt}
            />
          </div>
        </div>
        <div className="sticker__details">
          <textarea
            className="sticker__text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            type="textarea"
            value={text}
            placeholder={lang.stickerTextPlaceholder}
          />
        </div>
      </div>
    </li>
  );
};

export { StickerListItem };
