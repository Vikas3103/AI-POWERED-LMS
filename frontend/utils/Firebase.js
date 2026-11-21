import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "ai-powered-lms-ea306.firebaseapp.com",
  projectId: "ai-powered-lms-ea306",
  storageBucket: "ai-powered-lms-ea306.firebasestorage.app",
  messagingSenderId: "443854956570",
  appId: "1:443854956570:web:ed0831ca406533f4b389a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}