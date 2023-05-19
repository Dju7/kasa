import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/main.scss';
import Home from './pages/Home/';
import Logements from './pages/Logements/'
import Apropos from './pages/Apropos/'
import Error from './components/Error/'
import App from './App'
import {getAllLodgings} from './api/'

console.log(getAllLodgings());

const Router = createBrowserRouter ([
  { path: '/', element: <App />,
   children: [
    { path: '/', element: <Home /> },
    { path: '/logements/:id', element: <Logements /> },
    { path: '/apropos', element: <Apropos /> },
    { path: '*', element: <Error /> },
  ],
 },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);



