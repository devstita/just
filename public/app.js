import { initializeApp } from "../node_modules/firebase/app";
import { getAnalytics } from "../node_modules/firebase/analytics";
import { getDatabase } from '../node_modules/firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_MTeONovzHM8UW6djUzivM92ppyHBZMM",
  authDomain: "just-devstita.firebaseapp.com",
  databaseURL: "https://just-devstita-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "just-devstita",
  storageBucket: "just-devstita.appspot.com",
  messagingSenderId: "939579583946",
  appId: "1:939579583946:web:fa5b693fa378911fe67333",
  measurementId: "G-HWHCBE6CBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);