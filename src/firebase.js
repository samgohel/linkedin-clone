import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYk4mPpKq9woGRMJfnWi2BwjLxlAuvy-o",
  authDomain: "linkedin-clone-4673c.firebaseapp.com",
  projectId: "linkedin-clone-4673c",
  storageBucket: "linkedin-clone-4673c.appspot.com",
  messagingSenderId: "445039377470",
  appId: "1:445039377470:web:57b43ee3f0f15581a5656f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
