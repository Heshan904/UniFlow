// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv8UgbAvtf_T9eUK57M61tVZOu3KI9ohU",
  authDomain: "uniflow-2fd3a.firebaseapp.com",
  projectId: "uniflow-2fd3a",
  storageBucket: "uniflow-2fd3a.firebasestorage.app",
  messagingSenderId: "174949009442",
  appId: "1:174949009442:web:7db47eb70891bf4a8c627b",
  measurementId: "G-5TP43P8CNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export {app,analytics};