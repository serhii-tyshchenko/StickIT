import React, { Component } from 'react';
import { GithubPicker } from 'react-color';
import { LangContext } from '../../../contexts/LangContext';
export class StickerListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.sticker.title || 'Untitled',
      text: this.props.sticker.text || 'Start typing...',
      color: this.props.sticker.color || '#fff',
      showColorPicker: false
    };
  }
  handleChange = e => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleKeyDown = e => {
    const id = this.props.sticker.id;
    if (e.key === 'Enter') {
      this.props.editSticker(id, 'title', this.state.title);
    }
  };
  handleColorChange = color => {
    const newColor = Object.values(color.hex).join('');
    const id = this.props.sticker.id;
    this.setState({ color: newColor });
    this.props.editSticker(id, 'color', newColor);
  };
  handleClick = () => {
    this.setState({ showColorPicker: !this.state.showColorPicker });
  };
  handleBlur = e => {
    const target = e.target;
    const id = this.props.sticker.id;
    this.props.editSticker(id, target.name, target.value);
  };
  handleClose = () => {
    this.setState({ showColorPicker: false });
  };
  render() {
    const {
      removeSticker,
      sticker: { id }
    } = this.props;
    const { title, text, color, showColorPicker } = this.state;

    return (
      <LangContext.Consumer>
        {langContext => {
          const { language, en, ua } = langContext;
          const localization = language === 'en' ? en : ua;
          return (
            <li
              className="stickers__item sticker"
              style={{ backgroundColor: color }}
            >
              <div className="sticker__header">
                <input
                  type="text"
                  value={title}
                  name="title"
                  className="sticker__title"
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  onBlur={this.handleBlur}
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
                    onClick={removeSticker.bind(this, id)}
                    title={localization.removeStickerTT}
                    className="sticker__btn sticker__remove icon-trash-empty"
                  ></button>
                </div>
              </div>
              <div className="sticker__details">
                <textarea
                  name="text"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  className="sticker__text"
                  type="textarea"
                  value={text}
                />
              </div>
            </li>
          );
        }}
      </LangContext.Consumer>
    );
  }
}
