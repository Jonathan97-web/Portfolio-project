import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Homepage from './Homepage';
import Error from './pages/Error'
import Projects from './pages/Projects';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,
RouterProvider, } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />
    
  }

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
