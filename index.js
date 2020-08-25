// Import stylesheets
import './style.css';

import firebase from 'firebase';
require('firebase/firestore');

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

let chat = firebase.firestore().collection("chat");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let message = document.querySelector("input").value;

  chat.add({
    message : message,
    timestamp: Date.now()
  });

document.querySelector("input").value="";


  return false
});

chat.orderBy("timestamp", "desc").limit(10).onSnapshot((querySnapshot) => {
  let list = document.querySelector("ol");
  list.innerHTML="";
  querySnapshot.forEach((doc)=> {
    let li = document.createElement("li");
    li.textContent =doc.data().message;
    list.append(li);
  })
})