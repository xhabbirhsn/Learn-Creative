import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmO3838g38XfaCEOdh9lNnwc7KFsaw7eA",
  authDomain: "react-contact-us-665fd.firebaseapp.com",
  projectId: "react-contact-us-665fd",
  storageBucket: "react-contact-us-665fd.appspot.com",
  messagingSenderId: "785025612868",
  appId: "1:785025612868:web:2e050190797ee5a40e1011",
  measurementId: "G-ZNYSRH9MQM"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)