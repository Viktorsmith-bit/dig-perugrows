// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBixnf5iceTB0QdiFOuiPDj8dfQEsdTG8o",
    authDomain: "perugrows-c1a90.firebaseapp.com",
    projectId: "perugrows-c1a90",
    storageBucket: "perugrows-c1a90.appspot.com",
    messagingSenderId: "781501459795",
    appId: "1:781501459795:web:b225debc88b9b66c7085a6"
  };

initializeApp(firebaseConfig);
export const app =  getDatabase();