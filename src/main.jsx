import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './routes/Home.jsx';
import CountDown from './routes/CountDown.jsx';

// context
import { CountDownProvider } from './context/CountDownContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/countdown', element: <CountDown /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountDownProvider>
      <RouterProvider router={router}></RouterProvider>
    </CountDownProvider>
  </React.StrictMode>,
);
