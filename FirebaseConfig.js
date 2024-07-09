// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0asBqHkMEsb9OCy0Jips7s6PfZI6yY-k",
  authDomain: "trac-94b53.firebaseapp.com",
  projectId: "trac-94b53",
  storageBucket: "trac-94b53.appspot.com",
  messagingSenderId: "149037675552",
  appId: "1:149037675552:web:8274d373f66f2278027845"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Function to get the current user email
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        resolve(user.email);
      } else {
        reject(new Error('User not logged in'));
      }
    });
  });
};

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };
