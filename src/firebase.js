// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC8dcHs0RLta3UspF719RyX6jE6Wy8kkw",
  authDomain: "todo-app-b5b18.firebaseapp.com",
  projectId: "todo-app-b5b18",
  storageBucket: "todo-app-b5b18.appspot.com",
  messagingSenderId: "365974828737",
  appId: "1:365974828737:web:b4ca885af2db99424e8640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);