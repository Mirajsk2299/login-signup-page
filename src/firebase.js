import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlOXazx0VszbTZ5rAnujcYOxYaqsPCU4U",
  authDomain: "login-create-account-e8e9c.firebaseapp.com",
  projectId: "login-create-account-e8e9c",
  storageBucket: "login-create-account-e8e9c.firebasestorage.app",
  messagingSenderId: "984758604874",
  appId: "1:984758604874:web:a1708922ba60844ac302b3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
