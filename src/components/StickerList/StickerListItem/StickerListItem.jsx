import { useState, useContext } from 'react';
import { Store } from 'store';
import { removeSticker, editSticker } from 'store/actions';
import { default as dictionary } from 'localization';

import { ColorPicker } from 'components/ColorPicker';
import { IconButton } from 'components/IconButton';

import { stickerListItemPropTypes } from './StickerListItem.props';

import './StickerListItem.scss';

const StickerListItem = ({ sticker }) => {
  const {
    dispatch,
    language,
  } = useContext(Store);
  const { id, color, isPinned } = sticker;
  const initialState = {
    title: sticker.title,
    text: sticker.text,
    showColorPicker: false
  };

  const dic = dictionary[language];

  const [state, setState] = useState(initialState);
  const { title, text, showColorPicker } = state;
  const pinButtonIcon = isPinned ? 'pin' : 'pin-outline';

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
            placeholder={dic.stickerTitlePlaceholder}
          />
          <div className="sticker__controls">
            <IconButton
              extraClassName="sticker__btn"
              icon="color-adjust"
              onClick={handleColorClick}
              title={dic.changeColorAlt}
            >
              {showColorPicker ? (
                <ColorPicker
                  color={color}
                  handleColorChange={handleColorChange}
                />
              ) : null}
            </IconButton>
            <IconButton
              extraClassName="sticker__btn"
              icon={pinButtonIcon}
              onClick={handlePinClick}
              title={dic.pinStickerAlt}
            />
            <IconButton
              extraClassName="sticker__btn"
              icon="trash-empty"
              onClick={handleRemoveClick}
              title={dic.removeStickerAlt}
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
            placeholder={dic.stickerTextPlaceholder}
          />
        </div>
      </div>
    </li>
  );
};

StickerListItem.propTypes = stickerListItemPropTypes;


export { StickerListItem };
