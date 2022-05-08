import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAagC0uY7k5m4xo1F3RCbPcUfnKk_z8xa0",
  authDomain: "chat-messengers-e31ed.firebaseapp.com",
  databaseURL: "http://chat-messengers-e31ed.firebaseio.com",
  projectId: "chat-messengers-e31ed",
  storageBucket: "chat-messengers-e31ed.appspot.com",
  messagingSenderId: "747839658109",
  appId: "1:747839658109:web:08443c056b5b7e34e5f914",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };
