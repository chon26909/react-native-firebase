import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDD055CyI-LUHpE8NSGOuTTCFrsKqr3-0E",
  authDomain: "crud-react-native-ac111.firebaseapp.com",
  projectId: "crud-react-native-ac111",
  storageBucket: "crud-react-native-ac111.appspot.com",
  messagingSenderId: "255483425901",
  appId: "1:255483425901:web:b7399a0b295659f0fa7b64",
  measurementId: "G-X7R6PB16BK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
