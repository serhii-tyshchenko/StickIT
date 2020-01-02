import React, { useContext } from 'react';
import uuid from 'uuid/v1';
import { Store } from '../../../store';
import { ADD_STICKER } from '../../../store/action-types';

const StickerListAdd = () => {
  const { dispatch } = useContext(Store);
  const handleClick = () => {
    dispatch({
      type: ADD_STICKER,
      payload: {
        id: uuid(),
        title: '',
        text: '',
        color: '#fff',
        isPinned: false
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
