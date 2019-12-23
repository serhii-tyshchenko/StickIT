import React, { Component } from 'react';
import { GithubPicker } from 'react-color';
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
        if (e.key === 'Enter') {
            this.props.editSticker(
                this.props.sticker.id,
                'title',
                e.target.value
            );
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

    handleClose = () => {
        this.setState({ showColorPicker: false });
    };
    render() {
        const { id, text } = this.props.sticker;
        const title = this.state.title;
        const color = this.state.color;

        return (
            <li
                className="stickers__item sticker"
                style={{ backgroundColor: color }}
            >
                <div className="sticker__header">
                    <input
                        type="text"
                        value={this.state.title}
                        name="title"
                        className="sticker__title"
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        onBlur={this.props.editSticker.bind(
                            this,
                            id,
                            'title',
                            title
                        )}
                    />
                    <div className="sticker__controls">
                        <button
                            className="sticker__btn icon-color-adjust"
                            onClick={this.handleClick}
                            title="Change sticker color"
                        >
                            {this.state.showColorPicker ? (
                                <GithubPicker
                                    color={this.state.color}
                                    onChange={this.handleColorChange}
                                />
                            ) : null}
                        </button>
                        <button
                            onClick={this.props.removeSticker.bind(this, id)}
                            title="Remove sticker"
                            className="sticker__btn sticker__remove icon-trash-empty"
                        ></button>
                    </div>
                </div>
                <div className="sticker__details">
                    <textarea
                        name="text"
                        onChange={this.handleChange}
                        onBlur={this.props.editSticker.bind(
                            this,
                            id,
                            'text',
                            this.state.text
                        )}
                        className="sticker__text"
                        type="textarea"
                        value={this.state.text}
                    />
                </div>
            </li>
        );
    }
}
