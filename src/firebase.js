import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8QZGs_0pZ48GpAiU1R5_eVmD0A6k5d5w",
    authDomain: "whatsapp-auth-clone.firebaseapp.com",
    projectId: "whatsapp-auth-clone",
    storageBucket: "whatsapp-auth-clone.appspot.com",
    messagingSenderId: "811938545422",
    appId: "1:811938545422:web:d719c7593e1faffa62615f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;