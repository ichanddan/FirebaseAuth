// 'use client'
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { oAuth, provider } from "../../firebase/index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(oAuth, (userData) => {
      setUser(userData);
    });
    return unsubscribe;
  }, [user]);

  const login = async () => {
    try {
      const {user} = await signInWithPopup(oAuth, provider);
      console.log("User logged in:", user);
      setUser(user)
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(oAuth);
      console.log("Successfully signed out");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
