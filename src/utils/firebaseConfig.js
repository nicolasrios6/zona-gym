// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDceazmT7U3P0xbsyaL_VfjJH1K2u301-I",
  authDomain: "zona-gym-7b7d2.firebaseapp.com",
  projectId: "zona-gym-7b7d2",
  storageBucket: "zona-gym-7b7d2.appspot.com",
  messagingSenderId: "336982150688",
  appId: "1:336982150688:web:bac16df581c514724a3645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore initialize
const dataBase = getFirestore(app)

export default dataBase