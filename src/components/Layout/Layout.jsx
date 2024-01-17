import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import CustomCursor from "../CustomCursor/CustomCursor";

export default function Layout({ children }) {
//   const displayWidth = window.innerWidth;
  
//   const isDesktop = displayWidth > 1024;
 const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

 useEffect(() => {
   const handleResize = () => {
     setIsDesktop(window.innerWidth > 1024);
   };

   const handlePopstate = () => {
     // Обработка изменения истории (возврат на предыдущую страницу)
     // Здесь вы можете добавить код для сброса состояния или анимаций
   };

   window.addEventListener("resize", handleResize);
   window.addEventListener("popstate", handlePopstate);

   return () => {
     window.removeEventListener("resize", handleResize);
     window.removeEventListener("popstate", handlePopstate);
   };
 }, []);


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
