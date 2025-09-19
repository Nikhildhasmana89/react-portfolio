import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content takes remaining space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer sticks at bottom */}
      <Footer/>
    </div>
  );
}

export default Layout;
