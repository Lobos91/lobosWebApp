import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";

import Home from "./components/Home.jsx";
import Installation from "./components/Installation.jsx";
import Compedium from "./components/Compedium.jsx";

const router = createBrowserRouter([
  {
    path: "/gothic2lobos.com/",
    element: <App />,
    children: [
      {
        path: "/gothic2lobos.com/",
        element: <Home />,
      },
      {
        path: "/gothic2lobos.com/installation",
        element: <Installation />,
      },
      {
        path: "/gothic2lobos.com/compedium",
        element: <Compedium />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
