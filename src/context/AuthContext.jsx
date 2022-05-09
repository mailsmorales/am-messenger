import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth, db } from "../firebase/config";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading]= useState(true)

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);


    await setDoc(doc(db, "users", response.user.uid), {
      uid: response.user.uid,
      name: response.user.displayName,
      email: response.user.email,
      createdAt: Timestamp.fromDate(new Date()),
      isOnline: true,
    });
   
    // signInWithRedirect(auth, provider)
  };

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser, user) => {
      setUser(currentUser, user);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};