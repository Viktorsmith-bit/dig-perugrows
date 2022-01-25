// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAB9HO6PNAPA5KEdOVlnFAXh73fFso65EA",
  authDomain: "perugrows-datavector2.firebaseapp.com",
  projectId: "perugrows-datavector2",
  storageBucket: "perugrows-datavector2.appspot.com",
  messagingSenderId: "24695197243",
  appId: "1:24695197243:web:97253698ab8d6c477b961e"
};

initializeApp(firebaseConfig);
export const app =  getDatabase();