// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { base_url } from "./database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc3DXGFQ6B9-Qu5wkbyIBIiIO0c2ijKo8",
  authDomain: "e-commerce-react-native-7e80a.firebaseapp.com",
  databaseURL: base_url,
  projectId: "e-commerce-react-native-7e80a",
  storageBucket: "e-commerce-react-native-7e80a.appspot.com",
  messagingSenderId: "97705247934",
  appId: "1:97705247934:web:188fc8fcf4c25c444d0aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app);