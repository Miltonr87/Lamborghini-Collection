import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQQ7nKyUesWmYVmGkIbozdOFz8MufL_WI",
    authDomain: "tinder-clone-react-firebase.firebaseapp.com",
    projectId: "tinder-clone-react-firebase",
    storageBucket: "tinder-clone-react-firebase.appspot.com",
    messagingSenderId: "564067387805",
    appId: "1:564067387805:web:efe407885ee327dc0f8774",
    measurementId: "G-P2T6C3NKR5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;