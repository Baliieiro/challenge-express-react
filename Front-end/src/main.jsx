import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle.js";
import { Outlet, RouterProvider } from "react-router-dom";
import { Router } from "./Router.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={Router}>
        <Outlet />
      </RouterProvider>
    </React.StrictMode>
  </>
);
