import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' ;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css' ;
import Root from './routes/Root.jsx';
import ErrorPage from './Error-page.jsx';
import Contact from "./routes/Contact.jsx";
import Stoner from './Stoner.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path:"/stoner",
    element: <Stoner />,
  },
  {
    path:"/rock",
    element: <App />,
  },
  {
    path:"/metal",
    element: <h1>Metal</h1>,
  }
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
