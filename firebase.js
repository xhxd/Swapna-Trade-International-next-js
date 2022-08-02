// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALfKyMUgVSnnwtV-TNroRaaPKc0TFM3OQ",
  authDomain: "swapna-trade-international.firebaseapp.com",
  projectId: "swapna-trade-international",
  storageBucket: "swapna-trade-international.appspot.com",
  messagingSenderId: "711638340830",
  appId: "1:711638340830:web:ffa0155e182447b4f21e4f",
  measurementId: "G-HEFN1PWMDL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, storage };
export default db;
