import React, { Component } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickerList } from './components/StickerList';

import * as db from '../src/services/db';
// import getDatafromAPI from '../src/services/api';

import './fontello/css/fontello.css';

class App extends Component {
    state = {
        stickers: []
    };

    componentDidMount() {
        this.setState(db.getStateFromDB());
    }

    componentDidUpdate() {
        db.saveStateToDB(this.state);
    }

    addSticker = number => {
        if (this.numberExists(this.state.stickers, number)) {
            alert('sticker already added!');
            return;
        }
    };

    removeSticker = id => {
        this.setState({
            stickers: [...this.state.stickers.filter(item => item.id !== id)]
        });
    };

    editSticker = (id, key, value) => {
        console.log(key, value);
        this.setState({
            stickers: this.state.stickers.map(sticker => {
                if (sticker.id === id) {
                    sticker[key] = value;
                }
                return sticker;
            })
        });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <main className="wrapper">
                    <StickerList
                        removeSticker={this.removeSticker}
                        editSticker={this.editSticker}
                        stickers={this.state.stickers}
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
