import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/main.scss';
import Home from './pages/Home/';
import Logements from './pages/Logements/'
import Apropos from './pages/Apropos/'
import Error from './components/Error/'
import Header from './components/Header/'
import Footer from './components/Footer/'

const Router = createBrowserRouter ([
  { path: '/', element: <Home /> },
  { path: '/logements', element: <Logements /> },
  { path: '/apropos', element: <Apropos /> },
  { path: '*', element: <Error /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <div className='content-wrapper'>
        <Header />
      </div>
      <Footer />
    </RouterProvider>
  </React.StrictMode>
);