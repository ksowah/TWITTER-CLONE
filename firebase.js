// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA58gXmypEXgBDYvHY2HR8qYJE3sVNFZpg",
  authDomain: "the-dashboard-73522.firebaseapp.com",
  projectId: "the-dashboard-73522",
  storageBucket: "the-dashboard-73522.appspot.com",
  messagingSenderId: "114724825765",
  appId: "1:114724825765:web:53de51e3312d647b94bb4c",
  measurementId: "G-L9K6VHGQG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);