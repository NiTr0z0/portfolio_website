import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./pages/Project.tsx";
import Interests from "./pages/Interests.tsx";
import CP from "./pages/CP.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/Projects",
      element: <Project />,
    },
    {
      path: "/Interests",
      element: <Interests />,
    },
    {
      path: "/CP",
      element: <CP />,
    },
  ],
  {
    basename: "/portfolio_website",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
