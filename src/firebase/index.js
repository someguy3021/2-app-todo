// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOSxLt-hWp9RXUZug2Ev2fJM01dM6tqC4",
  authDomain: "mytodolist-c3c92.firebaseapp.com",
  projectId: "mytodolist-c3c92",
  storageBucket: "mytodolist-c3c92.appspot.com",
  messagingSenderId: "88301070752",
  appId: "1:88301070752:web:e133a4032d703a6732dcc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
