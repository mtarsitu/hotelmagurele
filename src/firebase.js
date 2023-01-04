// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5MGbA3mxYlJ3iAK7b2hrLnnS52Uka4_I",
  authDomain: "hotelmagurele.firebaseapp.com",
  databaseURL: "https://hotelmagurele-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hotelmagurele",
  storageBucket: "hotelmagurele.appspot.com",
  messagingSenderId: "968260556925",
  appId: "1:968260556925:web:1870bf3e15374890d9f914",
  measurementId: "G-V8G1RQG6QR"
};

let db;
// Initialize Firebase
async function initialize(){
  const app = await initializeApp(firebaseConfig);
  db = getFirestore(app);
}

initialize()
// const analytics = getAnalytics(app);

export {db}