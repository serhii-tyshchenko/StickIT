import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }
  signInWithEmail = (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => error);

  signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await firebase
      .auth()
      .signInWithPopup(provider)
      .catch(error => error.message);
  };

  async signUp(email, password) {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => alert(error.message));
  }

  async logout() {
    return await firebase
      .auth()
      .signOut()
      .catch(error => alert(error.message));
  }

  async addSticker(userID, sticker) {
    const post = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('stickers')
      .doc(sticker.id)
      .set(sticker)
      .catch(error => alert(error.message));
    return post;
  }

  async editSticker(userID, sticker) {
    const post = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('stickers')
      .doc(sticker.id)
      .set(sticker, { merge: true })
      .catch(error => alert(error.message));
    console.log('Sticker Updated');
    return post;
  }

  async deleteSticker(userID, id) {
    const post = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('stickers')
      .doc(id)
      .delete()
      .catch(error => alert(error.message));
    console.log('Sticker Deleted');

    return post;
  }

  // async getUserState() {
  //   return new Promise(resolve => {
  //     this.auth.onAuthStateChanged(resolve);
  //   });
  // }
  async updateSettings(userID, parameter) {
    const settings = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('settings')
      .doc('common')
      .set(parameter, { merge: true })
      .catch(error => alert(error.message));
    console.log('Settings Updated');
    return settings;
  }
  async getSettings(userID) {
    const settings = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('settings')
      .doc('common')
      .get()
      .catch(error => alert(error.message));
    return settings.data();
  }

  async getStickers(userID) {
    const data = [];
    const posts = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('stickers')
      .get()
      .catch(error => alert(error.message));
    posts.forEach(item => data.push(item.data()));
    return data;
  }
}

export default new Firebase();
