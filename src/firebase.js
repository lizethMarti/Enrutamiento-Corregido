import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCaSwegFg0j5rVxRSGeR1u7FIaZLs65d8Y",
    authDomain: "pupfinder-6a901.firebaseapp.com",
    databaseURL: "https://pupfinder-6a901.firebaseio.com",
    projectId: "pupfinder-6a901",
    storageBucket: "pupfinder-6a901.appspot.com",
    messagingSenderId: "88095902525"
  };
  firebase.initializeApp(config);

export default firebase