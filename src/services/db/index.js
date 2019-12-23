const getStateFromDB = () => {
    const intitalState = {
        stickers: []
    };
    return localStorage.getItem('stickerList')
        ? JSON.parse(localStorage.getItem('stickerList'))
        : intitalState;
};

const saveStateToDB = state => {
    localStorage.setItem('stickerList', JSON.stringify(state));
};

export { getStateFromDB, saveStateToDB };
