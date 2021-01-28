import * as firebase from 'firebase';

import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYF66wl3MoagKjpAvrgzm6MO-p0t_yP7M",
    authDomain: "scheduler-a965a.firebaseapp.com",
    databaseURL: "https://scheduler-a965a-default-rtdb.firebaseio.com",
    projectId: "scheduler-a965a",
    storageBucket: "scheduler-a965a.appspot.com",
    messagingSenderId: "411156851142",
    appId: "1:411156851142:web:2fcdd790bbda1fc8366ac7",
    measurementId: "G-QH86WST6FS"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };