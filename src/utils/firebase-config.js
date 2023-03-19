// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhiyYO7GLhKYEsiY9VHZJJ7BkjmxrSlwU",
  authDomain: "react-movie-clone-e8031.firebaseapp.com",
  projectId: "react-movie-clone-e8031",
  storageBucket: "react-movie-clone-e8031.appspot.com",
  messagingSenderId: "661066813546",
  appId: "1:661066813546:web:484693df16311e7f8f3a13",
  measurementId: "G-W4TJSMEG6R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
