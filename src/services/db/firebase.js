import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC1OUIP1mhGcI6HF2dFhAZTemforCy-pu4',
  authDomain: 'stickit-edbe9.firebaseapp.com',
  databaseURL: 'https://stickit-edbe9.firebaseio.com',
  projectId: 'stickit-edbe9',
  storageBucket: 'stickit-edbe9.appspot.com',
  messagingSenderId: '210064489150',
  appId: '1:210064489150:web:4a80f6691650254d5bfcef',
  measurementId: 'G-1WR7GSB1SH'
};
const provider = new firebase.auth.GoogleAuthProvider();

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }
  async signInWithEmail(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
    return user;
  }
  async signInWithGoogle() {
    const user = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch(error => console.log(error));
    return user;
  }

  async signUp(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch(error => console.log(error));
    return logout;
  }

  async addSticker(userID, sticker) {
    const post = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('stickers')
      .doc(sticker.id)
      .set(sticker)
      .catch(error => console.log(error));
    console.log('Sticker Added');
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
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
    posts.forEach(item => data.push(item.data()));
    return data;
  }
}
export default new Firebase();
