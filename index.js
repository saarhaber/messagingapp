// Import stylesheets
import './style.css';

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDEVi06SPIZK386AbQmlN-gaMRbXMcO_54",
    authDomain: "saars-project.firebaseapp.com",
    databaseURL: "https://saars-project.firebaseio.com",
    projectId: "saars-project",
    storageBucket: "saars-project.appspot.com",
    messagingSenderId: "664923134253",
    appId: "1:664923134253:web:f6def11ff8e064e1ad9ba4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);