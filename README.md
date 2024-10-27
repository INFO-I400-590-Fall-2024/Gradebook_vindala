# INFO-I400/590 Gradebook Application
Built with Expo Router and Firebase



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBanNkNgIRf32z_Cag0M9WvG4HvNWBdjHQ",
  authDomain: "gradebookapp-72b82.firebaseapp.com",
  projectId: "gradebookapp-72b82",
  storageBucket: "gradebookapp-72b82.appspot.com",
  messagingSenderId: "255800170197",
  appId: "1:255800170197:web:70e0f0921768eb2b8af45c",
  measurementId: "G-KJELZV7S3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);