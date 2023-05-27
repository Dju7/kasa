import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/main.scss";
import Home, { loader as homeloader } from "./pages/Home/";
import Logements, { loader as lodgingloader } from "./pages/Logements/";
import Apropos from "./pages/Apropos/";
import Error from "./components/Error/";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, loader: homeloader },
      { path: "/logements/:id", element: <Logements />, loader: lodgingloader },
      { path: "/apropos", element: <Apropos /> },
      { path: "*", element: <Error />, loader: lodgingloader},
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
