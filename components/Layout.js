import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      
      <Navbar />
      {children} <Footer />
    </div>
  );
}
