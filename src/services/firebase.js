import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdWBNl6D1ot7km0QtwqrxQ1YQB2auMY_o",
  authDomain: "chat-api-teste-bb082.firebaseapp.com",
  projectId: "chat-api-teste-bb082",
  storageBucket: "chat-api-teste-bb082.appspot.com",
  messagingSenderId: "520452136290",
  appId: "1:520452136290:web:f3ecc57d60e275f09f203b"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
