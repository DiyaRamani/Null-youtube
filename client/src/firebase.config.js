// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxdY1ws9uqrjoeEMbVZrvIepNksI7tsyQ",
  authDomain: "null-c0252.firebaseapp.com",
  projectId: "null-c0252",
  storageBucket: "null-c0252.appspot.com",
  messagingSenderId: "1006851472116",
  appId: "1:1006851472116:web:a65efa6f5c96ab4f70bca1",
  measurementId: "G-0QJNFTC9HB"
};
/* const firebaseConfig = {
  apiKey: "AIzaSyAyspiS7_3zZ-72MkO2UhV_RPnaDSjxpZs",
  authDomain: "fir-f37c9.firebaseapp.com",
  projectId: "fir-f37c9",
  storageBucket: "fir-f37c9.appspot.com",
  messagingSenderId: "826140219357",
  appId: "1:826140219357:web:137bdf2e00460d4f52c834",
  measurementId: "G-77V3JJE07R"
}; */
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
