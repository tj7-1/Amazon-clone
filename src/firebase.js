// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf6WIBpY3dZEBbrjIHcwhtKgrAQ_drmW8",
  authDomain: "clone-4d30f.firebaseapp.com",
  projectId: "clone-4d30f",
  storageBucket: "clone-4d30f.appspot.com",
  messagingSenderId: "195491624803",
  appId: "1:195491624803:web:7eeec4580bdcb68abc8556",
  measurementId: "G-M1Y52YZX5B"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();   //firestore is a real time database in firebase.
  const auth= firebase.auth();    //handle all the signin in and stuff.

  export { db, auth };