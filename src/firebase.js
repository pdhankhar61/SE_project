import firebase from 'firebase';

const firebaseConfig = {
    // apiKey: "AIzaSyAEqjsu2BzFGORMguDzoElypS2kdNyE09Y",
    // authDomain: "customerchoice-16e0b.firebaseapp.com",
    // projectId: "customerchoice-16e0b",
    // storageBucket: "customerchoice-16e0b.appspot.com",
    // messagingSenderId: "365716664998",
    // appId: "1:365716664998:web:422894aad2f2468134ba67"

    apiKey: "AIzaSyC9A8crBbzYD60NSQVWzJu-Xcxl6JfrAlA",
    authDomain: "clone-mar21-b9331.firebaseapp.com",
    projectId: "clone-mar21-b9331",
    storageBucket: "clone-mar21-b9331.appspot.com",
    messagingSenderId: "833631973262",
    appId: "1:833631973262:web:79a3e94fcff3522c8ebedf",
    measurementId: "G-ZD62WJ213K"


  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };