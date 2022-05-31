import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const provider = new GoogleAuthProvider();


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,

  authDomain: import.meta.env.VITE_authDomain,

  projectId: import.meta.env.VITE_projectId,

  storageBucket: import.meta.env.VITE_storageBucket,

  messagingSenderId: import.meta.env.VITE_messagingSenderId,

  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
