import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBhFdVQTpfNOZyHDI4T9469eNcq_Ylpkjg",
    authDomain: "fir-9a63d.firebaseapp.com",
    projectId: "fir-9a63d",
    storageBucket: "fir-9a63d.appspot.com",
    messagingSenderId: "667189119499",
    appId: "1:667189119499:web:5c61595b890ab1030b950e",
    measurementId: "G-P0Y05DZ634"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()

  export{ db, auth }