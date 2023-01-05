// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaIPLZ8TSQGnGqjIG-PdXvk8_SWlOeETU",
  authDomain: "celesty-lists.firebaseapp.com",
  projectId: "celesty-lists",
  storageBucket: "celesty-lists.appspot.com",
  messagingSenderId: "11125452544",
  appId: "1:11125452544:web:a966b464462ab7a5058de5",
  measurementId: "G-HBCD8BC3R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);