import React, { useState, useContext } from 'react';
import { GithubPicker } from 'react-color';
import { StoreContext } from '../../../contexts';

export const StickerListItem = ({ sticker }) => {
  const { dispatch } = useContext(StoreContext);

  const initialState = {
    ...sticker,
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
    dispatch({
      type: 'EDIT_STICKER',
      payload: {
        id,
        name,
        value
      }
    });
  };
  const handleRemoveClick = e => {
    dispatch({
      type: 'REMOVE_STICKER',
      payload: {
        id
      }
    });
  };
  const handleColorClick = () => {
    setState({ ...state, showColorPicker: !showColorPicker });
  };
  const handleColorChange = color => {
    setState({ ...state, color: color.hex });
    dispatch({
      type: 'EDIT_STICKER',
      payload: {
        id,
        name: 'color',
        value: color.hex
      }
    });
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
          placeholder="Enter title..."
        />
        <div className="sticker__controls">
          <button
            className="sticker__btn icon-color-adjust"
            onClick={handleColorClick}
          >
            {showColorPicker ? (
              <GithubPicker color={color} onChange={handleColorChange} />
            ) : null}
          </button>
          <button
            onClick={handleRemoveClick}
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
          placeholder="Enter text..."
        />
      </div>
    </li>
  );
};
