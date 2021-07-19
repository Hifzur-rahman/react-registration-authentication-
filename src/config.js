import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDsNf1oEP067Koe54EDegQB15z6BkhKN1Q",
  authDomain: "react1-props.firebaseapp.com",
  projectId: "react1-props",
  storageBucket: "react1-props.appspot.com",
  messagingSenderId: "519455695906",
  appId: "1:519455695906:web:15129d7cad731eb06d967b",
  measurementId: "G-1Z9T23YE0Y"
});

export default firebaseConfig;
