import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5WVWwMrUyPoNHtp1oJ8osRyMkIX7oTpE",
  authDomain: "react-slack-clone-4d108.firebaseapp.com",
  databaseURL: "https://react-slack-clone-4d108.firebaseio.com",
  projectId: "react-slack-clone-4d108",
  storageBucket: "react-slack-clone-4d108.appspot.com",
  messagingSenderId: "224371874647",
  appId: "1:224371874647:web:73e089c2b4a60b7a98fc12",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
