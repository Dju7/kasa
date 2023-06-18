import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/main.scss";
import Home from "./pages/Home/";
import Logements from "./pages/Logements/";
import {loader as homeloader} from "./api/loadData"
import {loaderId as lodgingloader} from "./api/loadData"
import Apropos from "./pages/Apropos/";
import Error from "./components/Error/";
import App from "./App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />, loader: homeloader },
      { path: "/logements/:id", element: <Logements />, loader: lodgingloader, errorElement: <Error errorMessage="Ce logement n'existe pas" />},
      { path: "/apropos", element: <Apropos /> },
      { path: "*", errorElement: <Error />, loader: lodgingloader},
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
