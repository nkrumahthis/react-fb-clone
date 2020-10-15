import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDySxUWpS5RsjcOQoMaAXlThUTikXroi3k",
  authDomain: "fb-clone-bc666.firebaseapp.com",
  databaseURL: "https://fb-clone-bc666.firebaseio.com",
  projectId: "fb-clone-bc666",
  storageBucket: "fb-clone-bc666.appspot.com",
  messagingSenderId: "38606970802",
  appId: "1:38606970802:web:0459d40a2d5d31e8f64eab",
  measurementId: "G-4RD909HZ0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;