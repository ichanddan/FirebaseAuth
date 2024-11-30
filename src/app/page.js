"use client";
import { createContext, useContext, useEffect, useState } from "react";
import NaveBar from "./components/NaveBar";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { oAuth, provider } from "../firebase/index";
import Faq from "./components/Faq";
const AuthProver = createContext();
export default function Home() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const logDIn = await signInWithPopup(oAuth, provider);
      console.log(logDIn);
    } catch (error) {
      console.log(error, "from login ");
    }
  };
  const logOut = async () => {
    try {
      const singOut = await signOut(oAuth);
      console.log(singOut);
    } catch (error) {
      console.log(error, "from SingOut ");
    }
  };
  // useEffect(() => {
  //   const unscribe = onAuthStateChanged(oAuth, provider);
  //   return unscribe;
  // }, []);

  return (
    <AuthProver.Provider value={{ user, login, logOut }}>
      <NaveBar />
      <Faq />
    </AuthProver.Provider>
  );
}
export const FAuth = () => useContext(A)
