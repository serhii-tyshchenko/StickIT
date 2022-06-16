import { useContext, useCallback } from 'react';
import { Store } from 'store';
import { removeSticker, editSticker } from 'store/actions';
import { useToggle } from 'hooks';

const useSticker = (sticker) => {
  const { id, isPinned } = sticker;

  const { dispatch } = useContext(Store);

  const [isColorPickerOpen, toggleColorPicker] = useToggle();

  const handleRemoveStickerClick = useCallback(() => dispatch(removeSticker(id)), [dispatch, id]);

  const updateSticker = useCallback(
    (key, value) => dispatch(editSticker(id, key, value)),
    [dispatch, id]
  );

  const handleBlur = useCallback(
    (ev) => updateSticker(ev.target.name, ev.target.value),
    [updateSticker]
  );

  const handlePinStickerClick = useCallback(() => updateSticker('isPinned', !isPinned), [isPinned]);

  const handleColorChange = useCallback(
    (newColor) => {
      updateSticker('color', newColor);
      toggleColorPicker();
    },
    [updateSticker, toggleColorPicker]
  );

  return {
    isColorPickerOpen,
    toggleColorPicker,
    handleRemoveStickerClick,
    handleBlur,
    handlePinStickerClick,
    handleColorChange,
  };
};

export default useSticker;
