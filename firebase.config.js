// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCo9I4iigFMDqX7_5eoAZdj1iEdQ1wnR4c",
    authDomain: "proyecto-permafrost-45b38.firebaseapp.com",
    projectId: "proyecto-permafrost-45b38",
    storageBucket: "proyecto-permafrost-45b38.appspot.com",
    messagingSenderId: "508507138893",
    appId: "1:508507138893:web:2f04b0efd87f7bd8042504"
};

initializeApp(firebaseConfig);
export const app =  getDatabase();