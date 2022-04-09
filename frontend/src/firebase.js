import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD04Lop2qs_qtc06FTwq8jyOChVzZHuagc",
  authDomain: "truba-erp.firebaseapp.com",
  projectId: "truba-erp",
  storageBucket: "truba-erp.appspot.com",
  messagingSenderId: "873110461141",
  appId: "1:873110461141:web:6c16850c364f506949e05c",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
