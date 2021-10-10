import React from 'react';
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyABAbhI4hw5qxIf0xpIsZyX6tMZZ34mJQ8",
    authDomain: "myapp-70863.firebaseapp.com",
    databaseURL: "https://myapp-70863-default-rtdb.firebaseio.com",
    projectId: "myapp-70863",
    storageBucket: "myapp-70863.appspot.com",
    messagingSenderId: "667586636095",
    appId: "1:667586636095:web:97c56af68ac5ae21d24b8a",
    measurementId: "G-R3SXSRGPZW"
  };
  // Initialize Firebase

     let Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;