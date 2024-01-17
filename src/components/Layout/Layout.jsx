import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "../CustomCursor/CustomCursor";

export default function Layout({ children }) {
  const displayWidth = window.innerWidth;
  
  const isDesktop = displayWidth > 1024;

  return (
    <div>
      {isDesktop&&<CustomCursor />}
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
