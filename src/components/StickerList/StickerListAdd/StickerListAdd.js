import React, { useContext } from 'react';
import uuid from 'uuid/v1';
import { StoreContext } from '../../../contexts';
const StickerListAdd = () => {
  const { dispatch } = useContext(StoreContext);
  const handleClick = () => {
    dispatch({
      type: 'ADD_STICKER',
      payload: {
        id: uuid(),
        title: '',
        text: '',
        color: '#fff'
      }
    });
  };
  return (
    <button className="sticker sticker--add" onClick={handleClick}>
      +
    </button>
  );
};
export default StickerListAdd;
