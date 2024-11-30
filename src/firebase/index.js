// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArOkP772NrLehgUGNvxLb1LJFUryiLSGg",
  authDomain: "terstr-b6a89.firebaseapp.com",
  projectId: "terstr-b6a89",
  storageBucket: "terstr-b6a89.firebasestorage.app",
  messagingSenderId: "219918853950",
  appId: "1:219918853950:web:f77bda520098add744ae6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const oAuth = getAuth(app);
const provider = new GoogleAuthProvider()
export default{
    oAuth,
    provider
}