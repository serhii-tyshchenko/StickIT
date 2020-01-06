import React from 'react';
import { GithubPicker } from 'react-color';
const ColorPicker = ({ color, handleColorChange }) => {
  return (
    <div style={{ position: 'absolute', top: '150%', left: '0' }}>
      <GithubPicker color={color} onChange={handleColorChange} />
    </div>
  );
};
export { ColorPicker };
