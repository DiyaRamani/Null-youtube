// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: "AIzaSyAEcvgFj0yavFL0pYAcAR4bv3DTalSv2x8",
  authDomain: "clone-31145.firebaseapp.com",
  projectId: "clone-31145",
  storageBucket: "clone-31145.appspot.com",
  messagingSenderId: "323523310555",
  appId: "1:323523310555:web:b7ea4e642dc12fadb3edfe",
  measurementId: "G-C9Z60MP09V"
}; */
const firebaseConfig = {
  apiKey: "AIzaSyAyspiS7_3zZ-72MkO2UhV_RPnaDSjxpZs",
  authDomain: "fir-f37c9.firebaseapp.com",
  projectId: "fir-f37c9",
  storageBucket: "fir-f37c9.appspot.com",
  messagingSenderId: "826140219357",
  appId: "1:826140219357:web:137bdf2e00460d4f52c834",
  measurementId: "G-77V3JJE07R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
