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
var provider = new firebase.auth.GoogleAuthProvider();

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }
  //login
  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  }
  async googleSignin() {
    const user = await firebase
      .auth()
      .signInWithPopup(provider)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);
      });
    return user;
  }
  //signin
  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch(err => {
        console.log(err);
        return err;
      });
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
      .catch(err => {
        console.log(err);
      });
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
      .catch(err => {
        console.log(err);
      });
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
      .catch(err => {
        console.log(err);
      });
    console.log('Sticker Deleted');

    return post;
  }

  // async getUserState() {
  //   return new Promise(resolve => {
  //     this.auth.onAuthStateChanged(resolve);
  //   });
  // }

  async getStickers(userID) {
    const data = [];
    const posts = await firebase
      .firestore()
      .collection('data')
      .doc(userID)
      .collection('stickers')
      .get();
    posts.forEach(item => data.push(item.data()));
    return data;
  }

  // async getPost(postid) {
  //   const post = await firebase
  //     .firestore()
  //     .collection('Posts')
  //     .doc(postid)
  //     .get();
  //   const postData = post.data();
  //   return postData;
  // }
}

export default new Firebase();
