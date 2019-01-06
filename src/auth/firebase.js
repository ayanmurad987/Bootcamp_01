import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBdyHCNZJhcZOEg4XITkSh_qDtKD1To8_4",
    authDomain: "bootcamp-1-ac39e.firebaseapp.com",
    databaseURL: "https://bootcamp-1-ac39e.firebaseio.com",
    projectId: "bootcamp-1-ac39e",
    storageBucket: "bootcamp-1-ac39e.appspot.com",
    messagingSenderId: "905883963799"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })


  export default firebase;