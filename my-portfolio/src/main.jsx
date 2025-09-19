import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Github from "./pages/Github.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      {
        path: '',     
        element: <Home />,
      },
      {
        path: "about",    
        element: <About />,
      },
      {
        path: "contact",    
        element: <Contact />,
      },
      {
        path: "github",    
        element: <Github />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
