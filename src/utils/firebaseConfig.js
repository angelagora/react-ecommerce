// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFg3iaEFbkTPMe6v-ylDWU8BCe0Jlv_GU",
  authDomain: "react-ecommerce-angel-rincones.firebaseapp.com",
  projectId: "react-ecommerce-angel-rincones",
  storageBucket: "react-ecommerce-angel-rincones.appspot.com",
  messagingSenderId: "895118560532",
  appId: "1:895118560532:web:50d35df2d0e632a9268601",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore(app);

export default db;
