import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Requests from "./pages/Requests";

export const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pedidos", element: <Requests /> },
]);
