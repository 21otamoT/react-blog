
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH21pOcMRZZkjkhq65NGUBPPnGhwTu2I0",
  authDomain: "blog-b707c.firebaseapp.com",
  projectId: "blog-b707c",
  storageBucket: "blog-b707c.appspot.com",
  messagingSenderId: "1000825495702",
  appId: "1:1000825495702:web:a3cb49603d6dc56333a2b7",
  measurementId: "G-CVYES77F56"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
