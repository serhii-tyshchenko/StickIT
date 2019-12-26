import React, { useState, useContext } from 'react';
import { GithubPicker } from 'react-color';
import { LangContext } from '../../../contexts/LangContext';

export const StickerListItem = ({ sticker, editSticker, removeSticker }) => {
  const { language, en, ua } = useContext(LangContext);
  const localization = language === 'en' ? en : ua;
  const initialState = {
    id: sticker.id,
    title: sticker.title || 'Untitled',
    text: sticker.text || 'Start typing...',
    color: sticker.color || '#fff',
    showColorPicker: false
  };
  const [state, setState] = useState(initialState);
  const { id, title, text, color, showColorPicker } = state;

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    editSticker(id, name, value);
  };
  const handleColorClick = () => {
    setState({ ...state, showColorPicker: !showColorPicker });
  };
  const handleColorChange = color => {
    setState({ ...state, color: color.hex });
    editSticker(id, 'color', color.hex);
  };
  return (
    <li className="stickers__item sticker" style={{ backgroundColor: color }}>
      <div className="sticker__header">
        <input
          type="text"
          value={title}
          name="title"
          className="sticker__title"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="sticker__controls">
          <button
            className="sticker__btn icon-color-adjust"
            onClick={handleColorClick}
            title={localization.colorPickerTT}
          >
            {showColorPicker ? (
              <GithubPicker color={color} onChange={handleColorChange} />
            ) : null}
          </button>
          <button
            onClick={() => removeSticker(id)}
            title={localization.removeStickerTT}
            className="sticker__btn sticker__remove icon-trash-empty"
          ></button>
        </div>
      </div>
      <div className="sticker__details">
        <textarea
          name="text"
          onChange={handleChange}
          onBlur={handleBlur}
          className="sticker__text"
          type="textarea"
          value={text}
        />
      </div>
    </li>
  );
};
