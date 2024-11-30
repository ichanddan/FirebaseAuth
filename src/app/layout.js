"use client";
import Faq from "./components/Faq";
import NaveBar from "./components/NaveBar";
import { AuthContextProvider } from "./Context/AuthContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {children}
          <NaveBar />
          <Faq />
        </AuthContextProvider>
      </body>
    </html>
  );
}
