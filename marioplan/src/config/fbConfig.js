import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCWorbeSYUIec7J3kw7B_CIYXwWkYe2Imw",
  authDomain: "mario-ab222.firebaseapp.com",
  databaseURL: "https://mario-ab222.firebaseio.com",
  projectId: "mario-ab222",
  storageBucket: "mario-ab222.appspot.com",
  messagingSenderId: "1002370156751",
  appId: "1:1002370156751:web:ed7330ac9d2f7d73"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
