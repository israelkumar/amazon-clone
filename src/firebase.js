import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDm_8kjL6ACGZRDhrjO4AEPwq5rdVVrhsc",
    authDomain: "challenge-1453b.firebaseapp.com",
    databaseURL: "https://challenge-1453b.firebaseio.com",
    projectId: "challenge-1453b",
    storageBucket: "challenge-1453b.appspot.com",
    messagingSenderId: "665881010018",
    appId: "1:665881010018:web:a3f96f652308581e4ed63b",
    measurementId: "G-H6P75P5BTY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};