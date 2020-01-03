import React, { useState, useContext } from 'react';
import { GithubPicker } from 'react-color';
import { Store } from '../../../store';
import { removeSticker, editSticker } from '../../../store/actions';
import './StickerListItem.scss';

const StickerListItem = ({ sticker }) => {
  const { user, dispatch } = useContext(Store);
  const { id, color, isPinned } = sticker;
  const initialState = {
    title: sticker.title,
    text: sticker.text,
    showColorPicker: false
  };
  const [state, setState] = useState(initialState);
  const { title, text, showColorPicker } = state;

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleBlur = e => {
    const { name, value } = e.target;
    handleEdit(name, value);
  };
  const handleRemoveClick = () => {
    removeSticker(dispatch, user.uid, id);
  };
  const handleColorClick = () => {
    setState({ ...state, showColorPicker: !showColorPicker });
  };
  const handleColorChange = color => {
    handleEdit('color', color.hex);
  };
  const handlePinClick = () => {
    handleEdit('isPinned', !isPinned);
  };
  const handleEdit = (key, value) => {
    editSticker(dispatch, user.uid, id, key, value);
  };
  const pinButtonClass = isPinned
    ? 'sticker__btn icon-pin'
    : 'sticker__btn icon-pin-outline';
  return (
    <li className="stickers__item sticker" style={{ backgroundColor: color }}>
      <div className="sticker__header">
        <input
          className="sticker__title"
          type="text"
          value={title}
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter title..."
        />
        <div className="sticker__controls">
          <button
            className="sticker__btn icon-color-adjust"
            onClick={handleColorClick}
          >
            {showColorPicker ? (
              <div style={{ position: 'absolute', top: '150%', left: '0' }}>
                <GithubPicker color={color} onChange={handleColorChange} />
              </div>
            ) : null}
          </button>
          <button className={pinButtonClass} onClick={handlePinClick} />
          <button
            className="sticker__btn icon-trash-empty"
            onClick={handleRemoveClick}
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
          placeholder="Enter text..."
        />
      </div>
    </li>
  );
};

export { StickerListItem };
