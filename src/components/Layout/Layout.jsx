import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const Layout = ({ children }) => {
  const handle = useFullScreenHandle();
  return (
    <FullScreen handle={handle}>
      <Header handler={handle}/>
      <main className="bg-[#f7f7fa] flex flex-row justify-start items-center gap-0 w-full">
        <Sidebar className="w-1/2" />
        {children}
      </main>
      <Footer />
    </FullScreen>
  );
};
// export default Layout
