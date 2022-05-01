import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

export const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBbwMRcCeW3W7RKchuHtqtElzW6C5B_NQg",

  authDomain: "chat-app-1f2e7.firebaseapp.com",

  projectId: "chat-app-1f2e7",

  storageBucket: "chat-app-1f2e7.appspot.com",

  messagingSenderId: "702214307917",

  appId: "1:702214307917:web:3b1a531c150b70f6d59c04",
};

// const firebaseConfig = {
//   apiKey: process.env.apiKey,

//   authDomain: process.env.authDomain,

//   projectId: process.env.projectId,

//   storageBucket: process.env.storageBucket,

//   messagingSenderId: process.env.messagingSenderId,

//   appId: process.env.appId,
// };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
