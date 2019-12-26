import React, { Component } from 'react';
import { GithubPicker } from 'react-color';
import uuid from 'uuid/v1';
import { LangContext } from '../../../contexts/LangContext';

export default class StickerListAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      color: '#fff',
      showColorPicker: false
    };
  }
  addSticker = () => {
    const id = uuid();
    const newSticker = {
      id: id,
      title: this.state.title,
      text: this.state.text,
      color: this.state.color
    };
    this.props.addSticker(newSticker);
    this.setState({
      title: '',
      text: '',
      color: '#fff',
      showColorPicker: false
    });
  };
  handleChange = e => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  handleClick = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  };
  handleColorChange = color => {
    const newColor = Object.values(color.hex).join('');
    this.setState({ color: newColor });
  };
  render() {
    const { title, text, color, showColorPicker } = this.state;

    return (
      <LangContext.Consumer>
        {langContext => {
          const { language, en, ua } = langContext;
          const localization = language === 'en' ? en : ua;
          return (
            <li
              style={{ backgroundColor: color }}
              className="stickers__item sticker"
            >
              <div className="sticker__header">
                <input
                  type="text"
                  name="title"
                  placeholder={localization.titlePH}
                  className="sticker__title"
                  value={title}
                  onChange={this.handleChange}
                />
                <div className="sticker__controls">
                  <button
                    className="sticker__btn icon-color-adjust"
                    onClick={this.handleClick}
                    title={localization.colorPickerTT}
                  >
                    {showColorPicker ? (
                      <GithubPicker
                        color={color}
                        onChange={this.handleColorChange}
                      />
                    ) : null}
                  </button>
                  <button
                    title={localization.addStickerTT}
                    className="sticker__btn sticker__add icon-plus"
                    onClick={this.addSticker}
                  />
                </div>
              </div>
              <div className="sticker__details">
                <textarea
                  name="text"
                  className="sticker__text"
                  type="textarea"
                  placeholder={localization.textPH}
                  value={text}
                  onChange={this.handleChange}
                />
              </div>
            </li>
          );
        }}
      </LangContext.Consumer>
    );
  }
}
