

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABk1s7KiyQCmhQx643hJoCf9fL16jZw1k",
    authDomain: "aurelia-e4a8e.firebaseapp.com",
    projectId: "aurelia-e4a8e",
    storageBucket: "aurelia-e4a8e.appspot.com",
    messagingSenderId: "405821091636",
    appId: "1:405821091636:web:5963d58cdb93c9538fff61"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const firestore = getFirestore(app);
const storage = getStorage(app);
const db = getFirestore(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log('User is logged in:', user.uid);
  } else {
    // console.log('User is logged out');
  }
});

export { app, analytics, auth, firestore, storage, getAuth, db, onAuthStateChanged };