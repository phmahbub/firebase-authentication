// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrjZHRLFYA-0sr8ob06BHVapIwJabOV7s",
  authDomain: "fir-authentication-592ba.firebaseapp.com",
  projectId: "fir-authentication-592ba",
  storageBucket: "fir-authentication-592ba.appspot.com",
  messagingSenderId: "67115229410",
  appId: "1:67115229410:web:4333cd0d40cb4cd38d3ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app