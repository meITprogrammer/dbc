import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASUXfBFlloQAZY09UFMczJ4Xyza3nRiIg",
  authDomain: "bizcard-7c631.firebaseapp.com",
  projectId: "bizcard-7c631",
  storageBucket: "bizcard-7c631.appspot.com",
  messagingSenderId: "723052729513",
  appId: "1:723052729513:web:28a59e0101aeb2d1fac5b8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);