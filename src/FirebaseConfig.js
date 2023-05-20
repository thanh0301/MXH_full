

import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCTCjYKps49q137lLK2Q7ZpKmr_z5qnTxo",
  authDomain: "facebook-1fc6b.firebaseapp.com",
  projectId: "facebook-1fc6b",
  storageBucket: "facebook-1fc6b.appspot.com",
  messagingSenderId: "894542014507",
  appId: "1:894542014507:web:b3e3de6666494beb3ce26e",
  measurementId: "G-MHN4BN4L6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export {auth, provider}