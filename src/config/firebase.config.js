import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQNaDNHDqJ8TTu7NQ0Lm9DRT-_TvXrwrY",
  authDomain: "portfolio-5c682.firebaseapp.com",
  projectId: "portfolio-5c682",
  storageBucket: "portfolio-5c682.firebasestorage.app",
  messagingSenderId: "688506387362",
  appId: "1:688506387362:web:1d0aeb7ad7a7749514d0fb",
  measurementId: "G-S5NQBBXQWS"
};

// Initialize Firebase
const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);
const db = getFirestore()
const analytics = getAnalytics(app);

export {app, db};