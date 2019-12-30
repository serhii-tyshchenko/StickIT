import React, { useState, useContext } from 'react';
import { GithubPicker } from 'react-color';
import { StoreContext } from '../../../contexts';
import { EDIT_STICKER, REMOVE_STICKER } from '../../../reducers/action-types';
export const StickerListItem = ({ sticker }) => {
  const { dispatch } = useContext(StoreContext);
  const initialState = {
    ...sticker,
    showColorPicker: false
  };
  const [state, setState] = useState(initialState);
  let { id, title, text, color, isPinned, showColorPicker } = state;
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleBlur = e => {
    const { name, value } = e.target;
    handleEdit(name, value);
  };
  const handleRemoveClick = e => {
    dispatch({
      type: REMOVE_STICKER,
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
    handleEdit('color', color.hex);
  };
  const handlePinClick = () => {
    isPinned = !isPinned;
    setState({ ...state, isPinned: isPinned });
    handleEdit('isPinned', isPinned);
  };
  const handleEdit = (name, value) => {
    dispatch({
      type: EDIT_STICKER,
      payload: {
        id,
        name,
        value
      }
    });
  };
  const setPinClass = () => {
    return isPinned ? 'sticker__btn icon-pin' : 'sticker__btn icon-pin-outline';
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
          <button onClick={handlePinClick} className={setPinClass()}></button>
          <button
            onClick={handleRemoveClick}
            className="sticker__btn icon-trash-empty"
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
