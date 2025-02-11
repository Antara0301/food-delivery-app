import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from "./component/About"
import ErrorComponet from "./component/ErrorComponet"
import Resturent from "./component/Resturent"
import { Body } from './component/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Cart from "./component/Cart"
const Contact = lazy(() => import("./component/Contact"))

const appRouter= createBrowserRouter([
    {
      path:"/",
      element: <App />,
      children:[
        {
            path:"/",
            element: <Body />
          },
        {
            path:"/about",
            element: <About />
          },
          {
              path:"/contact",
              element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>
            },
            {
                path:"/resturents/:resID",
                element: <Resturent />
            },
            {
              path:"/cart",
              element: <Cart />
          }
           

      ],
      errorElement: <ErrorComponet />
    },
    
  ])
  ReactDOM.render(<RouterProvider router={appRouter}/>, document.getElementById('root'));

reportWebVitals();
