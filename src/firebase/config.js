import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMbHn0hIZMaxdUhkzXAG1IslCqyjSnvQM",
    authDomain: "tavalod-7a7bd.firebaseapp.com",
    projectId: "tavalod-7a7bd",
    storageBucket: "tavalod-7a7bd.appspot.com",
    messagingSenderId: "686460712985",
    appId: "1:686460712985:web:b98740f973c60f78e29288"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Storage 
const storage = getStorage(app);
// Initialize Firestore
const db = getFirestore(app);

export{db,storage}

