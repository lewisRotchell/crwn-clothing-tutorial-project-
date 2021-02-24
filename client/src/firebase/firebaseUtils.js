import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2RZxbqiJjql8cf7wa57sY7rMFLtsJEB4",
  authDomain: "crwn-db-5866e.firebaseapp.com",
  projectId: "crwn-db-5866e",
  storageBucket: "crwn-db-5866e.appspot.com",
  messagingSenderId: "702291325196",
  appId: "1:702291325196:web:25c552bc08d39b43b85929",
  measurementId: "G-0732RDG70X",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
